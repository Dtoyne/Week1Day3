// When passing arguments through the command line, be sure to delimit the input with quotes:
// This will allow the arguments (however many) to be passed through the program as one argument.

// With a for loop:

var str = process.argv.slice(2).toString()

function countLetters (str) {
  var uniqueLetters = "";
  var object = {};
    for (var i = 0 ; i < str.length; i++) {
      if (object.hasOwnProperty(str[i])) {
        object[str[i]].push(i);
      } else {
        object[str[i]] = [i];
        }
      }
    return object;
  }

console.log(countLetters(str));

// With a for-in loop:

var str = process.argv.slice(2).toString()

function countLetters(str) {
  var uniqueLetters = "";
  var object = {};
    for (var i in str) {
      if (object.hasOwnProperty(str[i])) {
        object[str[i]].push(i);
      } else {
        object[str[i]] = [i]
      }
    }
  return object;
}

console.log(countLetters(str));

// Refactored with a ternary operator:

var str = process.argv.slice(2).toString()

function countLetters(str) {
  var uniqueLetters = "";
  var object = {};
  for (var i in str) {
    object.hasOwnProperty(str[i]) ? object[str[i]].push(i) : object[str[i]] = [i];
  }
  return object;
}

console.log(countLetters(str));
