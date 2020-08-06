const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateCardManager = (managerObj) => {
  return `
    <section class="card shadow mb-3" style="width: 22rem;">
      <div class="card-title bg-success px-4 py-2">
        <h5 class="text-white">${managerObj.getName()}</h5>
        <h6 class="text-white"><span><i class="fas fa-mug-hot" style="color:white"></i></span> Manager </h6>
      </div>
      <div class="card-body">     
          <div class="container">
            <p>ID: ${managerObj.getId()}</p>
            <p>Email: <a href ="mailto:" ${managerObj.getEmail()}>${managerObj.getEmail()}</a></p>
            <p>Office number: ${managerObj.getOfficeNum()}</p>
          </div>
      </div>
    </section>
  `;
};

const generateCardEngineer = (engineerArr) => {
  if (!engineerArr) {
    return "";
  }
  return `
      ${engineerArr
        .map(({ name, id, email, githubName }) => {
          return `
            <section class="card shadow mb-3" style="width: 22rem;">
              <div class="card-title bg-success px-4 py-2">
                <h5 class="text-white">${name}</h5>
                <h6 class="text-white"><span><i class="fas fa-glasses" style="color:white"></i></span> Engineer </h6>
              </div>
              <div class="card-body">     
              <div class="container">
                  <p>ID: ${id}</p>
                  <p>Email: <a href ="mailto:" ${email}>${email}</a></p>
                  <p>GitHub: <a href = "https://github.com/${githubName}-git">"https://github.com/${githubName}-git"</a></p>
                </div>
              </div>
            </section>
          `;
        })
        .join("")}
  `;
};

const generateCardIntern = (internArr) => {
  if (!internArr) {
    return "";
  }
  return `
        ${internArr
          .map(({ name, id, email, school }) => {
            return `
              <section class="card shadow mb-3" style="width: 22rem;">
                <div class="card-title bg-success px-4 py-2">
                  <h5 class="text-white">${name}</h5>
                  <h6 class="text-white"><span><i class="fas fa-glasses" style="color:white"></i></span> Intern </h6>
                </div>
                <div class="card-body">     
                <div class="container">
                    <p>ID: ${id}</p>
                    <p>Email: <a href ="mailto:" ${email}>${email}</a></p>
                    <p>School: ${school}</p>
                  </div>
                </div>
              </section>
            `;
          })
          .join("")}
    `;
};

module.exports = (templateData) => {
  // destructing templateData
  let [manager, engineerArr, internArr] = templateData;
  //-------------------- generate head of html --------------------//
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <header>
      <div class ="container-fluid ">
        <h1 class="text-light bg-primary text-center p-3 mb-5">My Team</h1>
      </div>
    </header>
    <main class ="container">
      <div class="row justify-content-around">
        ${generateCardManager(manager)}
        ${generateCardEngineer(engineerArr)}
        ${generateCardIntern(internArr)}  
      </div>
    </main>
  </body>
  </html>
  `;
};
