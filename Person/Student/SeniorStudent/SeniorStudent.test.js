const Student = require('./SeniorStudent');
const requestArray = require('../../../Store/requestArray');
const returnArray = require('../../../Store/returnArray');


const seniorStudent = new Student('Salah', 10765, 2);

test('creating an instance of the Student constructor', () => {
  expect(seniorStudent.name).toBe('Salah');
  expect(seniorStudent.idN).toBe(10765);
  expect(seniorStudent.priority).toBe(2);
});

test('person making a request', () => {
  seniorStudent.request('item-2', 'Johnson');
  requestArray.find(function(user){
  expect(user['title']).toBe('item-2');
  expect(user['author']).toBe('Johnson');
  })
});

test('person making a return', () => {
  seniorStudent.request('item-2', 'Johnson');
  returnArray.find(function(user){
  expect(user['title']).toBe('item-2');
  expect(user['author']).toBe('Johnson');
  })
});