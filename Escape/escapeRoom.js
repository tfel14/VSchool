const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(`${name}, "Welcome to the Escape Room Simulation!`);
let alive = true;
let gotKey = false;

while (alive == true) {
    var menu = readline.keyIn(' Press 1 to Put hand in hole, Press 2 to find the key, or, Press 3 to open door', { limit: '$<1-3>' });

    switch (menu) {
        case "1": //put hand in hole.
            console.log(`${name} you put hand in the hole. GAME OVER!`)
            alive = false;
            break;
        case "2": // Find the key
            if (gotKey == false) {
                console.log(`${name}, you have found the key, proceed to opening the door.`);
                gotKey = true;
            }
            else {
                console.log(`${name}, you've already found the key, YOU'RE WASTING TIME! GO TO THE DOOR!`);
            }
            break;
        case "3": // Open the door.
            if (gotKey == false) {
                console.log(`${name}, you cannot open the door without finding the key first!`)
            }
            else {
                console.log(`${name}, you have escaped succeffully, job well done!`);
                alive = false;
            }
            break;
        default:
            console.log(`${name} you need to make a selection!`)
    }
}