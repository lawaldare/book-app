const Person = require('../../Person');


//Student Constructor
function Student(name, idN, priority){
  Person.call(this, name, idN, priority); 
}


Student.prototype = Object.create(Person.prototype);










module.exports = Student