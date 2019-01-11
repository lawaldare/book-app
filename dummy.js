//CHALLENGE ONE

function absoluteValuesSumMinimization(arr){
  if(arr.length % 2 === 0){
    return arr[(arr.length / 2) - 1];
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

//  console.log(absoluteValuesSumMinimization([2, 4, 7]));
//  console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
//  console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
//  console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

//CHALLENGE TWO

function add(num1, num2) {
  return num1 + num2;
}

function add2(...args) {
  let total = 0;
  args.forEach(function(arg){
    total += arg;
  })
  return total;
 }





