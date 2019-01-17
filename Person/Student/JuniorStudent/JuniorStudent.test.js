const Student = require('./JuniorStudent');
const requestArray = require('../../../Store/requestArray');
const returnArray = require('../../../Store/returnArray');



const juniorStudent = new Student('Moses', 10045, 3);

test('creating an instance of the Student constructor', () => {
  expect(juniorStudent.name).toBe('Moses');
  expect(juniorStudent.idN).toBe(10045);
  expect(juniorStudent.priority).toBe(3);
});

test('person making a request', () => {
  juniorStudent.request('item-2', 'Johnson');
  requestArray.find(function(user){
  expect(user['title']).toBe('item-2');
  expect(user['author']).toBe('Johnson');
  })
});

test('person making a return', () => {
  juniorStudent.request('item-2', 'Johnson');
  returnArray.find(function(user){
  expect(user['title']).toBe('item-2');
  expect(user['author']).toBe('Johnson');
  })
});

