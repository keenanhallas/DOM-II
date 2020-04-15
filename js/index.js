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
    link.addEventListener("click", event => {
        event.preventDefault();
    });
    link.addEventListener("mouseover", event => {
        event.target.style.color = "rgb(255, 255, 0, .9)";
        event.target.style.backgroundColor = "rgb(176, 224, 230, .6)";
        event.target.style.border = "1px solid powderblue";
        event.target.style.fontSize = "1.9rem";
        event.target.style.lineHeight = "1.9";
    });
    link.addEventListener("mouseout", event => {
        event.target.style.color = "black";
        event.target.style.backgroundColor = "white";
        event.target.style.border = "none";
        event.target.style.fontSize = "1.6rem";
        event.target.style.lineHeight = "2.2";
    });
});

// const introSection = document.querySelector(".intro"); //not working for some reason
// introSection.addEventListener("click", event => {
//     event.target.parent.style.backgroundColor = "red";
// });

const homeImg = document.querySelector(".intro img");
homeImg.addEventListener("click", event => {
    event.target.style.borderRadius = "15px";
    event.target.style.marginTop = "3.5%";
});

let count;

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
    img.addEventListener("wheel", event => { //why does this make the images visible under the nav bar?
        event.preventDefault();
        if (event.target.style.opacity <= 0) event.target.style.opacity = 1;
        //count = Number(event.target.style.opacity);
        //if (count <= 0) count = 1;
        //count-= 0.01;
        //event.target.style.opacity = count;
        event.target.style.opacity -= 0.01;
    });
});

const trips = document.querySelectorAll(".destination");
trips.forEach(trip => {
    trip.addEventListener("contextmenu", event => {
        event.preventDefault();
        window.alert("This window won't appear when the button below is alt-clicked, due to event propagation being stopped.");
    })
})

const signUpButtons = document.querySelectorAll(".btn");
signUpButtons.forEach(button => {
    button.addEventListener("contextmenu", event => {
        event.preventDefault();
        event.stopPropagation();
        window.alert("Please have contact & credit card information readily available.");
    });
});

window.addEventListener("load", event => {
    alert("Welcome to the Fun Bus trip portal!"); //can also use window.alert - is there a difference?
});

window.addEventListener("beforeprint", event => {
    imgs.forEach(img => {
        img.style.display = "none";
    })
    alert("Before you print, we'll hide the images to help you save ink!");
});

window.addEventListener("afterprint", event => {
    imgs.forEach(img => {
        img.style.display = "block";
    })
    alert("We'll now add the images back to the page!");
});

//GSAP animation stretch goal
gsap.from("img", {duration: 2, x: 1200, rotation: 180});
gsap.from("img", {duration: 5, opacity: 0});
gsap.to("nav-link.hover", {duration: 2, backgroundColor: white});