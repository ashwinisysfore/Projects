
const dataEntry = document.querySelector("#de");

        //labels js variable
        const userLabel = document.createElement("label");
        const passLabel = document.createElement("label");

        //input js variable
        const inputUser = document.createElement("input");
        const inputPass = document.createElement("input");
        
        //username label
        userLabel.innerHTML="Username";
        dataEntry.appendChild(userLabel);
        //input user
        dataEntry.appendChild(inputUser);
        inputUser.setAttribute("type", "email");
        inputUser.setAttribute("placeholder", "Enter your email");

        //password label
        passLabel.innerHTML="Password";
        dataEntry.appendChild(passLabel);
        //input password
        dataEntry.appendChild(inputPass);
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("placeholder", "Enter your password");

        let name = inputUser.value;
        let pass = inputPass.value;

        const loginButton = document.createElement("button");

        const database = {
            email:"ashwini@gmail.com",
            pass:"123456789",
        }

        loginButton.innerHTML ="Login to your account";
        dataEntry.appendChild(loginButton);
        loginButton.setAttribute("type", "submit")
        loginButton.setAttribute("class", "btn");
        function displayUserName(event){
            console.log(inputUser.value)

            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!inputUser.value.match(mailformat))
            {
              alert("it is a not valid email address")
              return false
            }

           else if(inputPass.value.length<=4 || inputPass.value===null || inputPass.value==="")
            {
             alert("please enter strong password")
             console.log(inputPass.value)
             return false
            } 
            else{ 
                alert('login successful')
                console.log("Hello")
                event.preventDefault()
                window.location.href="profile.html";
                
            // alert(username)
            // localStorage.getItem('username',username);

            
            // return;
            
            /*document.querySelector('#form').setAttribute('action','');*/
        }
         }
        loginButton.addEventListener("click",displayUserName);