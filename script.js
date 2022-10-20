// Loops Exercise
// 1
/* for (i = 1, i <= 7, i++){
    console.log(i);
} */
// 2
/* for (i = 5, i <= 25, i += 4){
    console.log(i);
} */
// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b
for (friends of wizards){
    console.log(friends);
}
// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

// BONUS
// 5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Slytherin`,
    `Ravenclaw`
];
// 5b
for (houses of hogwartsHouses){
    for (letter of houses){
        console.log(letter);
    }
};
// 6a
const quote = [
    `You're`,
    `A`,
    `Wizard`,
    `Harry`
];
// 6b

let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`;
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

/* let quoteLine = ``;
for (i = 0; i < quote.length; i++){
    quoteLine = quoteLine + quote[i] + ` `;
}
console.log(quoteLine);
 */

// 7
// !fizzbuzz
for (i = 1; i <= 25; i++){
    // multiple conditions first/more specific
    if (1 % 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0){
        console.log(`Expecto`);
    } else if (i % 5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}







// Questions Below

/* 
A. Inside the “Loops” folder create a Folder called “LoopsExercise”
B. Inside the “LoopsExercise” folder create a script.js file
C. NOTE: Console logs are NOT necessary unless specifically asked for.
D. Open your script.js file and complete the following...
1. Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a console log for this)
2. Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the console/terminal (You will need a console log for this)
3a. Create a const variable named wizards and set the value of the variable to the following array items "Harry Potter", "Hermione Granger", and "Ron Weasley"
3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)
4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).
4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.
4c. After the while loop in your file create a console log to display the value of the harryPotterMovies variable in the terminal (The value should be 8)
BONUS
5a. Create a const variable named hogwartsHouses and set the value of the variable to the following array items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".
5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).
6a. Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".
6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)
7. Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the string value of "Expecto Patronum" display instead of the number.

*/