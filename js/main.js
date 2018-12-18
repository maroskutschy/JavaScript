console.log('It works')

let letsPlayElement = document.querySelector('.btn-success');
let setupSection = document.getElementById("setup");
let introductionSection = document.getElementById("introduction");
let playerName = document.getElementById('playerName');
let playerColor = document.getElementById('colour');
let addButton = document.getElementById('addPlayer');
let arrayOfPlayers = [];
// let startButton = document.querySelector('section#setup .btn-success');
let startButton = document.getElementById('startButton');
let playerTable = document.getElementById('table');
let playerID = 0;

letsPlayElement.addEventListener ('click', function() {
    setupSection.classList.remove('hidden');
    introductionSection.classList.add('hidden');
    introductionSection.value = 'test'

    }
) 

class Player {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}



addButton.addEventListener('click', function() {
    let isPlayerNameValid = true;;
    let isNumberOfPlayersValid = true;;
    let name = playerName.value;
    let color = playerColor.value;
    
    

    if (playerName.value.length < 4) {
        alert('Player name must have more than 3 characters!');
        isPlayerNameValid = false;
    }
    if (arrayOfPlayers.length > 3) {
        alert('There cannot be more than 4 players!');
        isNumberOfPlayersValid = false;
    }
    if (isPlayerNameValid && isNumberOfPlayersValid) {
        playerID = playerID + 1;
        let player = new Player (playerID, name, color);
        arrayOfPlayers.push(player);
        console.log('name is: ' + player.name);
        console.log('color is: ' + player.color);
        playerTable.innerHTML += `
        <tr id="${player.id}">
          <th scope="row">${player.id}</th>
          <td>${arrayOfPlayers[arrayOfPlayers.length-1].color}</td>
          <td>${arrayOfPlayers[arrayOfPlayers.length-1].name}</td>
          <td><a href="#" class="removeItem">X</a></td>
        </tr>
`;

    }
    console.log('number of players:' + arrayOfPlayers.length);
    if (arrayOfPlayers.length === 4) {
        startButton.classList.remove('disabled');
    }

    }
)








