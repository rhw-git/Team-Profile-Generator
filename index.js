const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { writeFile, copyFile } = require("./utils/generate-site");
const generatePage = require("./src/page-template");

let engineerArr = [];
let internArr = [];
promptManager = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the name of your team MANAGER.",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter an valiate name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the ID of your team MANAGER.",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter an valiate ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the email of your team MANAGER.",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter an valiate email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "Please enter the office number.",
        validate: (officeNumInput) => {
          if (officeNumInput) {
            return true;
          } else {
            console.log("Please enter an valiate email");
            return false;
          }
        },
      },
    ])
    .then(({ managerName, managerId, managerEmail, officeNum }) => {
      this.manager = new Manager();
      manager.name = managerName;
      manager.id = managerId;
      manager.email = managerEmail;
      manager.officeNum = officeNum;
      manager.role = "manager";
      return manager;
    });
};
promptAddMember = function () {
  return inquirer
    .prompt({
      type: "list",
      name: "addMember",
      message: "Would you like to add an EngineerOrIntern?",
      choices: ["add Engineer", "add Intern", "No. finish building my team"],
    })
    .then(({ addMember }) => {
      if (addMember === "add Engineer") {
        promptEngineer();
      } else if (addMember === "add Intern") {
        promptIntern();
      } else {
        let employeeProfoiles = [manager, engineerArr, internArr];
        let pageHTML = generatePage(employeeProfoiles);
        writeFile(pageHTML)
          .then((writeFileResponse) => {
            console.log(writeFileResponse);
            return copyFile();
          })
          .then((copyFileResponse) => {
            console.log(copyFileResponse);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};
promptEngineer = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the name of the ENGINEER.",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter an valiate name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the ID of The ENGINEER.",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter an valiate ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the email of The ENGINEER.",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter an valiate email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the GitHub name of The ENGINEER.",
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter an valiate GitHub name");
            return false;
          }
        },
      },
    ])
    .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
      this.engineer = new Engineer();
      engineer.name = engineerName;
      engineer.id = engineerId;
      engineer.email = engineerEmail;
      engineer.githubName = engineerGithub;
      engineer.role = "engineer";
      return engineer;
    })
    .then((engineer) => {
      engineerArr.push(engineer);
      return engineerArr;
    })
    .then(promptAddMember);
};
promptIntern = function () {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the name of the INTERN.",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter an valiate name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the ID of The INTERN.",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter an valiate ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter the email of The INTERN.",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter an valiate email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter the school of The INTERN.",
        validate: (internSchoolInput) => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("Please enter an valiate email");
            return false;
          }
        },
      },
    ])
    .then(({ internName, internId, internEmail, internSchool }) => {
      this.intern = new Intern();
      intern.name = internName;
      intern.id = internId;
      intern.email = internEmail;
      intern.school = internSchool;
      intern.role = "intern";
      return intern;
    })
    .then((intern) => {
      internArr.push(intern);
      return internArr;
    })
    .then(promptAddMember);
};

promptManager().then(promptAddMember);
