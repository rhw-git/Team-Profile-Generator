const Employee = require("../lib/Employee.js");
//--------------- all the employee basic info ----------------//
test("log employee info", () => {
  // call for constructor Employee
  const employee = new Employee("Dave", 123, "Dave@gmail.com", "Employee");
  // test whether the value log into the constructor successfully
  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe(123);
  expect(employee.email).toBe("Dave@gmail.com");
  // console all the employee info
  console.table(employee);
});
//--------------- test getName ----------------//
test("get the name of the employee", () => {
  // call for constructor Employee
  const employee = new Employee("Dave");
  expect(employee.getName()).toBe("Dave");
});
//--------------- test getID ----------------//
test("get the id of the employee", () => {
  // call for constructor Employee
  const employee = new Employee("", 123, "");
  expect(employee.getId()).toBe(123);
});
//--------------- test getmail ----------------//
test("get the id of the employee", () => {
  // call for constructor Employee
  const employee = new Employee("", 123, "Dave@gmail.com");
  expect(employee.getEmail()).toBe("Dave@gmail.com");
});
//--------------- test getRole ----------------//
test("get the id of the employee", () => {
  // call for constructor Employee
  const employee = new Employee("", 123, "", "Employee");
  expect(employee.getRole()).toBe("Employee");
});
