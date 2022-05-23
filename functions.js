
let mobileMenuIcon = document.getElementById("mobile-menu-icon")
let mobileMenuCloseBtn = document.getElementById("close-icon")
let body = document.querySelector("body")
let navBar = document.querySelector("nav")

mobileMenuIcon.addEventListener("click", ()=>{
	body.style.overflowY = "hidden"
	navBar.id = "show-mobile-menu"
})

mobileMenuCloseBtn.addEventListener("click", ()=>{
	body.style.overflowY = "scroll"
	navBar.id = ""
})