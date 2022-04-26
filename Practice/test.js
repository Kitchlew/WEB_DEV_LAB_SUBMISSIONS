var number=[1,2,3,4,5,6]
console.log(number.filter(checkAdult))

function checkAdult(age) {
    return age%2!=0;
  }