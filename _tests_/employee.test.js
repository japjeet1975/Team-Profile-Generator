

const Employee = require('../lib/Employee');

test ('createds a Employee object', ()=> {

const emp = new Employee('Arsh', 101, 'arsh@gmail.com');
expect(emp.name).toEqual(expect.any(String));
expect(emp.id).toEqual(expect.any(Number));
expect(emp.email).toEqual(expect.any(String));
});

test('if role is equal to employee',()=>{
	const emp = new Employee();
	expect(emp.getRole()).toBe('Employee');
});

test('if getName returns Correct Name',()=>{
	const emp = new Employee ('Sara', 101 ,'sara@gmail.com');
	expect(emp.getName()).toBe('Sara');
});

test('if getId returns Correct Id',()=>{
	const emp = new Employee ('Sara', 101,'sara@gmail.com');
	expect(emp.getId()).toBe(101);
});

test('if getEmail returns correct Email',()=> {
const emp = new Employee('Sara', 101,'sara@gmail.com');
expect(emp.getEmail()).toBe('sara@gmail.com');
})