var str = process.argv.slice(2).toString().toLowerCase().split(",").join("");

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
