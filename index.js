import { prompt, cleanUp } from './input.js';
import { singlePlayerGame } from './game.js';
import { demo_play_10_games } from './tests.js';

async function main() {
    // Startup logic, welcome, splash screen
    console.log("Welcome to Rock, Paper, Scissors!");

    // Main Event Loop / Logic
    // What are the main things our app does?
    console.log("Type 'h' for help. 'q' to quit.");

    // Start running our application
    let running = true;
    while (running) {
        // Ask the user what they want to do
        const userInput = await prompt("> ");

        switch (userInput) {
            case "h":
                console.log("Help Menu:");
                console.log("h - Display this help menu");
                console.log("demo - Run a demo of 10 games between two preset players");
                console.log("game - Play a game of Rock, Paper, Scissors");
                console.log("q - Quit the application");
                break;
            case "q":
                // Stop running
                running = false;
                break;
            case "demo":
                demo_play_10_games();
                break;
            case "game":
                await singlePlayerGame();
                console.log("Thanks for playing!");
                break;
            default:
                console.log("What are you even trying to do? Type 'h' for help.");
                break;
        }
    }

    // Cleanup logic / shutdown
    console.log("Thanks for playing! Goodbye!");
    cleanUp();
}

// Start our application
main();
