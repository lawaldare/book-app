const borrowedBook = require('../Store/borrowedBook');
const requestArray = require('../Store/requestArray');
const library = require('../Store/Store');
const juniorStudent = require('../Person/Student/JuniorStudent/JuniorStudent');
const returnArray = require('../Store/returnArray');

//Libarian Constructor
function Libarian(name){
  this.name = name;
}


//grantRequest method
Libarian.prototype.grantRequest = function(){
 //let requestArray = requestArray.sort(function(a, b){ return a['priority'] - b['priority']});
  for(let book of library){
    if((requestArray[0].title === book.title) && (book.quantity >= 1) && (requestArray[0].author === book.author)){
      book.userID = requestArray[0].idN;
      borrowedBook.push(book);
      requestArray.splice(0, 1);
      book.quantity = book.quantity - 1;
      return borrowedBook;
    } else if ((requestArray[0].title === book.title) && (book.quantity < 1)){
      requestArray.splice(0, 1);
      return `${book.title} not available`;
    }
  }
}


//acceptBook method
Libarian.prototype.acceptBook = function(){
  for(let book of returnArray){
    for(let bookie of library){
      if((book.title === bookie.title) && (book.author === book.author)){
        book.quantity = book.quantity + 1;
        returnArray.splice(0, 1);
        return book.quantity;
      } 
    }  
  }
} 





module.exports = Libarian