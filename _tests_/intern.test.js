const Intern = require ('../lib/Intern');

test('create Intern object', () => {
	const intern = new Intern('Josh',404,'josh@gmail.com','STCLAIR');
	expect(intern.name).toEqual(expect.any(String));
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.email).toEqual(expect.any(String));
	expect(intern.school).toEqual(expect.any(String));
    });
    
    test('check getSchool method', () => {
	const intern = new Intern('Josh',404,'josh@gmail.com','STCLAIR');
	expect(intern.getSchool()).toBe('STCLAIR');
    });
    
    test('check getRole method', () => {
	const intern = new Intern('Josh',404,'josh@gmail.com','STCLAIR');
	expect(intern.getRole()).toBe('Intern');
    });