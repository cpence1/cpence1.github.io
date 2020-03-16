var obj, x, y, dx, dy;
function setup(){
    if(!document.getElementsByTagName)return;
    divs=document.getElementsByTagName("DIV");
    for(i=0; i<divs.length;i++){
        if(divs[i].className!="drag")continue;
        divs[i].onmousedown=Drag;
    }
}
function Drag(e){
    if(!e) var e=window.event;
    obj=(e.target)?e.target:e.srcElement;
    obj.style.borderColor="red";
    dx=x-obj.offsetLeft;
    dy=y-obj.offsetTop;
}
function Move(e){
    if(!e) var e=window.event;
    if(e.pageX){
        x=e.clientX;
        y=e.clientY;
    } else return;
    if(obj){
        obj.style.left=x-dx;
        obj.style.top=y-dy;
    }
}
function Drop(){
    if(!obj) return;
    obj.style.borderColor="black";
    obj=false;
}
document.onmousemove=Move;
document.onmouseup=Drop;
window.onload=Setup;