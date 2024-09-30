
/*
let meme = document.getElementById('meme');

//chooseMeme();
let users=JSON.parse(localStorage.getItem("users"))

const jsonUsers = localStorage.getItem("users");

const parseUsers = JSON.parse(jsonUsers);

const currentUserName  = parseUsers[0].username;
*/

if (answer.length = 1){
    function addClassBackgroundcolor() {
        var element = document.getElementById("imageContainer");
        element.classList.add("backgroundcolorRed");
    }
    console.log(answer.length);
}



//save player1's answer (value) to a vareable.


const addAnswer = function () {
    // let player1Answer = document.getElementById("playerAnswer").value;
}
//document.getElementsByTagName("submit")[0].addEventListener("click", addAnswer);

if (!localStorage.getItem("answer"))
    localStorage.setItem("answer", JSON.stringify([]))

//let playerAnswer={player"1",answer:"2"}
let playerAnswers = {};
function handleInputPlayer() {
    let playerAnswer = { player: "1", answer: document.getElementById("playerAnswer").value }
    console.log(playerAnswer.answer);
    localStorage.setItem("answer", JSON.stringify(playerAnswer))
}

function onInputPlayerSubmit() {
    let answer = JSON.parse(localStorage.getItem("answer"))
    localStorage.setItem("answer", JSON.stringify([...answer, playerAnswer]))
}

//אם היטוזרניימ הוא אותו יוזרניימ אז תכניס את התשובה לתוך המערך יוזרס הגדול