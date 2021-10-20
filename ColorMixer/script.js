var c2d = document.getElementById("c2-display");
var res = document.getElementById("result-display");
var c1r = document.getElementById("c1r");
var c1g = document.getElementById("c1g");
var c1b = document.getElementById("c1b");
var c1d = document.getElementById("c1-display");
var c2r = document.getElementById("c2r");
var c2g = document.getElementById("c2g");
var c2b = document.getElementById("c2b");
var mix = document.getElementById("mix");
var reset = document.getElementById("rst");
var rr,rb,rg ;


function display(){
  c1d.style.backgroundColor = `rgb(${c1r.value},${c1g.value},${c1b.value})` ;
  c2d.style.backgroundColor = `rgb(${c2r.value},${c2g.value},${c2b.value})` ;
}

mix.addEventListener("click",function(){
  rr = Math.ceil((c1r.valueAsNumber+c2r.valueAsNumber)/2);
  rg = Math.ceil((c1g.valueAsNumber+c2g.valueAsNumber)/2);
  rb = Math.ceil((c1b.valueAsNumber+c2b.valueAsNumber)/2);
 
  res.style.backgroundColor = `rgb(${rr},${rg},${rb})`; 
  console.log(rr,rg,rb) ;

})

reset.addEventListener("click",()=>{
  c1r.value = "" ;
  c1g.value = "" ;
  c1b.value = "" ;
  c2r.value = "" ;
  c2g.value = "" ;
  c2b.value = "" ;
 

c2d.style.backgroundColor = "white";
c1d.style.backgroundColor = "white";
res.style.backgroundColor = "white" ;
})

//Math.ceil
//.valueAsNumber
//255 154 0
// 213 0 255
// 