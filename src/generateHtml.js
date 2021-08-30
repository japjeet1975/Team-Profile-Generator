//creating box to display manager Information


const generateManager = function(manager){
return`
<div class="col">
<div class="card border-dark m-3 mx-auto bg-info" style="width: 18rem;">
    <div class="card-body bg-primary mt-3 text-light">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-text">Manager</h6>
    </div>
    <ul class="list-group list-group-flush mb-3">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office No: ${manager.officeNumber}</li>
    </ul>
  </div>
</div> 

`
}


//creating box to display engineer Information


const generateEngineer = function(engineer){
	return`
	<div class="col">
	<div class="card border-dark m-3 mx-auto bg-info" style="width: 18rem;">
	    <div class="card-body bg-primary mt-3 text-light">
	      <h5 class="card-title">${engineer.name}</h5>
	      <h6 class="card-text">Manager</h6>
	    </div>
	    <ul class="list-group list-group-flush mb-3">
	      <li class="list-group-item">ID: ${engineer.id}</li>
	      <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
	      <li class="list-group-item">GitHub User : <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
	    </ul>
	  </div>
	</div> 
	
	`
}
//creating box to display intern Information


const generateIntern = function(Intern){
	return`
	<div class="col">
	<div class="card border-dark m-3 mx-auto bg-info" style="width: 18rem;">
	    <div class="card-body bg-primary mt-3 text-light">
	      <h5 class="card-title">${Intern.name}</h5>
	      <h6 class="card-text">Manager</h6>
	    </div>
	    <ul class="list-group list-group-flush mb-3">
	      <li class="list-group-item">ID: ${intern.id}</li>
	      <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
	      <li class="list-group-item">School : ${intern.school}" </li>
	    </ul>
	  </div>
	</div> 
	
	`
	}

//generate html page

const generateTeamPage = function(infobox){
	return `
	
	<!DOCTYPE html>
    <html lang="en">
    <head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
	<link rel="stylesheet" href="./style.css">
	<title>My Team</title>
    </head>
    <body>
	<section>
	    <div class="container">
		<div class="row bg-danger text-light m-5 p-3">
		    <h1 class="text-center">My Team</h1>
		</div>
	    </div>
	    <div class="container">
		<div class="row">
		${infobox}
		</div>
	    </div>
	</section>
    </body>
    </html>
	
	`;
    }

// generating infobox based on the role of the employee
generateHtml = (data) => {
	displayTeam = [];
    
	for (let i=0; i < data.length; i++){
	    const employee = data[i];
	    const role = employee.getRole();
	    if (role === 'Manager') {
		const displayManager = generateManager(employee);
		displayTeam.push(displayManager);
	    }
	    if (role === 'Engineer') {
		const displayEngineer = generateEngineer(employee);
		displayTeam.push(displayEngineer);
	    }
	    if (role === 'Intern') {
		const displayIntern = generateIntern(employee);
		displayTeam.push(displayIntern);
	    }
	}
	const infobox = displayTeam.join('');
    
	const generateTeam = generateTeamPage(infobox);
	return generateTeam;
    }
    
    module.exports = generateHtml;