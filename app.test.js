const Library = require('./app.js');
const Person = require('./app.js');
const Teacher = require('./app.js');
const Student = require('./app.js');


//Testing the Library Contsructor
test('works', () => {
  const book = new Library('item-1');
  expect(book.title).toBe('item-1');
});


//Testing the Person Constructor
test('works', () => {
  const person = new Person('Jack Mo', 28);
  expect(person.name).toBe('Jack Mo');
  expect(person.age).toBe(28);
});

//Testing the Teacher Constructor
test('works', () => {
  const person = new Teacher('David Kingsley', 48);
  expect(person.name).toBe('David Kingsley');
  expect(person.age).toBe(48);
});

//Testing the Student Constructor
test('works', () => {
  const person = new Student('Kazeem', 18, 'junior');
  expect(person.name).toBe('Kazeem');
  expect(person.age).toBe(18);
  expect(person.status).toBe('junior');
});