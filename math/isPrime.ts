function isPrime(n: number) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(12));
console.log(isPrime(24));
console.log(isPrime(3));
console.log(isPrime(9));
