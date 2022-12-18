var hours=0;
var seconds=0;
var minutes=0;
var timeout2;
function startstopwatch()
{

 timeout2=setInterval(updatestopwatch,1000);
document.getElementById('start').style.display="none";

}
function updatestopwatch()
{
seconds+=1;
if(seconds==60)
{seconds=0;
  minutes+=1;
}
if(minutes==60)
{
minutes=0;
hours+=1;

}
document.getElementById('main').innerHTML=hours+" : "+minutes+" : "+seconds;

}
function pause()
{
clearTimeout(timeout2);

document.getElementById('start').style.display="inline";
}
function reset()
{
  hours=0;
  seconds=0;
  minutes=0;
  clearTimeout(timeout2)
document.getElementById('main').innerHTML=hours+" : "+minutes+" : "+seconds;
document.getElementById('start').style.display="inline";

}
