
const Person = require('./Person');
const requestArray = require('../Store/requestArray');
const returnArray = require('../Store/returnArray');
const Librarian = require('../Library/Library');

const person = new Person('Tobi', 12345, 3);
person.request('item-2', 'Johnson');
const admin = new Librarian('Adamu');
admin.grantRequest();


test('creating an instance of the Person constructor', () => {
  expect(person.name).toBe('Tobi');
  expect(person.idN).toBe(12345);
  expect(person.priority).toBe(3);
});

test('person making a request', () => {
  person.request('item-1', 'Akeem');
  requestArray.find(function(user){
  expect(user['title']).toBe('item-1');
  expect(user['author']).toBe('Akeem');
  })
});

test('person making a return', () => {
  admin.grantRequest();
  expect(person.return('item-2', 'Johnson', 12345)).toBeTruthy();
});