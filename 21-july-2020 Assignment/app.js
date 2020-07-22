var colour = ["blue ", "orange", "yellow","green","red"];
var index = 0;  
function changeBGColor(){
        document.bgColor = colour[index];
        index = (index + 1) % colour.length;
        setTimeout(changeBGColor, 5000);
}   