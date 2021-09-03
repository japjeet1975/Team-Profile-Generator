//Creating Intern Class

const Employee = require('./Employee');

class Intern extends Employee{
constructor(name,id,email,school){
	super(name,id,email);
	this.school = school;
}
getRole(){
	return 'Intern';
};
getSchool(){
	return this.school;
}
	

}

//exporting the Intern class
module.exports = Intern;