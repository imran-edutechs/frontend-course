let employeeList = [
  {
    id: 1,
    name: "Imran Hossen",
    role: "engineer",
  },
  {
    id: 2,
    name: "Munna",
    role: "designer",
  },
  {
    id: 3,
    name: "Foyez",
    role: "tester",
  },
  {
    id: 4,
    name: "Humu",
    role: "tester",
  },
];
const empTable = document.getElementById("emp-table");
const empName = document.getElementById("emp-name");
const empPhone = document.getElementById("emp-phone");
const empRole = document.getElementById("emp-role");
const empAdd = document.getElementById("emp-add");

const headerRow = `
        <tr class="border ">
            <th class="border p-2">
                Employee Name
            </th>
            <th class="border p-2">
                Role
            </th>
            <th class="border p-2">
                Phone
            </th>
            <th class="border p-2">
                Actions
            </th>
        </tr>
`;

const addEmployeeList = (employee) => {
  const name = empName.value;
  const phone = empPhone.value;
  const role = empRole.value;
  console.log();

  employeeList.push({
    id: Date.now(),
    name,
    phone,
    role,
  });
  render(employeeList);
};
const deleteEmployee = (id) => {
    employeeList = [...employeeList.filter((emp) => emp.id != id)];
   render(employeeList);
};
const editEmployee = (employee) => {
  deleteEmployee(employee.id);
  addEmployeeList(employee);
};

const createEmployeeRow = (emp) => {
  return ` <tr class="border">
            <td class="border p-2">
                 ${emp.name}
            </td >
            <td class="border p-2">
                 ${emp.role}
            </td>
            <td class="border p-2">
                 ${emp.phone || "017200000"}
            </td>
            <td class="border p-2">
                <button
                 data-action="delete"
                 data-id="${emp.id}"
                class="p-1 bg-red-500 rounded-sm  text-white cursor-pointer">Delete</button>
                <button class="p-1 bg-yellow-500 rounded-sm text-white cursor-pointer">Edit</button>
            </td>
        </tr>
    `;
};

const render = (employeeList) => {
  let rows = headerRow;
  for (let i = 0; i < employeeList.length; i++) {
    rows += createEmployeeRow(employeeList[i]);
  }
  empTable.innerHTML = rows;
};

empAdd.addEventListener("click", addEmployeeList);

empTable.addEventListener("click", (event) => {
    
  const button = event.target.closest("button");
    console.log(button);

  if (!button) return;

  const action = button.dataset.action;
  const id = Number(button.dataset.id);

  if (action === "delete") {
    deleteEmployee(id);
  }
});


render(employeeList);
