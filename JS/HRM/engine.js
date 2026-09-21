let employeeList = [
 
];

// Input elements
const empName = document.getElementById("emp-name");
const empPhone = document.getElementById("emp-phone");
const empRole = document.getElementById("emp-role");
const empAdd = document.getElementById("emp-add");

  

const empTable = document.getElementById("emp-table");
let editEmpId = null

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

const addEmployee = () => {
  /*
    - Get Input value
    - Create object
    - Push the obj in employeeList
    - Rerender the employee table
*/

    const name = empName.value;
    const role = empRole.value;
    const phone = empPhone.value;
    const newEmp = {
      id: Date.now(),
      name: name,
      role: role,
      phone: phone,
    }; 
    employeeList.push(newEmp);

    render(employeeList);

};

const deleteEmployee = (id) => {
    employeeList = employeeList.filter((item) => item.id != id);
    render(employeeList);
};
const initEditEmployee = (id) => {
    editEmpId = id;
    const emp = employeeList.find((item) => item.id === id)
    empName.value = emp.name;
    empRole.value = emp.role;
    empPhone.value = emp.phone || "";
    empAdd.innerHTML = "Update";
};

const editEmployee = (id) => {
    deleteEmployee(id)
    addEmployee()
};


const createEmployeeRow = (emp) => {
    return `
    <tr class="border">
        <td class="border p-2">
            ${emp.name}
        </td>
        <td class="border p-2" style="text-transform: capitalize;">
               ${emp.role}
        </td>
        <td class="border p-2">
             ${emp.phone || "-"}
        </td>
        <td class="border p-2">
            <button data-id="${emp.id}" class="p-1 bg-red-500 rounded-sm  text-white cursor-pointer">Delete</button>
            <button data-id="${emp.id}" class="p-1 bg-yellow-500 rounded-sm text-white cursor-pointer">Edit</button>
        </td>
    </tr>`;
};
const storeDT = (dt) => {
  localStorage.setItem("emp_list", JSON.stringify(employeeList));
};
const render = (employeeList) => {
    let tableRows = `<tr class="border ">
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

    for (let i = 0; i < employeeList.length; i++) {
      tableRows += createEmployeeRow(employeeList[i]);
    }
    empTable.innerHTML = tableRows

    storeDT(employeeList);
};
employeeList = JSON.parse(localStorage.getItem("emp_list"));


render(employeeList);

empAdd.addEventListener("click", (e) => { 
    if (e.target.innerText === 'Add') {
        addEmployee()
        return;
    }
    editEmployee(editEmpId);
});


empTable.addEventListener('click', (event) => { 
    if (!event.target)    return;

    const action = event.target.innerText;
 
    if (action === 'Delete') {
      const id = parseInt(event.target.dataset.id);
         deleteEmployee(id);
      // return;
    }


    if (action === "Edit") {
      const id = parseInt(event.target.dataset.id);
      initEditEmployee(id);
      // return;
    }

})

