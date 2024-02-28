const body = document.querySelector(".container");

function generateRandomColour(){
    const rValue=Math.floor(Math.random()*256);
    const gValue=Math.floor(Math.random()*256);
    const bValue=Math.floor(Math.random()*256);

    /*console.log(rValue);
    console.log(gValue);
    console.log(bValue);*/
    body.style.backgroundColor=`rgb(${rValue},${gValue},${bValue})`;
}