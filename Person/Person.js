const requestArray = require('../Store/requestArray');
const returnArray = require('../Store/returnArray');
const borrowedBook = require('../Store/borrowedBook');


//Person Constructor
function Person(name, idN, priority){
  this.name = name;
  this.idN = idN;
  this.priority = priority;
}

//request method
Person.prototype.request = function(book, author){
  this.author = author;
  this.title = book;
  requestArray.push(this);
  return requestArray;
}

//return method
Person.prototype.return = function(title, author, userID){
  for(let book of borrowedBook){
    if((book.title === title) && (book.author === author) && (book.userID === userID)){
      returnArray.push(book);
      borrowedBook.splice((borrowedBook.indexOf(book)), 1);
      return returnArray;
     } 
  }
}




module.exports = Person