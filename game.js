// Game Logic
import { prompt } from './input.js';

// Rock, Paper, Scissors

// Rock ("R" "Rock" "ROCK") beats Scissors
// Scissors ("S" "SCISSORS") beats Paper
// Paper ("P" "PAPER") beats Rock

/*
playGame - Takes in two player choices and determines the winner

Returns 0 for tie
Returns 1 if player 1 win
Returns 2 if player 2 win
*/
const playGame = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
        return 0; // Tie
    }

    if (
        (player1Choice === "R" && player2Choice === "S") ||
        (player1Choice === "S" && player2Choice === "P") ||
        (player1Choice === "P" && player2Choice === "R")
    ) {
        return 1; // Player 1 wins
    } else {
        return 2; // Player 2 wins
    }
}

const playMultipleGames = (p1, p2) => {
    const stats = {
        p1_wins: 0,
        p2_wins: 0,
        ties: 0
    }

    // Play 10 rounds
    for (let i = 0; i < p1.moves.length; i++) {
        // console.log(`Rounds ${i + 1}`);

        // Figure out each person's moves for the round
        // Compare the moves against each other, get a result
        const p1Move = p1.moves[i];
        // console.log(`${p1.name} plays ${p1Move}`);

        const p2Move = p2.moves[i];
        // console.log(`${p2.name} plays ${p2Move}`);

        const roundWinner = playGame(p1Move, p2Move);
        // Update stats based on result

        if (roundWinner === 0) {
            stats.ties += 1;
            // console.log("It's a tie!");
        } else if (roundWinner === 1) {
            stats.p1_wins += 1;
            // console.log(`${p1.name} won!`);
        } else if (roundWinner === 2) {
            stats.p2_wins += 1;
            // console.log(`${p2.name} won!`);
        }
    }

    return stats;
}

const singlePlayerGame = async () => {
   // Get player name and number of rounds
   const playerName = await prompt("Enter your name: ");
   const rounds = parseInt(await prompt(`Hello ${playerName}! How many rounds do you want to play? `), 10);

   // TODO: Need to track stats

   console.log(`Great! We will play ${rounds} rounds.`);
   const validMoves = ["R", "P", "S"];
   for (let i = 0; i < rounds; i++) {
        let playerMove = "";
        // Get and validate player move
        while (true) {
            playerMove = (await prompt("Enter your move (R, P, S): ")).toUpperCase();
            if (validMoves.includes(playerMove)) {
                break;
            } else {
                console.log("Invalid move. Please enter R, P, or S.");
            }
        }

        // Generate computer move (hard coded to be Rock for now)
        const computerMove = "R";
        // TODO: Needs to make the computer better, but not too good?

        // TODO: Need to show the computer to the player

        // const computerMove = validMoves[Math.floor(Math.random() * validMoves.length)];
        // console.log(`Computer plays: ${computerMove}`);

        // Decide who won
        const result = playGame(playerMove, computerMove);
        if (result === 0) {
            console.log("It's a tie!");
        } else if (result === 1) {
            console.log(`${playerName} wins this round!`);
        } else if (result === 2) {
            console.log("Computer wins this round!");
        }
   }
}

export { playGame, playMultipleGames, singlePlayerGame };