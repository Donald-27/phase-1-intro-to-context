// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return employee;
}

function createTimeOutEvent(employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return employee;
}

function hoursWorkedOnDate(employee, date) {
    let inEvent = employee.timeInEvents.find(e => e.date === date);
    let outEvent = employee.timeOutEvents.find(e => e.date === date);
    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
}

function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, e) => total + wagesEarnedOnDate(employee, e.date), 0);
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
}
