var color = ["blue ", "orange", "yellow","green","red"];
var index = 0;  
function changeBGColor(){
        document.bgColor = color[index];
        index = (index + 1) % color.length;
        setTimeout(changeBGColor () , 5000);
}   