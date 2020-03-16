function Setup(){
    if(!document.getElementById) return;
    divs=document.getElementsByTagName("div");
    for(i=0; i<divs.length;i++){
        document.write('<embed id="'+divs[i].id+'"');
        document.write(' src="'+divs[i].id+'"width="0" height="0"');
        document.write(' autostart="false" enablejavascript="true">');
        divs[i].onclick=PlaySound;
    }
}
function PlaySound(e){
    if(!e) var e=window.event;
    thiskey=(e.target)?e.target:e.srcElement;
    var sound=document.getElementById(thiskey.id);
    try{
        sound.DoPlay();
    } catch(e){
        try{
            sound.Play();
        }catch(e){
            alert("No sound support");
        }
    }
}
Setup();