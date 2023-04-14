// return factorial of a number
// memory inefficient
function factorialRecursive(fact) {
  if (fact == 1) {
    return 1;
  } else {
    return fact * factorialRecursive(fact - 1);
  }
}
