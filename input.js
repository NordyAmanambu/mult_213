// Contain our logic for getting user input from the command line
import readline from 'readline';

// Creates an interface for reading lines from stdin (The command line)
const textInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (questionText) => {
  return new Promise((resolve) => {
    textInterface.question(questionText, (input) => {
      resolve(input);
    });
  });
};

// Cleanup for other processes that may use stdin
const cleanUp = () => {
  textInterface.close();
};

async function test() {
    console.log("Testing input module...");

    // Gather user input answering some question
    const userInput = await prompt("What is your name? ");

    console.log(`Hello, ${userInput}!`);

    // Once we are done, close the readline interface
    textInterface.close();
}

export { prompt, cleanUp };
