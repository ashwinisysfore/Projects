const queryString=window.location.search;
const urlParams= new URLSearchParams(queryString);

document.getElementById('First Name').textContent=urlParams.get('First Name');
document.getElementById('Last Name').textContent=urlParams.get('Last Name');
document.getElementById('Middle Name').textContent=urlParams.get('Middle Name');
document.getElementById('DOB').textContent=urlParams.get('DOB');
document.getElementById('Email').textContent=urlParams.get('Email');
document.getElementById('Phone No').textContent=urlParams.get('Phone No');
document.getElementById('Gender').textContent=urlParams.get('Gender');
document.getElementById('Blood Group').textContent=urlParams.get('Blood Group');
document.getElementById('Comments').textContent=urlParams.get('Comments');