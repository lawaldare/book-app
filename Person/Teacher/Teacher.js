const Person = require('../Person');
const requestArray = require('../../Store/requestArray');


//Teacher Constructor
function Teacher(name, idN, priority){
  Person.call(this, name, idN, priority); 
}


Teacher.prototype = Object.create(Person.prototype);




module.exports = Teacher