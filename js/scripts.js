var name = prompt("Hae,Enter a sentence");

var fullstring = name.split("");
var firstChar = fullstring[0];
var lastChar = fullstring[fullstring.length-1];
document.getElementById("sentence").innerHTML= name;


var changeLettersToUpper=function(argument1,argument2){
 return document.getElementById("newstring").innerHTML= (argument1 + argument2).toUpperCase();
}

changeLettersToUpper(firstChar,lastChar);


function reverseletters(parameter1,parameter2){
	return document.getElementById("newreversedstring").innerHTML= (parameter2 + parameter1).toUpperCase();
	
}

reverseletters(firstChar,lastChar);


