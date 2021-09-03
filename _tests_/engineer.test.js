const Engineer = require('./../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Michella', 303, 'michella@gmail.com', 'michella303');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('check getGithub method', () => {
    const engineer = new Engineer('Michella', 303, 'michella@gmail.com', 'michella303');
    expect(engineer.getGithub()).toBe('michella303');
})

test('check getRole method', () => {
    const engineer = new Engineer('Michella', 303, 'michella@gmail.com', 'michella303');
    expect(engineer.getRole()).toBe('Engineer');
})