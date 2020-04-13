// Your code goes here
const fullNav = document.querySelector(".nav");
fullNav.style.width = "60%";
fullNav.style.height = "40%";

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.style.lineHeight = "2.2";
    link.style.width = "20%";
    link.style.textAlign = "center";
    link.style.borderRadius = "5px"
    link.addEventListener("mouseover", event => {
        event.target.style.color = "yellow";
        event.target.style.backgroundColor = "powderblue";
        event.target.style.fontSize = "1.9rem";
        event.target.style.lineHeight = "2";
    })
    link.addEventListener("mouseout", event => {
        event.target.style.color = "black";
        event.target.style.backgroundColor = "white";
        event.target.style.fontSize = "1.6rem";
        event.target.style.lineHeight = "2.2";
    })
});