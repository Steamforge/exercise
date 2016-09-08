var isPalindrome = function (str) {
	var str = str.replace(' ','').toLowerCase();
  var reverseStr = str.split('').reverse().join('');
	return str === reverseStr;
};
