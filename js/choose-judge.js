
const changeOnHover = () => {
    width = 200;
    height = 200;
};

//document.getElementsByClassName("playerButton").addEventListener("hover", changeOnHover);

//document.getElementsByClassName("playerButton").addEventListener("click", setJudge);

//set player1 to player1's username
let player1Username = localStorage.getItem("loggedUsers[0]");

const changeToPlayerUsername = (player, playerIndex) => {
    let playerUsername = JSON.parse(localStorage.getItem("loggedUsers"))[playerIndex]?.username
    document.getElementById(player).innerHTML = playerUsername; 
}

changeToPlayerUsername("player1", 0);
changeToPlayerUsername("player2", 1);
changeToPlayerUsername("player3", 2);

const makeJudge = event => {
    console.log(event.target);
    
}

console.log('getElementsByClassName: ', document.getElementsByClassName("playerButton"));
// document.getElementsByClassName("playerButton").forEach(element => {
//     element.addEventListener("click", makeJudge);
// });

const playerElements = document.getElementsByClassName("playerButton")
for(let i = 0; i < playerElements.length; i++) {
    playerElements[i].addEventListener("click", makeJudge);
}



