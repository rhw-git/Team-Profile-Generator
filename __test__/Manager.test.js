const Manager = require("../lib/Manager");
test("office number and role", () => {
  const manager = new Manager("Dave", 123, "Dave@gmail.com", "Manager", 456);
  expect(manager.officeNum).toBe(456);
  expect(manager.role).toBe("Manager");
  // console all manager info
  console.table(manager);
});
