    // let one = 1;
        // let two = "2";
        // alert(typeof two === "string");
        // let welcomeMessage = "Wellcome ";
        // let name = "Maros";
        // alert(welcomeMessage + name);
        // confirm ("Really?");
        // let newName = prompt("What name?")
        // alert (newName)
        // let mySalary = 55000;
        // if (mySalary < 5000) {
        //     alert("buy TV");
        // } else if (mySalary > 5000 && mySalary < 50000) {
        //     alert ("Buy Car");
        // } else {
        //     alert("buy House");
        // }
        // let safeModeIsOn = false;

        // if (!safeModeIsOn) {
        //     alert("not safe");
        // }
        // console.log("Console Log");

        // let playerName;
        // let playerAge;
        // alert("Hello warrior!")
        // playerAge = prompt("How old are you, warrior?")
        // if (playerAge > 18) {
        //     playerInput = prompt("What is your name ?");
        //     console.log(playerInput);
        // } else {
        //     alert("Sorry warrior, you are too young for this adventure!");
        // }

        // let lumber = 0;
        // let brick = 0;
        // let wool = 0;
        // let grain = 0;
        // let ore = 0;
        // let name;
        // let color;
        // let round = 1;
        // let victoryPoints =5;
        // let roads = 4;
        // let cityTokens = 15;

        // //let isGameOver;

        // name = prompt("What is your name?");
        // color = prompt("What is your color?");
        // if (victoryPoints > 9) {
        //     alert("Game is over");
        // } else {
        //     alert("Game is not over yet");
        // }
        // console.log ("lumber = " + lumber + ", brick = " + brick + ", wool = " + wool + 
        // ", grain = " + grain + ", ore = " + ore + ", name = " + name + ", color = " + color + 
        // ", round = " + round + ", victory points = " + victoryPoints + ", roads = " + roads +
        // ", city tokens = " + cityTokens);

        // console.log (`
        // -----------------
        // Special Log:
        // Name: ${name}
        // Color: ${color}
        // ----------------
        // `
        // );

        // let number = 0;
        // while (number < 1000) {
        //     console.log(number);
        //     number ++;
        // }

        // for (let i = 0; i < 1000; i++) {
        //     console.log(i);
        //     i ++;
        //     if (i % 3 === 0) {
        //         console.log("LOGGING");  
        //     }          
        // } 
        // let string = "";
        // for (let i = 0; i < 100; i++) {
        //     string = string + "#"
        //     console.log(string);
        //     i ++;      
        // } 

        // Each player has five resources: lumber, brick, wool and ore. Zero to start with.
let playerResources_lumber = 0;
let playerResources_brick = 0;
let playerResources_wool = 0;
let playerResources_ore = 0;
// Each player belongs needs a name and pick a colour (red, yellow, white, black, green, purple?).
let playerColour = "red";
let currentPlayer = "red";

// We need to store information about which round it is now, how many victory point player has (0 - 10), and when game is over (player reaches 10 victory points).

let currentRound = 1;

// Each player has 4 city tokens and 15 roads

let playerTokens_city = 4;
let playerTokens_settlement = 8;
let playerTokens_road = 15;

let playerVictoryPoints = 2;

console.log(`
-----------------
Round: ${currentRound}
Current Player: ${currentPlayer}
You have: ${playerResources_lumber} x lumber, ${playerResources_brick} x brick, ${playerResources_wool} x wool, ${playerResources_ore} x ore
Your tokens: ${playerTokens_city} x city(s) ${playerTokens_settlement} x settlements and ${playerTokens_road} x road(s)
Victory points: ${playerVictoryPoints}
`);



let pets = ['dog', 'cat'];

// getDicesRoll();

//Simulates 2 Dice Rolls, result between 2 - 12
// function getDicesRoll() {

//     //1. dice
//     let firstDiceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
//     console.log("First Dice Roll: " + firstDiceRoll);
 
//     //2. dice
//     let secondDiceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
//     console.log("Second Dice Roll: " + secondDiceRoll);
 
//     return firstDiceRoll + secondDiceRoll;
 
//  }

// function getDicesRoll() {

//     //1. dice
//     let firstDiceRoll = Math.floor(Math.random()*6 ) + 1;
//     console.log("First Dice Roll: " + firstDiceRoll);
 
//     //2. dice
//     let secondDiceRoll = Math.floor(Math.random()*6 ) + 1;
//     console.log("Second Dice Roll: " + secondDiceRoll);
 
//     return firstDiceRoll + secondDiceRoll;
 
//  }

 let myArray = ["a", "b", "c", "d" ];
 myArray.push("d");
 myArray.pop();
 myArray.slice(1,2);
 myArray.indexOf("a");
 for (let i = 0; i < myArray.length; i++) {
     console.log(myArray[i]);
 }
// //object
//  let player = {
//     name:"John", 
//     surname:"Green",
//     color:"red",
//     resources: {
//         ore: 0,
//         wool: 0
//     }
// };
// console.log(player);
// console.log(player["name"]);
// console.log(player.resources.wool);

// let jsonArray = [
//     '{{repeat(5, 7)}}',
//     {
//       _id: '{{objectId()}}',
//       isActive: '{{bool()}}',
//       balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
//       age: '{{integer(20, 40)}}',
//       eyeColor: '{{random("blue", "brown", "green")}}',
//       name: '{{firstName()}} {{surname()}}',
//       gender: '{{gender()}}',
//       company: '{{company().toUpperCase()}}',
//       email: '{{email()}}',
//       phone: '+1 {{phone()}}',
//       friends: [
//         '{{repeat(3)}}',
//         {
//           id: '{{index()}}',
//           name: '{{firstName()}} {{surname()}}'
//         }
//       ],
//       favoriteFruit: function (tags) {
//         var fruits = ['apple', 'banana', 'strawberry'];
//         return fruits[tags.integer(0, fruits.length - 1)];
//       }
//     }
//   ];


//Fibonaci 1, 1,2,,3, 5, 8

// let sum = 0;
// for (i = 1; i < 101; i = i+sum) {
//   sum = sum + i
//   console.log( i )
//   console.log(sum)
// }

// for (i = 1; i < 1001; i++) {
//   if (i%3 == 0 && i%5!== 0) {
//     console.log("Fizz = number " + i + " is divisible  by 3 and not by 5");
//   } else if (i%5 == 0 && i%3!== 0) {
//     console.log("Buzz = number " + i + " is divisible  by 5 and not by 3");
//   } else if (i%3 == 0 && i%5 == 0) {
//     console.log("FizzBuzz = number " + i + " is divisible  by 5 and 3");
//   } else {
//     console.log("Nothing = number " + i + " is not divisible  by 5 nor 3");
//   }
// }

console.log(sum(2,2));

function sum (number1, number2) {
  return number1 - number2;
}

function sum (number1, number2, number3) {
  return number1 + number2+ number3;
}

function sum (number1, number2) {
  return number1 + number2;
}

function multiply (num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}

multiply("aa","bb");












 