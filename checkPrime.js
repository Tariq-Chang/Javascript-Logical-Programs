// returns true if the number is prime
function checkPrime(number) {
  for (let i = 2; i < 17; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
