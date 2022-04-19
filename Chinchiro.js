import { ConsoleWriter } from "istanbul-lib-report";
import { all } from "micromatch";

console.log("Welcome to Chinchiro!")

//Dice, 3 required.
//Can re-use them for the computer player after human player roll submitted
//Below 3 dice are rolled, then combined into an array and sorted smallest to largest

diceRoll = function (allDice) {

    const dice1 = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        }
    }

    const dice2 = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        }
    }

    const dice3 = {
        sides: 6,
        roll: function () {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        }
    }
    const allDice = [dice1, dice2, dice3]
    allDice.sort(function (a, b) { return a - b })
}

//Below is the "gameplay loop" to determine scoring
//If Statement as Switch seemed unecessary for checking Arrays
//Can use breaks for the "Instant win/lose" components

getResult = function (score) {
    if (allDice[0] == 1 && allDice[1] == 2 && allDice[2] == 3) {
        console.log("Sorry, you have rolled an instant LOSS")
    }
    else if (allDice[0] == 4 && allDice[1] == 5 && allDice[2] == 6) {
        console.log("Congratulations, you have rolled an instant WIN")
    }
    else if (allDice[0] == allDice[1] == allDice[2]) {
        console.log("Congratulations, you have rolled a triple, therefore resulting in an instant WIN")
    }
    else if (allDice[0] == allDice[1] != allDice[2]) {
        score = allDice[2]
        console.log("Your score for this roll is: " + score)
    }
    else if (allDice[0] != allDice[1] == allDice[2]) {
        score = allDice[0]
        console.log("Your score for this roll is: " + score)
    }
    else {
        console.log("Your roll is indeterminate")
    }





    
}

//This is where the evaluation of the dice roll will go and output the players "Value"
