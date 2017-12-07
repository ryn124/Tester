function LetterCapitalize(str) {
  var array = str.split(" ");
  var newStr = [];
  for (var i = 0; i < array.length; i++) {
    var letter = array[i].split("");
    var upper = letter[0].toUpperCase();
    letter.splice(0, 1, upper);
    newStr.push(letter.join(""));
  }
  return newStr.join(" ");
}

LetterCapitalize("hello world");


return str.splot(' ').map(function (s) { return s.split('')[0].toUpperCase() + s.substr(: ); }).join(' ')




var stuff = ["xag", "sbt", "dxz", "hcr"]

var alphabetize = function (stuff) {
  for (var i = 0; i < stuff.length; i++) {
    var temp = stuff[i].split("").sort().join("");
    stuff.splice(i, 1, temp);
    // console.log(temp);
  }
  stuff.sort();
  console.log(stuff)
}



var numbers = [5, 1, 3, 4, 10, 0];

var sort = function (a) {
  for (var i = 0; i < a.length; i++) {
    for (var i = 0; i < a.length + 1; i++) {

      var first = a[i];
      var second = a[i + 1];
      console.log("Loop: " + i + " ||First: " + first + " ||Second: " + second);

      if (first > second) {
        a.splice(i, 1, second);
        a.splice(i + 1, 1, first);
      }
    }
  }
  console.log(a)
}