
const mons=["ガブリアス","ルカリオ","メタグロス","サーフゴー","ミミッキュ"];
const list=document.getElementById("list");
function render(f=""){
 if(!list)return;
 list.innerHTML="";
 mons.filter(m=>m.includes(f)).forEach(m=>{
  const b=document.createElement("button");
  b.textContent=m;
  b.onclick=()=>{
   detail.style.display="block";
   name.textContent=m;
  };
  list.appendChild(b);
 });
}
if(document.getElementById("q")){
 render();
 q.oninput=e=>render(e.target.value);
}
function show(id){
 document.querySelectorAll(".page").forEach(p=>p.style.display="none");
 document.getElementById(id).style.display="block";
}
