// import { memes } from './photos';

console.log("hi boaz");

console.log ("memesList = ", memes);
const chooseMeme = () => {
    //import memes from photos.js
    let randomMeme = memes[Math.floor(Math.random * 9)];
};

let meme = document.getElementById('meme');

// chooseMeme();
let users=JSON.parse(localStorage.getItem("users"))

//players as list of odjects
let players = [
    player1 = {name: "",
        password: "",
        score: 0,
        isJudge: false
    },
    player2 = {name: document.getElementById("demo").innerHTML=loggeduser.username,
        password: "",
        score: 0,
        isJudge: false
    },
    player3 = {name: document.getElementById("demo").innerHTML=loggeduser.username,
        password: "",
        score: 0,
        isJudge: false
    }
];

//need to set img crs at player.html to chooseMeme
// document["meme"].src = chooseMeme();

//save player1's answer (value) to a vareable.


const addAnswer = function() {
    // let player1Answer = document.getElementById("playerAnswer").value;
    console.log(player1Answer);
}
document.getElementsByTagName("submit")[0].addEventListener("click", addAnswer);
