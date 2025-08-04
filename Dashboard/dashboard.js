document.addEventListener("DOMContentLoaded", () => {
  // Dummy data for attendance & leave (shortened here for brevity)
  const dummyData = {
    attendanceAndLeave: [
      {
            "employeeId": 1,
            "name": "Sibongile Nkosi",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-22",
                    "reason": "Sick Leave",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-01",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 2,
            "name": "Lungile Moyo",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-15",
                    "reason": "Family Responsibility",
                    "status": "Denied"
                },
                {
                    "date": "2024-12-02",
                    "reason": "Vacation",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-10",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-05",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-20",
                    "reason": "Bereavement",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-01",
                    "reason": "Childcare",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-18",
                    "reason": "Sick Leave",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-22",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-02",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Present"
                },
                {
                    "date": "2025-07-28",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2025-07-19",
                    "reason": "Childcare",
                    "status": "Denied"
                }
            ]
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "attendance": [
                {
                    "date": "2025-07-25",
                    "status": "Present"
                },
                {
                    "date": "2025-07-26",
                    "status": "Present"
                },
                {
                    "date": "2025-07-27",
                    "status": "Absent"
                },
                {
                    "date": "2025-07-28",
                    "status": "Present"
                },
                {
                    "date": "2025-07-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-03",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        }
    ]
  };

  // Performance Reviews data for motivation
  const performanceReviews = [
    {
      name: "Sibongile Nkosi",
      rating: "Excellent",
      comments: "Outstanding problem-solving and leadership in development projects.",
      date: "2025-06-01",
      status: "Reviewed",
      category: "Leadership"
    },
    {
      name: "Lungile Moyo",
      rating: "Good",
      comments: "Strong management of HR duties and team coordination.",
      date: "2025-06-03",
      status: "Reviewed",
      category: "Management"
    },
    {
      name: "Thabo Molefe",
      rating: "Average",
      comments: "Performs well but needs to enhance testing turnaround time.",
      date: "2025-06-05",
      status: "Pending",
      category: "Productivity"
    },
    {
      name: "Keshav Naidoo",
      rating: "Excellent",
      comments: "Consistently exceeds sales targets with great client relationships.",
      date: "2025-06-07",
      status: "Reviewed",
      category: "Sales"
    },
    {
      name: "Zanele Khumalo",
      rating: "Good",
      comments: "Creative marketing strategies but on leave recently.",
      date: "2025-06-10",
      status: "Pending",
      category: "Marketing"
    },
    {
      name: "Sipho Zulu",
      rating: "Excellent",
      comments: "Strong UX design focus and collaboration.",
      date: "2025-06-12",
      status: "Reviewed",
      category: "Design"
    },
    {
      name: "Naledi Moeketsi",
      rating: "Good",
      comments: "Handles IT deployments efficiently, needs more documentation.",
      date: "2025-06-14",
      status: "Pending",
      category: "IT"
    },
    {
      name: "Heather Johnson",
      rating: "Average",
      comments: "Good content ideas, needs improvement in delivery timelines.",
      date: "2025-06-16",
      status: "Action Required",
      category: "Content Strategy"
    },
    {
      name: "Chad Thompson",
      rating: "Good",
      comments: "Reliable and accurate in monthly reports.",
      date: "2025-06-18",
      status: "Reviewed",
      category: "Finance"
    },
    {
      name: "Madison Clark",
      rating: "Average",
      comments: "Strong communicator, currently on leave during review.",
      date: "2025-06-20",
      status: "Pending",
      category: "Support"
    }
  ];

  // Total Employees
  const totalEmployees = dummyData.attendanceAndLeave.length;
  document.getElementById("totalEmployees").textContent = totalEmployees;

  let totalPresent = 0;
  let totalRecords = 0;
  let pendingLeaveCount = 0;
  let attendanceByName = {};
  let allDates = [];

  dummyData.attendanceAndLeave.forEach(emp => {
    emp.attendance.forEach(a => {
      allDates.push(a.date);
    });
  });

  const latestDay = allDates.sort().pop();

  for (const emp of dummyData.attendanceAndLeave) {
    for (const rec of emp.attendance) {
      if (!attendanceByName[emp.name]) attendanceByName[emp.name] = 0;
      if (rec.status === "Present") {
        attendanceByName[emp.name]++;
        totalPresent++;
      }
      totalRecords++;
    }
    for (const leave of emp.leaveRequests) {
      if (leave.status === "Pending") pendingLeaveCount++;
    }
  }

  // Attendance rate text
  const attendanceRate = ((totalPresent / totalRecords) * 100).toFixed(1) + "%";
  document.getElementById("attendanceRate").textContent = attendanceRate;
  document.getElementById("pendingLeave").textContent = pendingLeaveCount;
  document.getElementById("payroll").textContent = "R" + (totalEmployees * 45000).toLocaleString();

  // Prepare attendance chart data
  const chartData = {};
  dummyData.attendanceAndLeave.forEach(emp => {
    emp.attendance.forEach(a => {
      if (!chartData[a.date]) chartData[a.date] = 0;
      if (a.status === "Present") chartData[a.date]++;
    });
  });

  const ctx = document.getElementById("attendanceChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: Object.keys(chartData),
      datasets: [{
        label: "Employees Present",
        data: Object.values(chartData),
        borderColor: "#0d6efd",
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  // Pie chart - Leave status distribution
  const leaveStatusCounts = { Approved: 0, Pending: 0, Denied: 0 };
  dummyData.attendanceAndLeave.forEach(emp => {
    emp.leaveRequests.forEach(req => {
      if (leaveStatusCounts[req.status] !== undefined) {
        leaveStatusCounts[req.status]++;
      }
    });
  });

  const pieCtx = document.getElementById("leaveStatusPie").getContext("2d");
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: Object.keys(leaveStatusCounts),
      datasets: [{
        label: 'Leave Requests',
        data: Object.values(leaveStatusCounts),
        backgroundColor: ["#198754", "#ffc107", "#dc3545"]
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  // Show summary insights (performance reviews) in #summaryInsights container
  const summaryContainer = document.getElementById("summaryInsights");
  summaryContainer.innerHTML = performanceReviews.map(review => `
    <div class="card mb-3 p-3 shadow-sm">
      <h5>${review.name} — <small>${review.rating}</small></h5>
      <p><em>${review.category} — ${review.status}</em></p>
      <p>"${review.comments}"</p>
      <small class="text-muted">Reviewed on: ${review.date}</small>
    </div>
  `).join("");
});
