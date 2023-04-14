// returns facotorial of number
// memory efficient
function factorial(number, fact = 1) {
  if (number === 0 || number == 1) {
    return 1;
  }
  for (let i = 2; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
