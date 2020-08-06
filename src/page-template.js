const generateCardManager = (managerObj) => {
  return `
    <div class="card shadow" style="width: 18rem;">
      <div class="card-title bg-success px-4 py-2">
        <h5 class="text-white">${managerObj.name}</h5>
        <h6 class="text-white"><span><i class="fas fa-mug-hot" style="color:white"></i></span> Manager </h6>
      </div>
      <div class="card-body">     
          <div class="container">
            <p>ID: ${managerObj.id}</p>
            <p>Email: <a href ="mailto:" ${managerObj.email}>${managerObj.email}</a></p>
            <p>Office number: ${managerObj.officeNum}</p>
          </div>
      </div>
    </div>
  `;
};

module.exports = (templateData) => {
  // destructing templateData
  const [manager, engineerArr, internArr] = templateData;
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
        <h1 class="text-light bg-primary text-center p-3">My Team</h1>
      </div>
    </header>
    <main class ="container">
      ${generateCardManager(manager)}
    </main>
  </body>
  </html>
  `;
};
