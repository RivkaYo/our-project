const changeOnHover = () => {
    width = 200;
    height = 200;
};

//set player to player's username
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
    let playerIndex;
    if (playerNum === "player1") {
        playerIndex = 0;
    } else if (playerNum === "player2") {
        playerIndex = 1;

    } else if (playerNum === "player3") {
        playerIndex = 2;  
    }

    players[playerIndex].isJudge = true;
    
    document.getElementById("afterChooseText").style.display="block";

    localStorage.setItem("loggedUsers", JSON.stringify(players));
}

document.getElementById("player1").addEventListener('click', makeJudge);
document.getElementById("player2").addEventListener('click', makeJudge);
document.getElementById("player3").addEventListener('click', makeJudge);

