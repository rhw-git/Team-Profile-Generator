const Engineer = require("../lib/Engineer");
test("whether the role is override to engineer", () => {
  const engineer = new Engineer(
    "Dave",
    123,
    "Dave@gmail.com",
    "Engineer",
    "dave"
  );
  expect(engineer.role).toBe("Engineer");
  // console all manager info
  console.table(engineer);
});
test("log githubName", () => {
  const engineer = new Engineer(
    "Dave",
    123,
    "Dave@gmail.com",
    "Engineer",
    "dave"
  );
  expect(engineer.githubName).toBe("dave");
});
test("get githubName", () => {
  const engineer = new Engineer(
    "Dave",
    123,
    "Dave@gmail.com",
    "Engineer",
    "dave"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.githubName.toString())
  );
  console.log(engineer.getGithub());
});
test("this getRole function repond to role override to engineer", () => {
  const engineer = new Engineer(
    "Dave",
    123,
    "Dave@gmail.com",
    "Engineer",
    "dave"
  );
  expect(engineer.getRole()).toBe("Engineer");
});
