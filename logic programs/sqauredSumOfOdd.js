// returns suared sum of odd numbers in an array
function squaredSumOfOdd(numbers) {
  let oddNumbers = numbers.filter((number) => number % 2 === 1);
  let squaredOddNumbers = oddNumbers.map((number) => {
    return number * number;
  });
  let sumSquaredOddNumbers = squaredOddNumbers.reduce((acc, curr) => {
    return acc + curr;
  });

  return sumSquaredOddNumbers;
}
