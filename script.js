var rows=[["Revisión y requisitos",1,2],["Normativa UAEAC",1,3],["Diseño de la aeronave",2,4],["Construcción",4,7],["IMU y adquisición",6,8],["Recolección de datos",8,10],["Limpieza y normalización",9,11],["Red neuronal",10,12],["Cuantización TFLite",12,13],["Implementación en controlador",12,14],["Integración y pruebas en tierra",13,15],["Pruebas de vuelo",14,16],["Informe final",13,16]];
var g=document.getElementById("gantt"),h='<div class="gr gh"><span>Semana</span>';
for(var i=1;i<=16;i++)h+="<span>"+i+"</span>";
h+="</div>";
rows.forEach(function(r){h+='<div class="gr"><span>'+r[0]+'</span><i style="grid-column:'+(r[1]+1)+' / '+(r[2]+2)+'"></i></div>'});
g.innerHTML=h;
(function(){
var c=document.querySelector(".car");if(!c)return;
var t=c.querySelector(".track"),n=t.children.length,i=0,d=c.querySelector(".dots"),timer;
for(var k=0;k<n;k++){(function(k){var b=document.createElement("button");b.setAttribute("aria-label","Imagen "+(k+1));b.onclick=function(){go(k)};d.appendChild(b)})(k)}
function go(x){i=(x+n)%n;t.style.transform="translateX(-"+i*100+"%)";[].forEach.call(d.children,function(b,j){b.className=j==i?"on":""})}
c.querySelector(".prev").onclick=function(){go(i-1)};
c.querySelector(".next").onclick=function(){go(i+1)};
function start(){stop();timer=setInterval(function(){go(i+1)},5000)}
function stop(){clearInterval(timer)}
c.onmouseenter=stop;c.onmouseleave=start;
var x0=null;c.addEventListener("touchstart",function(e){x0=e.touches[0].clientX;stop()},{passive:true});
c.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));x0=null;start()});
document.addEventListener("keydown",function(e){if(e.key=="ArrowLeft")go(i-1);if(e.key=="ArrowRight")go(i+1)});
go(0);start();
})();