let name = "Sreenath";

console.log("Hello " + name);

let employeeName = "Sreenath";
let experience = 20;
let isArchitect = true;

console.log(employeeName);
console.log(experience);
console.log(isArchitect);
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

const add1 = (a1, b1) => {
    return a1 + b1;
};

console.log(add1(100, 200));

let tools = [
    "Playwright",
    "UiPath",
    "Postman"
];

console.log(tools);

console.log(tools[0]);

tools.push("JMeter");

console.log(tools);

let employee = {
    id: 1001,
    name: "Sreenath",
    role: "QA Architect"
};
let jsonString = JSON.stringify(employee);
console.log(jsonString);
let obj = JSON.parse(jsonString);
console.log(obj.name);

console.log(employee.name);

console.log(employee.role);
let employee1 = {
    id: 1,
    name1: "Sreenath",
    role1: "QA Architect"
};

const { name1, role1 } = employee1;

console.log(name1);
console.log(role1);

let automationTools = [
    "Playwright",
    "UiPath"
];

let allTools = [
    ...automationTools,
    "JMeter",
    "Postman"
];

console.log(allTools);

function sum(...numbers) {

    let total = 0;

    numbers.forEach(num => {
        total += num;
    });

    return total;
}

console.log(sum(10,20,30,40));

let promise = new Promise((resolve, reject) => {

    let success = true;

    if(success) {
        resolve("Test Passed");
    }
    else {
        reject("Test Failed");
    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));
function getTestResult() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Execution Completed");
        }, 3000);

    });

}

async function execute() {

    let result = await getTestResult();

    console.log(result);
}

execute();

const employees = [
    {
        id: 1,
        name: "Sreenath",
        role: "QA Architect"
    },
    {
        id: 2,
        name: "John",
        role: "Developer"
    }
];

async function getEmployees() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(employees);

        }, 2000);

    });

}

async function displayEmployees() {

    const data = await getEmployees();

    data.forEach(emp => {

        console.log(
            `${emp.name} - ${emp.role}`
        );

    });

}

displayEmployees();