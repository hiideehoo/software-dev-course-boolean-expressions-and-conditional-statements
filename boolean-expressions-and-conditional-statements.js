/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// variables 

let daggerChoice = "1";
let knifePoint = "1";
let coinChoice = "1";
let advice = false;
let teamUp = "2";
let alms = "2";
let disappointment = false;

// intro

let userName = readline.question("What is your name, adventurer? \n> ");
let item = readline.question(`Greetings ${userName}, 
You are an adventurer looking for a lost chest of silver, buried by ancient pilgrims.
You are about to leave home. What do you take with you?
  [1] dagger
  [2] coinpurse
  [3] nothing
  (please enter a number)
  > `);

if (item === "1") {
  console.log("You take your dagger with you.");
} else if (item === "2") {
  console.log("You take your coinpurse with you.");
} else {
  console.log("You wander out unprepared.");
}

// direction

let direction = readline.question(`Wide acres of woods await you, ${userName}. The silver can't be that far.
Unless it is? Maybe you could ask the nearby innkeeper for help.
  [1] wander through the woods
  [2] visit the inn
  (please enter a number)
  > `);

if (direction === "1") {
  console.log("It's not like the pilgrims asked for help either. You step into the woods.");
} else if (direction === "2") {
  console.log("Couldn't hurt to ask? You visit the inn.");
} else {
  console.log("Some days, it's best to stay inside.");
  return
}

// inn

if (direction === "2") {

// inn dagger

  if (item === "1") {
    daggerChoice = readline.question(`It's a quiet day at the inn. Gary's wiping up the counter.
You could ask him what he knows. Unless you think he's not gonna talk so easily...
  [1] ask nicely
  [2] offer your dagger
  [3] threaten him
  (please enter a number)
  > `);
    if (daggerChoice === "3") {
      knifePoint = readline.question(`Gary squeals and says your ilk could never find it.
He begs you to leave.
  [1] venture the woods
  [2] give up and go home
  (please enter a number)
  > `);
    if (knifePoint === "2") {
      console.log("So much for nothing.");
      return;
      }
    }
  }

// inn coins

  if (item === "2") {
    coinChoice = readline.question(`It's a quiet day at the inn. Gary's wiping up the counter.
You could ask him what he knows. Unless you think he's not gonna talk so easily...
  [1] ask nicely
  [2] offer your coins
  (please enter a number)
  > `);
    advice = true;
  }

// inn null

  if (Number(item) > 2) {
    console.log(`It's a quiet day at the inn. Gary's wiping up the counter.`);
    advice = true;
  }

// Gary says

  if (daggerChoice === "2" || coinChoice === "2") {
    console.log(`You're too kind, bless you ${userName}!`);
  }
  if (daggerChoice !== "3" || advice === true) {
    console.log(`You ask him what he knows, and he tells you:
"Those who only have wealth in their heart are set to inheret divine riches."`);
  }

  console.log("Now you set off for the woods!");
}

// stranger

console.log("As you step through the sticks, a stranger approaches.");

if (item === "1" && daggerChoice !== "2") {
  teamUp = readline.question(`He notices your dagger and thinks you look useful.
He asks if you wanna find some silver with him.
  [1] team up with him
  [2] no thanks
  (please enter a number)
  > `);
  if (teamUp === "1") {
    console.log("How hard could it be with two heads together?");
  }
} else if (item === "2" && coinChoice !== "2") {
  alms = readline.question(`He notices your coins and asks if he could have some.
  [1] refuse
  [2] give him everything
  (please enter a number)
  > `);
  if (alms === "2")
    console.log("You give the man all your coins. He runs away, not very thankfully.");
} else {
  console.log("He notices you got nothing on you.");
  let disappointment = true;
}

if (teamUp !== "1" || alms !== "2" || disappointment === true) {
  console.log("He walks away, disappointedly.");
}

// woods with sin

if (alms !== "2" || daggerChoice === "3") {
  console.log(`...
No matter how long you travel these woods, you never seem to find that silver.`);
  return;
}

// woods without sin

console.log(`...
Eventually, you come across a dip in the dirt.
Before you could dig it up, a chest unearths itself before you.
You found the silver!`);
if (teamUp === "1" && daggerChoice !== "3") {
  console.log("The stranger takes half, of course.");
}

return;

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/