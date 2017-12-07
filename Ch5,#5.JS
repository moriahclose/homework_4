function randomInt(min,max) {

var min = parseInt(prompt( "Enter a number." ));
var max = parseInt(prompt( "Enter another number." ));
var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

return randNum;

}
alert(randomInt());
