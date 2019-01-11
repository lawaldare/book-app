let library = ['item-1', 'item-2', 'item-3', 'item-4'];

let statusBankArray = [];
let books;

//Person contructor
function Person(name, status){
  this.name = name;
  this.status = status;
  this.hasRequested = false;
}

Person.prototype.bookRequest = function(book){
    let statusBank = {}; 
    statusBank.status = this.status;
    statusBank.book = book;
    statusBankArray.push(statusBank);
    this.hasRequested = true;
}

// //Student Constructor
// function Student(name, status){
//   Person.call(this, name, status);
//   this.status = status;
// }
// Student.prototype = Object.create(Person.prototype);

// //Teacher Constructor
// function Teacher(name, status){
//   Person.call(this, name, status);
//   this.status = 'teacher';
// }
// Teacher.prototype = Object.create(Person.prototype);



//Admin Constructor
function Admin(name){
  this.name = name;
}
Admin.prototype.grantBook = function(book){
  console.log(book)
    if(checkAvailability(book)) {
      console.log(book)
        for(let data of statusBankArray){
          console.log(data)
          if(data.status === 'teacher') {
            let item = data.book;
            //this.books.push(item);
            library = arrayRemove(library, item);
            return library;
          } else if(data.status === 'seniorS'){
            let item = data.book;
            //this.books.push(item);
            library = arrayRemove(library, item);
            return library;
           } else {
              let item = data.book;
              //this.books.push(item);
              library = arrayRemove(library, item);
              return library;
            }
        }  
    }else {
      return 'book-taken';
    }
  //} 
}

//checking if the book is available
function checkAvailability(book){
  return (library.includes(book)) ? true : false;
}

//removing the book from library
function arrayRemove(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  }
}


let student1 = new Person('Stanley', 'juniorS');
let student2 = new Person('Kazeem', 'seniorS');
let admin1 = new Admin('Adam');
let teacher1 = new Person('Moses', 'teacher');

//teacher1.bookRequest('item-2');
student1.bookRequest('item-3');
//student2.bookRequest('item-4');
//console.log(teacher1);
//console.log(student2);
//admin1.grantBook('item-3');
admin1.grantBook('item-3');
//admin1.grantBook('item-2');

console.log(library);
console.log(student2);
//console.log(teacher1)



console.log(statusBankArray)






//console.log(library);

//console.log(teacher1.hasCollected)
//console.log(student1.hasCollected)