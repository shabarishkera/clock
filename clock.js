var area=document.getElementById('c');
setInterval(updatatime,100);
function updatatime()
{
var date=new Date();
area.innerHTML=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
}
