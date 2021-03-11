const mob = document.querySelectorAll(".table-mob");
const pc = document.querySelectorAll(".table-pc");

console.log(window.screen.availWidth);
if(window.screen.availWidth < 900)
{
  pc.forEach(ele => ()=>{
      ele.style.display= "none";
  });
}