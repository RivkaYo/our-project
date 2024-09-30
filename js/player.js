//localStorage.clear();
/*
let meme = document.getElementById('meme');

//chooseMeme();
let users=JSON.parse(localStorage.getItem("users"))

const jsonUsers = localStorage.getItem("users");

const parseUsers = JSON.parse(jsonUsers);

const currentUserName  = parseUsers[0].username;


const players = [
    {name: JSON.parse(localStorage.getItem("users"[0])),
        score: 0,
        isJudge: false,
        currentAnswer: ""
    },
    {name: JSON.parse(localStorage.getItem("users"[1])),
        score: 0,
        isJudge: false,
        currentAnswer: ""
    },
    {name: JSON.parse(localStorage.getItem("users"[2])),
        score: 0,
        isJudge: false,
        currentAnswer: ""
    }
];
*/



//save player1's answer (value) to a vareable.

let playerAnswer = {}
const addAnswer = function () {
    // let player1Answer = document.getElementById("playerAnswer").value;
}
//document.getElementsByTagName("submit")[0].addEventListener("click", addAnswer);

if (!localStorage.getItem("answer"))
    localStorage.setItem("answer", JSON.stringify([]))

//let playerAnswer={player"1",answer:"2"}
function handleInputPlayer() {
    playerAnswer = { player: "1", answer: document.getElementById("playerAnswer").value }
    console.log(playerAnswer.answer);
}

function onInputPlayerSubmit() {
    let answers = JSON.parse(localStorage.getItem("answer")) || []
    let newAnswers = [...answers, playerAnswer]
    localStorage.setItem("answer", JSON.stringify(newAnswers))
    let element = document.getElementById("imageContainer");
    console.log('element: ', element);
    console.log(answers.length)

    if (answers.length%2 == 0) {
        element.classList.remove("backgroundcolorRed");
        element.classList.add("backgroundcolorBlue");
        console.log("bb")
        location.href="judge.html"
    }
    else {
        element.classList.remove("backgroundcolorBlue");
        element.classList.add("backgroundcolorRed");
        console.log("red")
    }
  
   /* if (answers.length%2 === 0 || answers.length !== 0){
        
        
          
    }*/
    
}


//אם היטוזרניימ הוא אותו יוזרניימ אז תכניס את התשובה לתוך המערך יוזרס הגדול