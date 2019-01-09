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
