let luckyNumber = 0;
let totalScore = [];
let finalScore = 0;
const diceButton = document.querySelector('section a')
const upperText = document.querySelector('main h2');
const middleText = document.querySelector('section h2');
const bottomText = document.querySelector('section h3');


// Drop down Rules Menu
document.addEventListener('DOMContentLoaded', function() {
  let rules = document.getElementById('hiddenRules');
  rules.style.display = 'none';

  document.getElementById('showButton').addEventListener('click', function() {
    if (rules.style.display === 'none') {
      rules.style.display = 'block';
    } else {
      rules.style.display = 'none';
    }
  });

  document.addEventListener('click', function(event) {
    if (!rules.contains(event.target) && event.target !== document.getElementById('showButton')) {
      rules.style.display = 'none';
    }
  });
});



//Selecting the lucky Number
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.luckyButtons button');

  buttons.forEach(button => {
      button.addEventListener('click', luckyNumberSelected);
  });
});

function luckyNumberSelected(event) {
  console.log("Button clicked: ", event.target.textContent);//This is for debugging purposes
  const buttonNumber = event.target.textContent;
  removeButtons(buttonNumber);
}


function removeButtons(buttonNumber) {
  luckyNumber = parseInt(buttonNumber);
  console.log("Lucky number: ", luckyNumber);//This is for debugging purposes
  const buttons = document.querySelectorAll('.luckyButtons button');
  upperText.innerHTML = "Your number is:"

  buttons.forEach(button => {
    button.removeEventListener('click', luckyNumberSelected);
        console.log("event listener removed for button: ", button.textContent);//This is for debugging purposes
  });


  buttons.forEach(button => {
    if (button.textContent !== buttonNumber) {
        console.log("Removing visual for button: ", button.textContent);//This is for debugging purposes
        button.classList.add('invisibleNumber');
    }
  

  });

  introduceDice (luckyNumber)
}


//Shows the dice for the first time
function introduceDice (luckyNumber) {
  console.log("Displaying dice, awaiting click on dice");//This is for debugging purposes
  let diceSection = document.querySelector('section')
  let rollButton = document.querySelector('section a')

  diceSection.classList.add('diceSectionShow')
  diceSection.classList.remove('diceSectionHide')

  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6);

  rollButton.addEventListener('click', function (){
    diceGUI(rollOne, rollTwo)
    rollDice(luckyNumber);
  })
}


//Updating the visuals of the dice
function diceGUI(rollOne, rollTwo) {
  console.log("Updating dice visuals");//This is for debugging purposes
  let diceImageArray = [
    document.getElementById('d1'), 
    document.getElementById('d2')
  ];

  diceImageArray[0].setAttribute('src','img/dice-' + rollOne + '.svg');
  diceImageArray[1].setAttribute('src', 'img/dice-' + rollTwo + '.svg');
}

//Rolling the dice
function rollDice(luckyNumber) {
  console.log("Rolling the dice!");//This is for debugging purposes
  const diceButton = document.querySelector('section a');
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6);

  if (rollOne + rollTwo !== luckyNumber) {
    totalScore.push(rollOne + rollTwo);
    let currentScore = totalScore.reduce((acc, cur) => acc + cur, 0);
    bottomText.innerHTML = 'Current score: ' + currentScore
  } else {
    gameOver(luckyNumber)
  }

  diceGUI(rollOne, rollTwo)
};


//When the user loses the game.
function gameOver(luckyNumber) {
  console.log("Game over!");//This is for debugging purposes
  finalScore = totalScore.reduce((acc, cur) => acc + cur, 0);
  const numberButton = document.querySelector('main button');

  upperText.innerHTML = 'Game Over!'
  middleText.innerHTML = 'Click your number to pick a new number.<br>Or click the dice to keep rolling.'
  bottomText.innerHTML = "Final score: " + finalScore;

  totalScore = [];

  numberButton.addEventListener('click', GUIChangeNumber);
};



