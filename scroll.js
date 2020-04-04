var pos=100;
function Scroll(){
    if(!document.getElementById) return;
    obj=document.getElementById("thetext");
    pos--;
    if(pos<0-obj.offsetHeight) return;
    obj.style.top=pos;
    window.setTimeout("Scroll();",30);
}
window.onload=Scroll;