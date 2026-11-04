const modal=document.getElementById("modal");
const modalImg=modal.querySelector("img");
const modalText=modal.querySelector("p");
document.querySelectorAll(".photo").forEach(btn=>btn.addEventListener("click",()=>{
  modalImg.src=btn.dataset.src; modalImg.alt=btn.dataset.title;
  modalText.textContent=btn.dataset.title; modal.hidden=false;
}));
function closeModal(){modal.hidden=true;modalImg.src="";}
modal.querySelector(".close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
