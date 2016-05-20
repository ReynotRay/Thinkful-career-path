// done 1 max of two numbers
function max (a,b){
	if (a > b) {
		console.log('a is larger');
	}
	else {
		console.log('b is larger');
	}
}
console.log(max(10,15));

//Done 2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

var a = 10;
var b = 11;
var c = 22;

function max (a,b,c){
  
 for(var i = 0; i < arguments.length; i ++) {
     //extra argument if more than 4 variables then u cant pass it
    if(arguments.length > 3 || isNaN(arguments[i])) {
     console.log('You can pass maximum of 3 integers');
     return -1;
 }    
 }   
if (a > b && a > c){
    console.log ('a is larger');
    return a;
}
else if (b > a && b > c) {
    console.log ('b is larger');
    return b;
}
    
else  {
    console.log ('C is larger');
    return c;
}
}
console.log(max(a,b,c));



//Done 3 Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var findCharacter = function(letter){
    
var vowels = 'aeiou';    

for(var i = 0; i < vowels.length; i++) {
  
        return letter == vowels[i] ? true : false;
}
};

console.log(findCharacter('b'));

// 4 need help how to translate
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
var translate = function(x) {
  var string = x.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var y = "";
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i); 
    if (vowels.indexOf(current) != -1)
    y = (y + (current));
   else 
    y = (y + (current + "o" + current));
  }
  return y;
}



//5 aleks 2 hoisting vs anonymous function show done Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

//how do u feel function declaration or function expression when function is used as a variable
    var sum = function(array) {
     var length = array.length;
     var total = 1;
     for (var i = 0; i < length; i++) {
       total += array[i];
     }
     return total;
    };

console.log(sum([1,2,3,4,]));

var multiply = function(array) {
  var length = array.length;
  var total = 1;
    
  for (var i = 0; i < length; i++) {
    total *= array[i];
  }
  return total;
};


console.log(multiply([1,2,3,4]));



//6 aleks 1 done will sorta

function reverse (string){
	var answer = ""; 
	for(var i = string.length - 1 ;i >=0; i--){
		answer += string[i];
	}
	return answer;
}
console.log(reverse("kcufehttahw"));


//7 aleks 4 need help Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.
var translate = function(string){
    var stringArray = string.split(" ");
    var translate = {
        "merry":"god",
        "christmas":"jul",
        "and":"och",
        "happy":"gott",
        "new":"nytt",
        "year":"år"};
    var translation = "";
    stringArray.forEach(function(element){
        translation += translate[element] + " ";
    });
    return translation;
}


console.log(translate("merry christmas and happy new year"));
translate("merry christmas and happy new year") == "god jul och gott nytt år " ? console.log("success!") : console.log("try again")






//8 aleks 3 longest word further explaination of null and y 0 set for longest

function longestWord(string) {
    var str = string.split("");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("what the fucks"));

//9 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
var filterLongWords = function(array, int){
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
}

//10 Write a function charFreq() that takes a string and builds a frequency listing of the characters 
//contained in it. Represent the frequency listing as a JavaScript object. 
//Try it with something like  charFreq("abbabcbdbabdbdbabababcbcbab").
var charFreq = function(string){
  var list = {};
  var length = string.length;
  for (var i = 0; i < length; i++) {  
  if (string.charAt(i) in list) 
    list[string.charAt(i)] += +1;
  else 
    list[string.charAt(i)] = 1;
  }
  return list;
}