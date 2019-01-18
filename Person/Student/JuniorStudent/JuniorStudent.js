const Person = require('../../Person');
const requestArray = require('../../../Store/requestArray');
const returnArray = require('../../../Store/returnArray');
const borrowedBook = require('../../../Store/borrowedBook');


//Student Constructor
function Student(name, idN, priority){
  Person.call(this, name, idN, priority); 
}




Student.prototype = Object.create(Person.prototype);



module.exports = Student