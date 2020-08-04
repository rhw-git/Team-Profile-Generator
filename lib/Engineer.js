const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "", id, email, role, github) {
    super(name, id, email, role);
    this.githubName = github;
  }

  getGithub() {
    return `https://github.com/${this.githubName}-git`;
  }
}

module.exports = Engineer;
