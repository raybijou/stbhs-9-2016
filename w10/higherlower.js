var readlinesync = require('readline-sync');
var secretnumber = Math.floor(Math.random()*10)+1;
for (var win = false;!win;){
  var guess = readlinesync.question("Guess a Number \n")
  if(guess == secretnumber) {
    console.log("You Win!");
    win =true;
}else{
 if (guess <secretnumber) {
   console.log("sorry try guessing higher");
 }
 if (guess >secretnumber){
  console.log("sorry try guessing lower");
}
}}
