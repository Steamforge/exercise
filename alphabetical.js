/*
Create a function to determine if a word's letters 
are in alphabetical order

Expected output:

almost IN ORDER
cereal NOT IN ORDER
billowy IN ORDER
biopsy IN ORDER
chinos IN ORDER
defaced NOT IN ORDER
chintz IN ORDER
sponged REVERSE ORDER 
bijoux IN ORDER
abhors IN ORDER
fiddle NOT IN ORDER
begins IN ORDER
chimps IN ORDER
wronged REVERSE ORDER
*/

var inOrder = function(word) {
  var sort = word.split('').sort().join('');
  var reverse = word.split('').sort().reverse().join('');
  switch (word) {
  	case sort:
    	output = 'In Order';
      break;
    case reverse:
    	output = 'Reverse Order';
      break;
    default:
    	output = 'Not in Order';
  }
  return output;
};
