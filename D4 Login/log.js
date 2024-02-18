const container=document.getElementById("logid");
const userlabel=document.createElement("label");
const userinput=document.createElement("input");
userinput.setAttribute("placeholder","yyy@xx.com");
userlabel.innerHTML="Username";
container.appendChild(userlabel);
container.appendChild(userinput);

const pswdlable=document.createElement("label");
const pswdinput=document.createElement("input");
pswdinput.setAttribute("placeholder","*************");
pswdinput.setAttribute("type","password");
pswdlable.innerHTML="Password";
container.appendChild(pswdlable);
container.appendChild(pswdinput);

const btn=document.createElement("button");
btn.innerHTML="Login";
container.appendChild(btn);

btn.addEventListener("click",show);
function show(){
    let password=pswdinput.value;
    let username=userinput.value;

    var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var passfo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(username.match(mailformat) && password.match(passfo)){
        console.log("Validate")
    }
    else{
        alert("Invalid")
        return false;
    }
    alert("username " +username+"\n"+"password "+password);
}