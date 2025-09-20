function sumOfDigits(num: number) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1));

function numberOfDigits(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(numberOfDigits(0));
console.log(numberOfDigits(23323432));

/*
   Time Complexity - O(log10N)
*/
