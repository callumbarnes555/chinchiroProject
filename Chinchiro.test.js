import { test, jest, expect } from "@jest/globals"
import { Game, sortDice, diceRoll, } from "./Chinchiro"

describe("Game", () => {
    const losingRoll = { allDice: () => [1, 2, 3] }
    const winningRoll = { allDice: () => [4, 5, 6] }

    test("Game should result in a loss with a roll of 1, 2, 3", () => {
        const game = new Game.prototype.getResult(losingRoll)
        game.reportResult = jest.fn()

        game.getResult()

        expect(game.getResult).toContainEqual("Sorry, you have rolled an instant LOSS (1,2,3)")
    })
})
