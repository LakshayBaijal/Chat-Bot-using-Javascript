//Colour varient for Header h1
var header=document.querySelector("h3")

function getRandomColor()
{
var letters="1234567890ABCDEF";
var color='#';
for(var i=0;i<6;i++)
{
    color+=letters[Math.floor(Math.random()*16)];
}
return color
}


function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color=colorInput;
}

setInterval("changeHeaderColor()",100);