//User want to change number
function GUIChangeNumber() {
  console.log("User wants to change number");//This is for debugging purposes
  upperText.innerHTML = 'Pick a number!'
  middleText.innerHTML = 'Click your number to pick a new number.<br>Or click the dice to keep rolling.'
  bottomText.innerHTML = "Current score: 0";

  const number6 = document.getElementById('number6')
  const number7 = document.getElementById('number7')
  const number8 = document.getElementById('number8')
  const number9 = document.getElementById('number9')

  number6.classList.remove('invisibleNumber');
  number7.classList.remove('invisibleNumber');
  number8.classList.remove('invisibleNumber');
  number9.classList.remove('invisibleNumber');

  number6.addEventListener('click', luckyNumberSelected);
  number7.addEventListener('click', luckyNumberSelected);
  number8.addEventListener('click', luckyNumberSelected);
  number9.addEventListener('click', luckyNumberSelected);

//WHERE I LEFT OFF
//PROBLEM: THIS FUNCTION WONT RUN WHEN I CLICKY THE DICY
}





















//Play the game in the console!
let lazyButton = document.querySelector('.lazyButton')
const yearsLeftToLive = 

function enableConsoleMode () {
  const consoleButton = document.getElementById('consoleButton');
  consoleButton.classList.add('lazyButton');
  consoleButton.classList.remove('invisibleButton');
  lazyButton.addEventListener('click', function () {
    evilPath();
    lazyButton.classList.remove('lazyButton');
    lazyButton.classList.add('evilButton');
    lazyButton.removeEventListener('click', arguments.callee);
    lazyButton.addEventListener('click', evilPathContinue);
  })
}


function evilPath () {
  let luckyNumber = Math.floor(Math.random() * 4) + 6;
  console.log('"\x1b[3m\ Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour."')
  console.log(`You open your eyes and find yourself in a dimly lit and cold room.
"How did I get here?"
The air is heavy and difficult to breathe.
You turn around and gaze down upon an old wooden table probbably hundreds if not thousands of years old!.
As you approach it you notice a neatly stacked pair of dice. Polished and brand new.
As you pick them up a voice echoes from within..
\x1b[31m"YOUR LUCKY NUMBER... IS ` + luckyNumber + `"` + `
\x1b[0mThere is something sinister about this. You shouldn't be in here, you feel it in your gut!
You should have never pressed that devilsome button to begin with! It even told you so itself!
Lucky number? What does it mean? Do i find out? How do I leave? I want to leave!
But the urge washes over you and before you know it;`);
  rollEvilDice(luckyNumber);
}

function evilPathContinue () {
  let luckyNumber = Math.floor(Math.random() * 4) + 6;
  console.log(`You pick up the dice again. They feel heavier this time..
\x1b[31m"BACK FOR MORE?
WELL THEN! YOUR LUCKY NUMBER IS ` + luckyNumber + `"`);
  rollEvilDice(luckyNumber)
}

function rollEvilDice(luckyNumber) {
  let rollOne = Math.ceil(Math.random() * 6);
  let rollTwo = Math.ceil(Math.random() * 6);
  if (rollOne + rollTwo !== luckyNumber) {
    console.log('You roll a ' + rollOne +' and a ' + rollTwo + '.');
    totalScore.push(rollOne + rollTwo);
    rollEvilDice(luckyNumber);
  } else {
    console.log(`You pick up the dice and begin to shake them in your hand.
But just as you are about to let go they escape your grasp.
They roll themselves onto the table and show the numbers ` + rollOne +' and ' + rollTwo + '.');
    finalRoll()
  }
}

function finalRoll() {
  if (totalScore.reduce((acc, cur) => acc + cur, 0) > 99) {
    goodEnding()
  } else {
    badEnding()
  }
}

function badEnding() {
  finalScore = totalScore.reduce((acc, cur) => acc + cur, 0);
  console.log(`A sinister voice shrieks through your skull:
\x1b[31m"` + finalScore + `?! YOU TRULY ARE PATHETIC!"
\x1b[0mAs you realize you've lost the game, your body feels.. lighter.
Your total score was: ` + finalScore);
  totalScore = [0];
}

function goodEnding() {
  finalScore = totalScore.reduce((acc, cur) => acc + cur, 0);
  console.log(`Suddenly a divine voice echoes from above:
\x1b[33m"Sorry for chiming in. I can see that you're definetly on a "roll" heh..
I've gone and removed that pesky little button for you. You shouldn't be clicking random things on the internet you know!
Anyways, you're welcome. See you in another \x1b[36m` + yearsLeftToLive + `\x1b[33m years!
\x1b[0mYour total score was: ` + finalScore)
  totalScore = [0];
  lazyButton.remove();
}