// index.js

function isPerfectNumber(number) {
    if (number <= 1) {
      return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i;
        if (i !== number / i) {
          sum += number / i;
        }
      }
    }
    return sum === number;
  }
  
  const number = 28;
  if (isPerfectNumber(number)) {
    console.log(`${number} is a perfect number.`);
  } else {
    console.log(`${number} is not a perfect number.`);
  }
  