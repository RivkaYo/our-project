let player1Score=document.getElementById("player1-score")
let player2Score=document.getElementById("player2-score")

function updateScore() {

    //let randomAnswer = 0;
    let radioAnswer = JSON.parse(localStorage.getItem("answer"))

    console.log(radioAnswer[0].answer);
    console.log(radioAnswer[1].answer);

    let player1Aanswer = radioAnswer[0].answer;
    let player2Aanswer = radioAnswer[1].answer;

    let player1RadioAnswer=document.getElementById("player1-radioAnswer")
    player1RadioAnswer.innerHTML = player1Aanswer;

    let player2RadioAnswer=document.getElementById("player2-radioAnswer")
    player2RadioAnswer.innerHTML = player2Aanswer;
    localStorage.setItem("answer", "")
} 
updateScore();




function showImg() {
    let ImgSrc = localStorage.getItem("imgSrc")
    const container = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = ImgSrc;
    console.log("src", ImgSrc);
    console.log("img2", img);
    container.appendChild(img);
    return img;
}
showImg()

function dissappearImg() {
    let pic = document.getElementsByClassName("imgRandomDissappear")[0];
    console.log("dissappear", pic.classList);
    pic.classList.add("dissappear");
    

}
dissappearImg()


if (!localStorage.getItem("score"))
    localStorage.setItem("score", JSON.stringify([]))


let scorenumplayer1 = JSON.parse(localStorage.getItem())[0].score;
let scorenumplayer2 = JSON.parse(localStorage.getItem())[1].score;
//let score = JSON.parse(localStorage.getItem("score"))


function score({target}) {
    if(target.id.includes("player1")){
        scorenumplayer1++
        player1Score.innerHTML= "Score: " + scorenumplayer1;
        localStorage.setItem("Score",JSON.stringify(scorenumplayer1))
    }
    if(target.id.includes("player2")){
        scorenumplayer2++
        player2Score.innerHTML= "Score: " + scorenumplayer2;
    }
}



//function handleScorePlayer() {
   // playerScore = { player: "1", score: document.getElementById("playerScore").value }
    //console.log(playerScore.score);
//}
/*
function handleRegisterChange() {
    registerForm = {
      username: document.getElementById("register-username").value,
      password: document.getElementById("register-password").value
    }
  }
  
  //add sign up info to local storage
  function onRegisterSubmit() {
    let users = JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([...users, registerForm]))
  }*/