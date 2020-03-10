function Toggle(e){
    if(!document.getElementById)return;
    if(!e)var e=window.event;
    whichlink=(e.target)?e.target.id:e.srcElement.id;
    obj=document.getElementById(whichlink+"menu");
    visible=(obj.style.display=="block");
    key=document.getElementById(whichlink);
    keyname=key.firstChild.nodeValue.substring(3);
    if(visible){
        obj.style.display="none";
        key.firstchild.nodeValue="[+]"+keyname;
    }
    else{
        obj.style.display="block";
        key.firstChild.display="[-]"+kayname;
    }
}
document.getElementById("products").onclick=Toggle;
document.getElementById("support").onclick=Toggle;
document.getElementById("contact").onclick=Toggle;