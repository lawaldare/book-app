const Library = require('./app.js');


test('works', () => {
  const book = new Library('item-1');
  expect(book.title).toBe('item-1');
});