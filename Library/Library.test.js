const Libarian = require('./Library');
const library = require('../Store/Store');
const Student = require('../Person/Student/JuniorStudent/JuniorStudent');
const Store = require('../Store/Store');
const returnArray = require('../Store/returnArray');
const borrowedBook = require('../Store/borrowedBook');

const admin = new Libarian('Adamu');

test('creating an instance of the Librarian constructor', () => {
  expect(admin.name).toBe('Adamu');
});

 let std1 = new Student('Ade', 12365, 3);
 let std2 = new Student('Kazeem', 12565, 2);

 std1.request('item-1', 'Akeem');
 std2.request('item-2', 'Johnson');

test('admin granting a book that is not available', () => {
  expect(admin.grantRequest()).toBe('item-1 not available');
});

test('admin granting a book that is available', () => {
  expect(admin.grantRequest()).toEqual([{ 'title': 'item-2',
    'author': 'Johnson',
    'ISBN': 12345,
    'quantity': 0,
    'userID': 12565 }]);
});



test('admin accepting a book', () => {
  std2.return('item-2', 'Johnson', 12565);
  admin.acceptBook();
  let a = library.find(function(book){
    return book['title'] === 'item-2'; 
  })
    expect(a.quantity).toBe(1);
});