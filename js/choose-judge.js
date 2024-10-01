
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
    let playerNum = event.target.id;
    //doesn't update is judge in local storage
    let players = JSON.parse(localStorage.getItem("loggedUsers"));
    if (playerNum === "player1") {
        players[0].isJudge = true;
    } else if (playerNum === "player2") {
        players[1].isJudge = true;
    } else if (playerNum === "player3") {
        players[2].isJudge = true;
    }
    localStorage.setItem("loggedUsers", JSON.stringify(players));
}

document.getElementById("player1").addEventListener('click', makeJudge);
document.getElementById("player2").addEventListener('click', makeJudge);
document.getElementById("player3").addEventListener('click', makeJudge);

