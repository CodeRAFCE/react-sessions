export function findNthPrime(n) {
  if (n < 1) return null;
  if (n === 1) return 2;

  let count = 1; // Counted 2
  let num = 3; // Start checking from 3

  while (count < n) {
    let isPrime = true;
    let limit = Math.sqrt(num);

    for (let i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) count++;
    if (count === n) return num;
    num += 2; // Check next odd number
  }
}
