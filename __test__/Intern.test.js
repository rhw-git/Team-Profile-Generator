const Intern = require("../lib/Intern");
test("whether the role is override to intern", () => {
  const intern = new Intern("Dave", 123, "Dave@gmail.com", "Intern", "UCB");
  expect(intern.role).toBe("Intern");
  // console all intern info
  console.table(intern);
});
test("log school", () => {
  const intern = new Intern("Dave", 123, "Dave@gmail.com", "Intern", "UCB");
  expect(intern.school).toBe("UCB");
});
test("get getSchool", () => {
  const intern = new Intern("Dave", 123, "Dave@gmail.com", "Intern", "UCB");
  expect(intern.getSchool()).toBe("UCB");
});
test("the getRole function respond to role override to intern", () => {
  const intern = new Intern("Dave", 123, "Dave@gmail.com", "Intern", "UCB");
  expect(intern.getRole()).toBe("Intern");
});
