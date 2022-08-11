// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let aSentence = 'What time is it?';
aSentence.includes('?') ? alert(aSentence) : console.log(false);
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let stringOfWords = 'jr. dev, jr. dev, jr. dev, sde 2, sde 3, senior software engineer';
console.log(stringOfWords.replaceAll("jr. dev", "software engineer"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function returnsRockPaperScissors(){
    let random = Math.random();
    if (random < 0.33) return 'rock';
    else if (random < 0.66) return 'paper';
    else return 'scissors';
}
console.log(returnsRockPaperScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takesChoice(choice){
    let botsChoice = returnsRockPaperScissors();
    if (
        (choice === 'rock' && botsChoice === 'scissors') ||
        (choice === 'paper' && botsChoice === 'rock') ||
        (choice === 'scissors' && botsChoice === 'paper')
    ){
        return 'You won';
    } else if (choice === botsChoice){
        return "It's a tie";
    } else {
        return 'You lost';
    }
}
console.log(takesChoice('rock'));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function takesAnArray(anArr){
    anArr.forEach(choice => {
        console.log(takesChoice(choice));
    });
}
takesAnArray(['rock','paper','scissors']);