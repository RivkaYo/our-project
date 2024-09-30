import { memes } from './photos';

console.log("hi boaz");

console.log ("memesList = ", memes);
const chooseMeme = () => {
    //import memes from photos.js
    let randomMeme = memes[Math.floor(Math.random * 9)];
};

let meme = document.getElementById('meme');

chooseMeme();

//players as list of odjects
let players = [
    player1 = {name: document.getElementById("demo").innerHTML=loggeduser.username,
    score: 0,
    isJudge: false
    },
    player2 = {name: document.getElementById("demo").innerHTML=loggeduser.username,
    score: 0,
    isJudge: false
    },
    player3 = {name: document.getElementById("demo").innerHTML=loggeduser.username,
    score: 0,
    isJudge: false
    },
];

//need to set img crs at player.html to chooseMeme
Img.src = chooseMeme();

//save player1's answer (value) to a vareable.


document.getElementsByTagName(submit).addEventListener("click", addAnswer);

const addAnswer = function() {
    let player1Answer = document.getElementById("playerAnswer").value;
    console.log(player1Answer);
}