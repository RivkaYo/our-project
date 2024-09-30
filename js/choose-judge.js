
const changeOnHover = () => {
    width = 200;
    height = 200;
};

document.getElementsByClassName("playerButton").addEventListener("hover", changeOnHover);

document.getElementsByClassName("playerButton").addEventListener("click", setJudge);

//set player1 to player1's username
var player1Username = localStorage.getItem("loggedUsers[0]");
document.getElementsByClassName("player1").innerHTML(player1Username);


