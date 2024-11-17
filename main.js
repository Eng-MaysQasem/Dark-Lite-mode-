var liteMode=document.querySelector(".lite");
var body =document.querySelector("body");
var darkMode=document.querySelector(".dark");
function dark(){
body.classList.add('b-d');
}
darkMode.onclick=dark;
function lite(){
    body.classList.remove('b-d');}

    liteMode.onclick=lite;
