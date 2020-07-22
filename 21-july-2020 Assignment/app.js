var colour = ["blue ", "orange", "yellow","green","red"];
var index = 0;  
function changeBGColor(){
        document.bgColor = colour[index];
        index = (index + 1) % colour.length;
        setTimeout(changeBGColor, 5000);
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
