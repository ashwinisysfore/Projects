function clearForm(){
    document.querySelector('#form-box').reset();
}

const form = document.querySelector("#form-box").addEventListener("submit",(e)=>{e.preventDefault()})
function mydisplay(){
    console.log(
        "Hello"
    )
    const Firstname=document.getElementById("fname").value;
    const Middlename=document.getElementById("mname").value;
    const Lastname=document.getElementById("lname").value;
    const DOB=document.getElementById("dob").value;
    const Email=document.getElementById("mail").value;
    const Phone=document.getElementById("phone").value;
    const Gender=document.getElementById("gen").value;
    const BloodGroup=document.getElementById("bg").value;
    const Comments=document.getElementById("comm").value;


    sessionStorage.setItem("FirstName",Firstname);
    sessionStorage.setItem("MiddleName",Middlename);
    sessionStorage.setItem("LastName",Lastname);
    sessionStorage.setItem("Date of Birth",DOB);
    sessionStorage.setItem("Email",Email);
    sessionStorage.setItem("Phone",Phone);
    sessionStorage.setItem("Gender",Gender);
    sessionStorage.setItem("BloodGroup",BloodGroup);
    sessionStorage.setItem("Comments",Comments);
    window.location.href="detail.html"
    return;
};
