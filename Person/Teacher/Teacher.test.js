const Teacher = require('../Teacher/Teacher');
const requestArray = require('../../Store/requestArray');


const teacher = new Teacher('Moses', 10045, 1);

test('creating an instance of the Teacher constructor', () => {
  expect(teacher.name).toBe('Moses');
  expect(teacher.idN).toBe(10045);
  expect(teacher.priority).toBe(1);
});