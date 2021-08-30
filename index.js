const fs = require('fs');
const inquirer = require('inquirer');
const internal = require('stream');

//Links to employee templates
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



//array for employee data

const teamMembers = [];
// let manager;
// let teamTitle;

// Create an array of questions for user input for manager
const managerInfo = () => {
return 	inquirer.prompt([

//questions here
{
	type: 'input',
	name: 'name',
	message: 'Please enter the name of the Manager?',
      },
      {
	  type: 'input',
	  name: 'id',
	  message: 'What is your ID ? (Required)',
      },
      {
	  type: 'input',
	  name: 'email',
	  message: 'What is your email id? (Required)',
	  validate: value => {
	      if(value) {
		  return true;
	      }
	      else {
		  console.log('Please enter your email id.');
		  return false;
	      }
	  }
      },
      {
	  type: 'input',
	  name: 'phoneNumber',
	  message: 'What is your office phone Number ? (Required)',

      }

 ])
 .then(managerInfo => {
const {name,id,email,phoneNumber} = managerInfo ;
const manager = new Manager (name,id,email,phoneNumber);
teamMembers.push(manager);

 })

};

//creating an array for engineer and intern  data

const employeeInfo = () => {
return inquirer.prompt([
{
	type : 'list',
	name :'role',
	message :'What is the role of the employee ?',
	choices: ['Engineer','Intern']
},
{
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee'
        },
        {
        type: 'input',
        name: 'id',
        message: 'Please enter the id'
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email id?',
        validate: emailInput => {
            if(emailValidator.validate(emailInput)) {
                return true;
            }
            else {
                console.log("please enter a valid email");
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
        when: (input) => input.role === 'Engineer',
        },
        {
        type: 'input',
        name: 'school',
        message: 'Which school did you graduate from?',
        when: (input) => input.role === 'Intern'    
        },
        {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you want to add more employees?',
        default: false
        }
])
.then (employeeInfo => {
	if(employeeInfo.role === 'Engineer'){
		const {name, id, email, github} = employeeInfo;
		engineer = new Engineer(name, id, email, github);
		teamMembers.push(engineer);
	}
	else{
		const {name, id, email, school} = employeeData;
		intern = new Intern(name, id, email, school);
		teamMembers.push(intern);
	}

	if(employeeInfo.confirmAddEmployee){
		return employeeInfo();
	}
	return teamMembers;
})
}

//create html output based on information entered
managerInfo()
.then(employeeInfo)
.then(teamMembers => {
	console.log('employee Array',teamMembers);
	return generateHtml(teamMembers);
})
.then(pageHtml => {
	return fs.writeFile(pageHtml);
})
.catch(err => {
	console.log(err);
})
