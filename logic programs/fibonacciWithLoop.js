// prints out fibonacci series
function fibonacci(limit) {
  let p = 1,
    c = 1;
  for (let n = 1; n <= limit; n = p + c) {
    console.log(n);
    p = c;
    c = n;
  }
}
