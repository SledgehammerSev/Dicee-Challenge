//Dice and possibleRolls
var dice =  ["1", "2", "3", "4", "5", "6"];
possibleRolls = dice.length;

//Dice Roll process
function rollDice(dice) {
randomNumber = Math.round(Math.random() * possibleRolls + 1); //+ 1 because Math.random is 
return randomNumber
}

//Roll Dice 1
function roll1(){
randomNumber1 = rollDice();
randomNumber1

    //Update Dice image based on Diceroll
    document.querySelector("img").setAttribute("src", 'images/dice' + randomNumber1 + '.png');

}
roll1(dice);


//Roll Dice 2
function roll2(dice){
randomNumber2 = rollDice();
randomNumber2

    //Update Dice image based on Diceroll
    document.querySelector("img.img2").setAttribute("src", 'images/dice' + randomNumber2 + '.png');

}
roll2(dice);


//Announce Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "🚩 Player 2 Wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
}
