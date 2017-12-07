var isPrime = function (n) {
  if (n % 2 == 0 && n > 1) {
    return false;
  } else if (n > 2) {
    for (var i = 3; i < Math.sqrt(n); i+= 2) {
      if (n % k == 0) {
         return false;
      }
    }
  } else {
    return true;
  }
}
