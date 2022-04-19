

console.log("Welcome to Chinchiro!")

//Dice, 3 required.
//Can re-use them for the computer player after human player roll submitted
//Below 3 dice are rolled, then combined inot an array and sorted smallest to largest

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
allDice.sort(function(a, b){return a - b})


//This is where the evaluation of the dice roll will go and output the players "Value"

HumanPlayer.prototype.getResult = function (callback) {
       //switch statement
       //Can use breaks for the "Instant win/lose" components
}