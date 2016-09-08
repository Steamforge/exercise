var fib = function(num) {
  var arr = [0, 1];
  var newNum = 0;
  var yes = 'previous number is: ';
  var no = 'not a fibbonaci number';

  switch (num) {
    case 0:
    case 1:
      yes += num;
      break;

    default:
      for (var i = 2; i <= num; i++) {
        newNum = arr[i - 2] + arr[i - 1];
        arr[i] = newNum;

        if (newNum === num) {
          yes += arr[i - 1];
          break;
        }
        if (newNum > num) {
          arr.length = 0;
          break;
        }
      }
  }
  return arr.length === 0 ? no : yes;
};
