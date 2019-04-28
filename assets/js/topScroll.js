var timer = null;
topBox.onclick = function(){
cancelAnimationFrame(timer);
timer = requestAnimationFrame(function fn(){
var oTop = document.body.scrollTop || document.documentElement.scrollTop;
if(oTop > 0){
document.body.scrollTop = document.documentElement.scrollTop = oTop - 1000;
timer = requestAnimationFrame(fn);
}else{
cancelAnimationFrame(timer);
} 
});
}