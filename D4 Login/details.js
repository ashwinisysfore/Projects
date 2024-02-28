window.addEventListener('load',()=>{
    const firstname=sessionStorage.getItem('FirstName');
    const middlename=sessionStorage.getItem('MiddleName');
    const lastename=sessionStorage.getItem('LastName');
    const  dob=sessionStorage.getItem('Date of Birth');
    const email=sessionStorage.getItem('Email');
    const phone=sessionStorage.getItem('Phone');
    const gender=sessionStorage.getItem('Gender');
    const bloodgroup=sessionStorage.getItem('BloodGroup');
    const comments=sessionStorage.getItem('Comments');

    document.getElementById('fname').innerHTML=firstname;
    document.getElementById('mname').innerHTML=middlename;
    document.getElementById('lname').innerHTML=lastename;
    document.getElementById('dob').innerHTML=dob;
    document.getElementById('mail').innerHTML=email;
    document.getElementById('phone').innerHTML=phone;
    document.getElementById('gen').innerHTML=gender;
    document.getElementById('blood').innerHTML=bloodgroup;
    document.getElementById('comm').innerHTML=comments ;
});