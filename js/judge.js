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

let scorenumplayer1 = 0;
let scorenumplayer2 = 0;

function score({target}) {
    if(target.id.includes("player1")){
        scorenumplayer1++
        player1Score.innerHTML= "Score: " + scorenumplayer1;
    }
    if(target.id.includes("player2")){
        scorenumplayer2++
        player2Score.innerHTML= "Score: " + scorenumplayer2;
    }
}

//score.update();

