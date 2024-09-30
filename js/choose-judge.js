
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
    let playerNum = event.target.id;
    if (playerNum === "player1") {
        let player = JSON.parse(localStorage.getItem("loggedUsers"))[0];
        player.isJudge = true;
        console.log(player);
    } else if (playerNum === "player2") {
        let player = JSON.parse(localStorage.getItem("loggedUsers"))[1];
        player.isJudge = true;
        console.log(player);
    } else if (playerNum === "player3") {
        let player = JSON.parse(localStorage.getItem("loggedUsers"))[2];
        player.isJudge = true;
        console.log(player);
    }
}

//console.log('getElementsByClassName: ', document.getElementsByClassName("playerButton"));
//document.getElementsByClassName("playerButton").forEach(element => {
//     element.addEventListener("click", makeJudge);
// });

//const playerElements = document.getElementsByClassName("playerButton")
//for(let i = 0; i < playerElements.length; i++) {
//    playerElements[i].addEventListener("click", makeJudge);
//}

document.getElementById("player1").addEventListener('click', makeJudge);
document.getElementById("player2").addEventListener('click', makeJudge);
document.getElementById("player3").addEventListener('click', makeJudge);

