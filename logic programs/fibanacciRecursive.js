function fibRecursive(number, i = 0, p = 0, c = 1, n = 1) {
  if (i < number) {
    console.log(n);
    n = p + c;
    p = c;
    c = n;
    return fibRecursive(number, (i = i + 1), p, c, n);
  }
  return;
}
