const Person = require('../../Person');
const requestArray = require('../../../Store/requestArray');
const returnArray = require('../../../Store/returnArray');
const borrowedBook = require('../../../Store/borrowedBook');


function Student(name, idN, priority){
  Person.call(this, name, idN, priority); 
}




Student.prototype = Object.create(Person.prototype);





  // let std1 = new Student('Ade', 12365, 3);
  // //let std3 = new Student('Adeyemi', 10005, 3);

  // std1.request('item-2', 'Johnson');
  
  // // std1.request('item-3', 'Miles');

  // //console.log(borrowedBooks);

  // std1.return('item-2', 'Johnson', 12365);

  // console.log(returnArray);



module.exports = Student