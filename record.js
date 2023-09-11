// fill in javascript code here



let tbody = document.querySelector("tbody");

let empForm = document.querySelector("form");

let empName = document.querySelector("#name");
let empID = document.querySelector("#employeeID");
let department = document.querySelector("#department");
let experience = document.querySelector("#exp");
let email = document = document.querySelector("#email");
let mobile = document.querySelector("#mbl");

function expe() {
    let role = "";

if (+experience.value > 5) {
    role = "Senior";
} else if (+experience.value >= 2 && +experience.value <= 5) {
    role = "Junior";
} else if (+experience.value <= 1) {
    role = "Fresher";
}
return role;
}

// let role = expe(experience.value);

// console.log(role);

let employeeArr = [];
empForm.addEventListener("submit", function(e) {
    // console.log("OK");
    e.preventDefault()

    let empData = {
        employeeName: empName.value,
        employeeID: empID.value,
        employeeDepartment: department.value,
        employeeExp: experience.value,
        employeeEmail: email.value,
        employeeMobile: mobile.value,
        employeeRole: expe()
    }

    // console.log(empData);
    employeeArr.push(empData);
    // console.log(employeeArr);

    tbody.innerHTML = "";

    employeeArr.map((ele) => {
    
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

        td1.innerText = ele.employeeName;
        td2.innerText = ele.employeeID;
        td3.innerText = ele.employeeDepartment;
        td4.innerText = ele.employeeExp;
        td5.innerText = ele.employeeEmail;
        td6.innerText = ele.employeeMobile;
        td7.innerText = ele.employeeRole;
        td8.innerHTML = "<button>Delete</button>";

        td8.addEventListener("click", function() {
            tr.innerHTML = "";
        })
        
    
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    
        tbody.append(tr);
        
        
    
    })

    empName.value = "";
    empID.value = "";
    department.value = "";
    experience.value = "";
    email.value = "";
    mobile.value = "";
    role.value = "";

})













