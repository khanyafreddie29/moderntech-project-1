document.addEventListener("DOMContentLoaded", () => {
  const empSelect = document.getElementById("employeeSelect");
  const leaveType = document.getElementById("leaveType");
  const otherContainer = document.getElementById("otherLeaveTypeContainer");
  const otherInput = document.getElementById("otherLeaveType");
  const form = document.getElementById("leaveForm");
  const tableBody = document.querySelector("#requestsTable tbody");
  const modalEl = document.getElementById("leaveModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

  const filterButtons = document.querySelectorAll(".filter-btn");
  let currentFilter = "all"; // default: show all requests

  const employees = JSON.parse(localStorage.getItem("employeeData")) || [];
  let requests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

  // Populate Employee dropdown
  employees.forEach(emp => {
    const opt = new Option(emp.name, emp.employeeId);
    empSelect.appendChild(opt);
  });

  // Render leave requests applying current filter
  function renderFilteredRequests() {
    tableBody.innerHTML = "";
    const filteredRequests =
      currentFilter === "all"
        ? requests
        : requests.filter(r => r.status === currentFilter);

    filteredRequests.forEach((req, i) => addRow(req, i));
  }

  renderFilteredRequests(); // initial render

  // Filter buttons event
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.getAttribute("data-status");
      renderFilteredRequests();
    });
  });

  // Show/hide "other" leave type input
  leaveType.addEventListener("change", () => {
    if (leaveType.value === "other") {
      otherContainer.classList.remove("d-none");
      otherInput.required = true;
    } else {
      otherContainer.classList.add("d-none");
      otherInput.required = false;
      otherInput.value = "";
      otherInput.classList.remove("is-invalid");
    }
  });

  // Form submit handler
  form.addEventListener("submit", e => {
    e.preventDefault();

    form.classList.remove("was-validated");
    otherInput.classList.remove("is-invalid");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const empId = +empSelect.value;
    const emp = employees.find(e => e.employeeId === empId);
    if (!emp) {
      alert("Selected employee not found.");
      return;
    }

    let type = leaveType.value;
    if (type === "other") {
      type = otherInput.value.trim();
      if (!type) {
        otherInput.classList.add("is-invalid");
        otherInput.focus();
        return;
      }
    }

    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const reason = document.getElementById("reason").value.trim();

    if (new Date(start) > new Date(end)) {
      alert("Start date cannot be after end date.");
      return;
    }

    const newRequest = {
      employeeId: emp.employeeId,
      name: emp.name,
      leaveType: type,
      startDate: start,
      endDate: end,
      reason,
      status: "Pending",
    };

    requests.push(newRequest);
    localStorage.setItem("leaveRequests", JSON.stringify(requests));
    renderFilteredRequests();

    form.reset();
    otherContainer.classList.add("d-none");
    otherInput.required = false;
    modal.hide();
  });

  // Add a leave request row to the table
  function addRow(data, idx) {
    const emp = employees.find(e => e.employeeId === data.employeeId);
    const initials = data.name
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const profileImage =
      emp && emp.profileImage && emp.profileImage.trim() !== ""
        ? emp.profileImage
        : `https://via.placeholder.com/40x40.png?text=${initials}`;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <img src="${profileImage}" alt="${initials}" class="avatar-img" 
          style="width: 40px; height: 40px; border-radius: 50%;" 
          onerror="this.onerror=null;this.src='https://via.placeholder.com/40x40.png?text=${initials}'" />
      </td>
      <td>${data.name}</td>
      <td>${data.leaveType}</td>
      <td>${data.startDate}</td>
      <td>${data.endDate}</td>
      <td>${data.reason}</td>
      <td class="status-cell">${data.status}</td>
      <td>
        <button class="btn btn-sm btn-success approve">Approve</button>
        <button class="btn btn-sm btn-danger deny ms-2">Deny</button>
        <button class="btn btn-sm btn-outline-secondary remove ms-2">Remove</button>
      </td>
    `;

    // Approve button handler
    tr.querySelector(".approve").addEventListener("click", () => updateStatus(idx, tr, "Approved"));
    // Deny button handler
    tr.querySelector(".deny").addEventListener("click", () => updateStatus(idx, tr, "Denied"));
    // Remove button handler
    tr.querySelector(".remove").addEventListener("click", () => {
      requests.splice(idx, 1);
      localStorage.setItem("leaveRequests", JSON.stringify(requests));
      updateEmployeeStatus(data.employeeId);
      renderFilteredRequests();
    });

    tableBody.appendChild(tr);
  }

  // Update leave request status
  function updateStatus(i, row, newStatus) {
    requests[i].status = newStatus;
    localStorage.setItem("leaveRequests", JSON.stringify(requests));
    row.querySelector(".status-cell").textContent = newStatus;
    updateEmployeeStatus(requests[i].employeeId);
  }

  // Update employee's status based on approved leaves
  function updateEmployeeStatus(employeeId) {
    const hasApproved = requests.some(r => r.employeeId === employeeId && r.status === "Approved");

    let empData = JSON.parse(localStorage.getItem("employeeData")) || [];
    const empIndex = empData.findIndex(emp => emp.employeeId === employeeId);

    if (empIndex !== -1) {
      empData[empIndex].status = hasApproved ? "On Leave" : "Active";
      localStorage.setItem("employeeData", JSON.stringify(empData));

      // Notify other views (like employee cards) to refresh status
      document.dispatchEvent(new CustomEvent("employeeStatusUpdated"));
    }
  }
});
