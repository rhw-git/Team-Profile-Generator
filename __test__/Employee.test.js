const Employee = require("../lib/Employee.js");

test("log employee info", () => {
  // call for constructor Employee
  const employee = new Employee("Dave", 123, "Dave@gmail.com");
  // test whether the value log into the constructor successfully
  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe(123);
  expect(employee.email).toBe("Dave@gmail.com");
  // console all the employee info
  console.table(employee);
});
