function fibonacci(n: number) {
  let first = 0;
  let second = 1;
  let sum = first + second;

  for (let i = 3; i <= n; ++i) {
    first = second;
    second = sum;
    sum = first + second;
  }

  console.log(sum);
}

// 0 1 1 2 3 5 8 13

fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);

function fibonacciRecursive(n: number): number {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));


