
console.log("Welcome to Chinchiro!")

//Dice, 3 required.
//Can re-use them for the computer player after human player roll submitted
//Below 3 dice are rolled, then combined into an array and sorted smallest to largest

export const dice1 = 0
export const dice2 = 0
export const dice3 = 0
export const allDice = [dice1, dice2, dice3]

export function diceRoll() {

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

}
export function sortDice() {
    const allDice = [dice1, dice2, dice3]
    allDice.sort(function (a, b) { return a - b })
}

export function Game(allDice, player1, player2) {
    this.allDice = allDice
    this.player1 = player1
    this.player2 = player2
}

//Below is the "gameplay loop" to determine scoring
//If Statement as Switch seemed unecessary for checking Arrays
//Can use breaks for the "Instant win/lose" components

Game.prototype.getResult = function (score) {
    const reRollCounter = 0
    while (reRollCounter != 2) {
        diceRoll(dice1, dice2, dice3)
        sortDice(allDice)
        if (allDice[0] == 1 && allDice[1] == 2 && allDice[2] == 3) {
            this.reportLoss
            break
        }
        else if (allDice[0] == 4 && allDice[1] == 5 && allDice[2] == 6) {
            this.reportWin
            break
        }
        else if (allDice[0] == allDice[1] == allDice[2]) {
            this.reportWin
            break
        }
        else if (allDice[0] == allDice[1] != allDice[2]) {
            this.score = allDice[2]
            this.reportResult
            break
        }
        else if (allDice[0] != allDice[1] == allDice[2]) {
            this.score = allDice[0]
            this.reportResult
            break
        }
        else {
            this.reportReroll
            reRollCounter++
        }
        this.reportReollMax
    }

}
//HOPEFULLY this line below will run the game??

const playGame = new Game.prototype.getResult()

console.log(playGame)

Game.prototype.addOutput = function (output) {
    const elem = document.createElement('p')
    elem.appendChild(document.createTextNode(output))
    this.output.appendChild(elem)
}

Game.prototype.reportResult = function (score, allDice) {
    this.addOutput(`You have rolled, ${allDice} and scored ${score} point(s)`)
}

Game.prototype.reportLoss = function (allDice) {
    this.addOutput("Sorry, you have rolled an instant LOSS (1,2,3)")
}

Game.prototype.reportWin = function (allDice) {
    this.addOutput("Congratulations, you have rolled an instant WIN")
}

Game.prototype.reportReroll = function (allDice) {
    this.addOutput("Your roll is indeterminate and requires re-rolling")
}
Game.prototype.reportReollMax = function (allDice) {
    this.addOutput("You have reached the maximum number of re-rolls, due to this, you have lost")
}
//This is where the evaluation of the dice roll will go and output the players "Value"



