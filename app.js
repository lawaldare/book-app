//Library
let library = [];

let teacherArray = [];
let juniorArray = [];
let seniorArray = [];

function Person(name){
  this.name = name;
  this.hasOrderBook = false;
}

Person.prototype.requestBook = function(book){
  let teacherObj = {}, juniorObj = {}, seniorObj = {};
    if(this.status === 'teacher'){
      teacherObj.book = book;
      teacherObj.name = this.name;
      teacherObj.collected = false;
      teacherArray.push(teacherObj);
    } else if(this.status === 'senior'){
      seniorObj.book = book;
      seniorObj.name = this.name;
      seniorObj.collected = false;
      seniorArray.push(seniorObj);
    } else { 
      juniorObj.book = book;
      juniorObj.name = this.name;
      juniorObj.collected = false;
      juniorArray.push(juniorObj);
    }
    this.hasOrderBook = true;
}

//Admin Constructor
function Admin(name){
  Person.call(this, name);
} 

Admin.prototype.grantBook = function(){
  if(teacherArray.length > 0){
    for(user of teacherArray){
        if(checkAvailability(user.book)){
          library = arrayRemove(library, user.book);
          user.collected = true;
          return library;
        } 
         continue;
    }
  } else {
    console.log('book taken');
  }   
     
  if(seniorArray.length > 0){  
    for(user of seniorArray){
        if(checkAvailability(user.book)){
          library = arrayRemove(library, user.book);
          user.collected = true;
          return library;
        } 
        continue;
    } 
  } else {
    console.log('book taken');
    }
  
  if (juniorArray.length > 0){ 
    for(user of juniorArray){
        if(checkAvailability(user.book)){
          library = arrayRemove(library, user.book);
          user.collected = true;
          return library;
        } 
      continue;
    }
  } else {
    console.log('book taken');
  }  
}

Admin.prototype.add = function(book){
  library.push(book);
  return library;
}

Person.prototype.returnBook = function(book){
        library.push(book);
        this.hasOrderBook = false;
}

//Teacher Constructor
function Teacher(name, status){
  Person.call(this, name, status)
  this.status = 'teacher';
}
Teacher.prototype = Object.create(Person.prototype);

//Student Constructor
function Student(name, status){
  Person.call(this, name, status);
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

const admin1 = new Admin('Johnson');
const student1 = new Student('Moses', 'senior');
const student3 = new Student('John', 'senior');
const student2 = new Student('Kazeem', 'junior');
const teacher1 = new Teacher('Salah');

student1.requestBook('item-1');
student2.requestBook('item-2');
student3.requestBook('item-4');
teacher1.requestBook('item-3');

// console.log(juniorArray)
// console.log(seniorArray)
// console.log(teacherArray);

admin1.grantBook();
admin1.grantBook();
admin1.grantBook();
admin1.grantBook();
// admin1.grantBook();

console.log(seniorArray)
console.log(juniorArray)
console.log(teacherArray);

//student1.returnBook('item-1');



console.log(library)

console.log(seniorArray);
console.log(student1)