

const Manager = require('./../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Jared', 202, 'jared@gmail.com', 1234567891);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.phoneNumber).toEqual(expect.any(Number));
})

test('checks if role equals to Manager', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
});

test('check getName method', () => {
    const manager = new Manager('Jared',202,'jared@gmail.com',1234567891);
    expect(manager.getName()).toBe('Jared');
});

test('check getId method', () => {
    const manager = new Manager('Jared',202,'jared@gmail.com',1234567891);
    expect(manager.getId()).toBe(202);
});

test('check getEmail method', () => {
    const manager = new Manager('Jared',202,'jared@gmail.com',1234567891);
    expect(manager.getEmail()).toBe('jared@gmail.com');
});

