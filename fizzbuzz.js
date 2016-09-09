var fizzBuzz = function(){
  for (var i = 1; i <= 100; i++) {
  	var three = i%3;
    var five = i%5;
    var output;
    
    if (three === 0 && five === 0) {
    	output = 'FizzBuzz';
    }    
    else if (three === 0) {
    	output = 'Fizz';
    }
    else if (five === 0) {
    	output = 'Buzz';
    }
    else {
    	output = i;
    }
		arr[i-1] = output;
  }
  return arr;
}
