!function(){const t=document.querySelector(".carousels__btn--left"),e=document.querySelector(".carousels__btn--right"),n=document.querySelector(".carousels"),r=document.querySelectorAll(".carousels__section");let l=0,s=0;function i(){if(s>=r.length-1)return l=0,s=0,n.style.transform=`translateX(${l}%)`,void(n.style.transition="none");s+=1,l-=widthImg,n.style.transform=`translateX(${l}%)`,n.style.transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"}widthImg=100/r.length,setInterval((()=>{i()}),3e3),t.addEventListener("click",(function(){if(0===s)return s=r.length-1,l=widthImg*(r.length-1)*-1,n.style.transform=`translateX(${l}%)`,void(n.style.transition="none");s-=1,l+=widthImg,n.style.transform=`translateX(${l}%)`,n.style.transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"})),e.addEventListener("click",i)}();
//# sourceMappingURL=index.b8a7dddc.js.map
