import { writeData } from './db.js';
import { playMultipleGames } from './game.js';

export const demo_play_10_games = () => {
    // Make a couple users
    const p1_moves = ["R", "P", "S", "R", "P", "S", "R", "P", "S", "R"];
    const p2_moves = ["R", "R", "R", "R", "R", "R", "R", "R", "R", "R"];
    
    const p1 = new User("Alice", p1_moves);
    const p2 = new User("Bill", p2_moves);
    
    // Play multiple games and collect some stats
    const stats = playMultipleGames(p1, p2);
    
    // Display our collected stats
    console.log("Final Statistics:");
    console.log(`${p1.name} Wins: ${stats.p1_wins}`);
    console.log(`${p2.name} Wins: ${stats.p2_wins}`);
    console.log(`Ties: ${stats.ties}`);

    writeData("gameStats.json", stats);
}