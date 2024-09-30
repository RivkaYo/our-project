localStorage.clear();

if(!localStorage.getItem("users"))
  localStorage.setItem("users",JSON.stringify([]))

console.log(memes)

  let registerForm={username:"",password:""}

  function handleRegisterChange(){
     registerForm={username:document.getElementById("register-username").value,password:document.getElementById("register-password").value}
  }

  function onRegisterSubmit(){
    let users=JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users",JSON.stringify([...users,registerForm]))
  }

  let logForm={username:"",password:""}

  function handleLogChange(){
  logForm={username:document.getElementById("username").value,password:document.getElementById("password").value}
  }

  function onLogSubmit(){
    let users=JSON.parse(localStorage.getItem("users"))
    let loggeduser=users.find(check);
    for(let j=0;j<users.length;j++) {
      if (users.find(check)) {
        document.getElementById("demo").innerHTML+=loggeduser.username;
      }
    }
  }

function check(user) {
  return user.username===logForm.username && logForm.password===user.password ;
}

  /*function readUsername() {
    
    var x = localStorage.getItem("username");
    document.getElementById("demo").innerHTML = x;
  } */

//let p = document.getElementById("RegisterSubmit").addEventListener("click", readUsername);
//.innerHTML
