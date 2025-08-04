document.addEventListener("DOMContentLoaded", () => {
  const employees = [
    { employeeId: 1, name: "Sibongile Nkosi", department: "Development", salary: 70000, hoursWorked: 160, leaveDays: 2 },
    { employeeId: 2, name: "Lungile Moyo", department: "HR", salary: 80000, hoursWorked: 160, leaveDays: 1 },
    { employeeId: 3, name: "Thabo Molefe", department: "QA", salary: 55000, hoursWorked: 150, leaveDays: 3 },
    { employeeId: 4, name: "Keshav Naidoo", department: "Sales", salary: 60000, hoursWorked: 158, leaveDays: 1 },
    { employeeId: 5, name: "Zanele Khumalo", department: "Marketing", salary: 58000, hoursWorked: 140, leaveDays: 4 },
    { employeeId: 6, name: "Sipho Zulu", department: "Design", salary: 65000, hoursWorked: 155, leaveDays: 3 },
    { employeeId: 7, name: "Naledi Moeketsi", department: "IT", salary: 72000, hoursWorked: 160, leaveDays: 0 },
    { employeeId: 8, name: "Heather Johnson", department: "Marketing", salary: 56000, hoursWorked: 150, leaveDays: 2 },
    { employeeId: 9, name: "Chad Thompson", department: "Finance", salary: 62000, hoursWorked: 152, leaveDays: 2 },
    { employeeId: 10, name: "Madison Clark", department: "Support", salary: 58000, hoursWorked: 145, leaveDays: 5 }
  ];

  // Load payrolls from localStorage or empty array if none
  let payrolls = JSON.parse(localStorage.getItem("payrolls") || "[]");

  const empSelect = document.getElementById("empSelect");
  const salaryInput = document.getElementById("empSalary");
  const hoursInput = document.getElementById("empHours");
  const leaveInput = document.getElementById("empLeave");
  const addForm = document.getElementById("addForm");
  const tableBody = document.querySelector("#payrollTable tbody");
  const yearlyBody = document.querySelector("#yearlyTable tbody");
  const searchInput = document.getElementById("searchInput");

  const salaryChartCtx = document.getElementById("salaryChart").getContext("2d");
  const pieChartCtx = document.getElementById("breakdownChart").getContext("2d");
  let salaryChart, pieChart;

  // Populate employee dropdown
  employees.forEach(emp => {
    const option = document.createElement("option");
    option.value = emp.employeeId;
    option.textContent = emp.name;
    empSelect.appendChild(option);
  });

  // Prefill salary, hours, leave on select change
  empSelect.addEventListener("change", () => {
    const selected = employees.find(e => e.employeeId == empSelect.value);
    if (selected) {
      salaryInput.value = selected.salary;
      hoursInput.value = selected.hoursWorked;
      leaveInput.value = selected.leaveDays;
    } else {
      salaryInput.value = hoursInput.value = leaveInput.value = "";
    }
  });

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emp = employees.find(e => e.employeeId == empSelect.value);
    if (!emp) return;

    const deductions = calculateDeductions(emp.salary, emp.leaveDays);
    const finalSalary = emp.salary - deductions.total;

    // Remove existing payroll for employee if any
    const existingIndex = payrolls.findIndex(p => p.employeeId === emp.employeeId);
    if (existingIndex !== -1) payrolls.splice(existingIndex, 1);

    payrolls.push({ ...emp, deductions, finalSalary });

    // Save updated payrolls to localStorage
    localStorage.setItem("payrolls", JSON.stringify(payrolls));

    addForm.reset();
    renderTable(payrolls);
    renderYearlyTable(payrolls);
    updateCharts(payrolls);
  });

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = payrolls.filter(emp => emp.name.toLowerCase().includes(keyword));
    renderTable(filtered);
    renderYearlyTable(filtered);
    updateCharts(filtered);
  });

  function calculateDeductions(salary, leave) {
    const tax = Math.round(salary * 0.18);
    const uif = Math.round(salary * 0.01);
    const leavePenalty = Math.round((salary / 22) * leave);
    const total = tax + uif + leavePenalty;
    return { tax, uif, leavePenalty, total };
  }

  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(emp => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${emp.employeeId}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>R ${emp.salary.toLocaleString()}</td>
        <td>${emp.hoursWorked}</td>
        <td>${emp.leaveDays}</td>
        <td>R ${emp.deductions.total.toLocaleString()}</td>
        <td>R ${emp.finalSalary.toLocaleString()}</td>
        <td>
          <button class="btn btn-sm btn-success" onclick="downloadPayslip(${emp.employeeId})">Payslip</button>
          <button class="btn btn-sm btn-danger ms-2" onclick="removePayroll(${emp.employeeId})">Remove</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  function renderYearlyTable(data) {
    yearlyBody.innerHTML = "";
    data.forEach(emp => {
      const gross = emp.salary * 12;
      const deductions = emp.deductions.total * 12;
      const net = emp.finalSalary * 12;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${emp.employeeId}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>R ${gross.toLocaleString()}</td>
        <td>R ${deductions.toLocaleString()}</td>
        <td>R ${net.toLocaleString()}</td>
      `;
      yearlyBody.appendChild(row);
    });
  }

  function updateCharts(data) {
    const names = data.map(e => e.name);
    const salaries = data.map(e => e.salary);
    const deductions = data.map(e => e.deductions.total);
    const finalSalaries = data.map(e => e.finalSalary);

    if (salaryChart) salaryChart.destroy();
    if (pieChart) pieChart.destroy();

    salaryChart = new Chart(salaryChartCtx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [
          {
            label: 'Gross Salary',
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            data: salaries
          },
          {
            label: 'Deductions',
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            data: deductions
          },
          {
            label: 'Net Salary',
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            data: finalSalaries
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Payroll Breakdown per Employee' }
        }
      }
    });

    const totalGross = salaries.reduce((a, b) => a + b, 0);
    const totalDeductions = deductions.reduce((a, b) => a + b, 0);
    const totalNet = finalSalaries.reduce((a, b) => a + b, 0);

    pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Gross Salary', 'Deductions', 'Net Salary'],
        datasets: [{
          label: 'Totals',
          data: [totalGross, totalDeductions, totalNet],
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Overall Salary Distribution' }
        }
      }
    });
  }

  // Remove payroll entry by employeeId
  window.removePayroll = function(employeeId) {
    const index = payrolls.findIndex(p => p.employeeId === employeeId);
    if (index !== -1) {
      payrolls.splice(index, 1);
      // Update localStorage after removal
      localStorage.setItem("payrolls", JSON.stringify(payrolls));
      // Rerender tables and charts
      renderTable(payrolls);
      renderYearlyTable(payrolls);
      updateCharts(payrolls);
    }
  };

  window.downloadPayslip = function (employeeId) {
    const emp = payrolls.find(e => e.employeeId == employeeId);
    if (!emp) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Employee Payslip", 80, 10);
    doc.setFontSize(12);

    const lines = [
      `Employee ID: ${emp.employeeId}`,
      `Name: ${emp.name}`,
      `Department: ${emp.department}`,
      ``,
      `--- Monthly Salary Breakdown ---`,
      `Gross Salary: R ${emp.salary.toLocaleString()}`,
      `Hours Worked: ${emp.hoursWorked}`,
      `Leave Days: ${emp.leaveDays}`,
      `Tax (18%): R ${emp.deductions.tax.toLocaleString()}`,
      `UIF (1%): R ${emp.deductions.uif.toLocaleString()}`,
      `Leave Deduction: R ${emp.deductions.leavePenalty.toLocaleString()}`,
      `Total Deductions: R ${emp.deductions.total.toLocaleString()}`,
      `Net Salary: R ${emp.finalSalary.toLocaleString()}`,
      ``,
      `--- Yearly Summary ---`,
      `Gross Yearly Salary: R ${(emp.salary * 12).toLocaleString()}`,
      `Total Yearly Deductions: R ${(emp.deductions.total * 12).toLocaleString()}`,
      `Net Yearly Salary: R ${(emp.finalSalary * 12).toLocaleString()}`
    ];

    let y = 20;
    lines.forEach(line => {
      doc.text(line, 20, y);
      y += 8;
    });

    doc.save(`${emp.name.replace(/\s+/g, "_")}_Payslip.pdf`);
  };

  // Initial render on page load with stored payrolls
  renderTable(payrolls);
  renderYearlyTable(payrolls);
  updateCharts(payrolls);
});
