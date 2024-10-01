localStorage.clear();

//set up users
if (!localStorage.getItem("users"))
  localStorage.setItem("users", JSON.stringify([]))

//let registerForm = {username:"",password:""};


//Sign up
//collect info
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
}


//log in

//set up looged users
if (!localStorage.getItem("loggedUsers"))
  localStorage.setItem("loggedUsers", JSON.stringify([]))

//collect login info
let logForm = {};
function handleLogChange() {
  logForm = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    isJudge: false,
    score: 0,
    answer: "",
    isWinner: false
  }
  return logForm;
}

//add current user info to local storage
function onLogSubmit() {
  let users = JSON.parse(localStorage.getItem("users"))
  let loggeduser = users.find(user=>checkUsernamePasswordMatch(user));
    // for (let j = 0; j < users.length; j++) {
    if (users.find(user=>checkUsernamePasswordMatch(user))) {

      document.getElementById("aside").innerHTML += "<br>" + loggeduser.username;
      
      const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"));
      // console.log('loggedUsers: ', loggedUsers[0].username);
      loggedUsers.push(logForm);
      localStorage.setItem("loggedUsers", JSON.stringify(loggedUsers));
    }
  // }
}

function checkUsernamePasswordMatch(user) {
  return user.username === logForm.username && logForm.password === user.password;
}






































//  users = [{email: ~~, password: ~~}, {}]


//  for every object in users does logiined.email exist ?
//  if yes, object.password === looggedinned.passrowd ? LOGIN : WRONG PASSWORD