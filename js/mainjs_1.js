function pow(x, n) {
  var result = x;

  for (var i= 1; i< n; i++) {
    result *= x;
    }
  return result;
  }

var x = prompt("Введите любое целое число!", '');
var n = prompt("Введите степень!", '');
  result = pow(x, n);

console.log(result);
