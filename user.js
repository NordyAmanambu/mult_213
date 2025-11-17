// Define a User object
export class User {
    constructor(name, moves) {
        this.name = name;
        this.moves = moves; // Array of {"R", "P", or "S"}
    }
}

// A greeter function
export function greetUser(user) {
    return `Welcome, ${user.name}!`;
}

// same greeter function, as an arrow function
export const greetUser2 = (user) => {
    return `Welcome, ${user.name}!`;
};
