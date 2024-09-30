localStorage.clear();

if(!localStorage.getItem("users"))
  localStorage.setItem("users",JSON.stringify([]))

let registerForm = {username:"",password:""};

function handleRegisterChange(){
  registerForm={username:document.getElementById("register-username").value,password:document.getElementById("register-password").value}
}

function onRegisterSubmit(){
  let users=JSON.parse(localStorage.getItem("users"))
  localStorage.setItem("users",JSON.stringify([...users,registerForm]))
}

let logForm = {};
function handleLogChange(){
  logForm = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    isJudge: false,
    score: 0
  }
  console.log(logForm);
}

function onLogSubmit(){
  let users=JSON.parse(localStorage.getItem("users"))
  let loggeduser=users.find(check);
  for(let j=0;j<users.length;j++) {
    if (users.find(check)) {
      document.getElementById("demo").innerHTML+=loggeduser.username;
    }
  }
  console.log(handleLogChange());
}

function check(user) {
  return user.username===logForm.username && logForm.password===user.password ;
}






































//  users = [{email: ~~, password: ~~}, {}]


//  for every object in users does logiined.email exist ?
//  if yes, object.password === looggedinned.passrowd ? LOGIN : WRONG PASSWORD