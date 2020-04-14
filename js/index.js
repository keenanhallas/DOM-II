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

const homeImg = document.querySelector(".home img");
homeImg.addEventListener("click", event => {
    event.target.style.borderRadius = "15px";
    event.target.style.marginTop = "3.5%";
});

const imgs = document.querySelectorAll("img");
imgs.forEach(img => {
    img.addEventListener("dblclick", event => {
        event.target.style.padding = "1px";
        event.target.style.border = "2px dashed lightgrey";
    });
    img.addEventListener("drag", event => {
        //window.alert("You can't move the images!"); //need to get the alert prompt to go away
        event.target.style.display = "none";
    });
    img.addEventListener("dragend", element => {
        event.target.style.display = "block";
    });
    img.addEventListener("wheel", event => {
        event.preventDefault();
        event.target.style.opacity -= 0.01;
    });
});

const signUpButtons = document.querySelectorAll(".btn");
signUpButtons.forEach(button => {
    button.addEventListener("contextmenu", event => {
        event.preventDefault();
        window.alert("Please have contact & credit card information readily available.");
    });
});

const paragraphText = document.querySelectorAll("p");
paragraphText.forEach(p => {
    p.addEventListener("keydown", event => {
        if (event.keyCode === 72) {
            event.target.style.color = "red";
        }
    });
});