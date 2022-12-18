var hr=0;
var mn=0;
var aud;
var timeout3;
var msg;
function addhr(val)
{
hr=(hr+parseInt(val))%24;
if(hr==-1)
hr=23;
document.getElementById('hr').innerHTML=hr+" hrs";
}
function addmn(val)
{
  mn=(mn+(val))%60;
  if(mn==-1)
  mn=59;
  document.getElementById('mn').innerHTML=mn+" min";

}
function setalarm()
{
 aud=document.createElement("audio");
aud.src="sound.mp3";
aud.loop=true;
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var hfinal=Math.abs(h-hr);
var mfinal=Math.abs(m-mn);
 msg=document.createTextNode("rings at "+hr+" : "+mn);

 timeout3=setTimeout(play,((hfinal*3600)+mfinal*60)*1000);
document.getElementById('hourcontainer').style.display="none";
document.getElementById('minutecontainer').style.display="none";
document.getElementById('set').style.display="none";
document.getElementById('a').appendChild(msg);

}
function clearalarm()
{
aud.pause();
clearTimeout(timeout3);
document.getElementById('set').style.display="inline";
document.getElementById('hourcontainer').style.display="inline-flex";
document.getElementById('minutecontainer').style.display="inline-flex";
document.getElementById('a').removeChild(msg);
}
function play() {
  aud.play();
}
