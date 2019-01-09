//Instatiate library folder
let library = [];

//library constructor
function Library(title) {
  this.title = title
  library.push(this.title);
  return library;
}


//Person contructor
function Person(name, age){
  this.name = name;
  this.age = age;
  this.hasOrderBook = false;
}

Person.prototype.borrowBook = function(book){
    if(checkAvailability(book)) {
        this.hasOrderBook = true;
        library = arrayRemove(library, book);
        return library;
    }else {
      console.log('book-taken')
    }
}

//Teacher Constructor
function Teacher(name, age){
  Person.call(this, name, age)
}
Teacher.prototype = Object.create(Person.prototype);

//Student Constructor
function Student(name, age, status){
  Person.call(this, name, age);
  this.status = status;
}
Student.prototype = Object.create(Person.prototype);

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











module.exports = Library;
module.exports = Person;
module.exports = Teacher;
module.exports = Student;



