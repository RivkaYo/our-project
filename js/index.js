localStorage.clear(); 
if(!localStorage.getItem("users"))
  localStorage.setItem("users",JSON.stringify([]))

  let registerForm={username:"",password:""}

  function handleRegisterChange(){
     registerForm={username:document.getElementById("register-username").value,password:document.getElementById("register-password").value}
  }

  function onRegisterSubmit(){
    let users=JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users",JSON.stringify([...users,registerForm]))
  }

  let signForm={username:"",password:""}

  function handleSignChange(){
  signForm={username:document.getElementById("username").value,password:document.getElementById("password").value}
  }

  function onSignSubmit(){
    let users=JSON.parse(localStorage.getItem("users"))
    let loggeduser=users.find(check);
    let loggeduserindex = users.findIndex(check);
    console.log(loggeduser);
    if (users.find(check)) {
      console.log("yes");
      document.getElementById("demo").innerHTML=users.username[loggeduserindex];
      console.log(loggeduserindex);
    }

  }

function check(user) {
  return user.username===signForm.username && signForm.password===user.password ;
}
  /*function readUsername() {
    
    var x = localStorage.getItem("username");
    document.getElementById("demo").innerHTML = x;
  } */

//let p = document.getElementById("RegisterSubmit").addEventListener("click", readUsername);
//.innerHTML
