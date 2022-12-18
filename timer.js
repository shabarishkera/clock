var sec=0;
var min;
var hour=00;
var  p=document.createElement("p");
var timeout;
function settimer1()
{
  document.getElementById('min15').style.display="none";

  document.getElementById('min60').style.display="none";
  document.getElementById('min30').style.display="none";

  document.getElementById('t').appendChild(p);
min=14;
  timeout=setInterval(startimer,1000);
}
function settimer2()
{

document.getElementById('t').appendChild(p);
  document.getElementById('min15').style.display="none";

  document.getElementById('min60').style.display="none";
  document.getElementById('min30').style.display="none";
min=29;
timeout=  setInterval(startimer,1000);

}
function settimer3()
{
  document.getElementById('min15').style.display="none";

  document.getElementById('min60').style.display="none";
  document.getElementById('min30').style.display="none";

  document.getElementById('t').appendChild(p);
min=59;
 timeout=setInterval(startimer,1000);


}
function startimer()
{

sec-=1;
if(sec==-1)
sec=59;
if(min==0&&sec==0)
resettimer();

if(sec==0)
min=min-1;


p.innerHTML=hour+" : "+min+" : "+sec;


}
function resettimer()
{

p.style.display="none";
document.getElementById('min15').style.display="inline";
document.getElementById('min60').style.display="inline";
document.getElementById('min30').style.display="inline";

clearTimeout(timeout);
var endmsg=document.createElement("p");
endmsg.innerHTML="TIMER ENDED";
document.getElementById('t').appendChild(endmsg);
}
