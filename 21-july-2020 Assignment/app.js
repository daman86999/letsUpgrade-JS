var colour = [ "orange", "yellow","pink","cyan","red"];
var index = 0;  

var z;
function changeBGColor(){
        document.bgColor = colour[index];
        index = (index + 1) % colour.length;
        z=setTimeout(changeBGColor, 5000);
}

function stop(){
    clearTimeout(z);
    document.bgColor = "white";
}

//q2

document.getElementById("bt2").onclick = function (){

    var number = Number(prompt("Enter any number ...."));
    var outputL = "";
    var output = "";
    let i=0 ;
    while(i<=10){
        output = number * i;
        outputL +=number + " * " +i+" = " +output +" <br/>" 
        i++;
    }
    document.getElementById("table").innerHTML= (outputL);

}


//q3

function myFunction() {
    document.getElementById("bdy").classList.toggle("darkbody");
    
    document.getElementById("btn").classList.toggle("darkbtn");

}
const ctime = document.getElementById('time');
function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock, 1000);
document.getElementById("bt3").onclick = function (){
var name = prompt("Enter your name");
name = name.toUpperCase();
wlcmMsg.innerHTML += `WELCOME ${name}`;
}