var isPrime = function (n) {
  var n = parseInt(prompt("Is n prime?"));
    if (n % 1 !== 0 || n < 2 || n > 9E15) {
      throw "Number is not an integer or is out of range";
    }
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
         if (n % k === 0) {
            return false;
         }
    }
    return true;
} ;
