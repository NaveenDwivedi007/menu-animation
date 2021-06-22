const toggle = document.querySelector(".icon")
const nav = document.querySelector("nav")

toggle.addEventListener("click",()=>{
 return nav.classList.toggle("active")
})
