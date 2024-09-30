const chooseMeme = () => {
    //import memes from photos.js
    let randomMeme = memes[Math.floor(Math.random * 9)];
};

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


//need to set img crs at player.html to chooseMeme
// document["meme"].src = chooseMeme();

//save player1's answer (value) to a vareable.


const addAnswer = function() {
    // let player1Answer = document.getElementById("playerAnswer").value;
}
document.getElementsByTagName("submit")[0].addEventListener("click", addAnswer);
