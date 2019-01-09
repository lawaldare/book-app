//Instatiate library folder
let library = [];

//library constructor
function Library(title) {
  this.title = title
  library.push(this.title);
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
