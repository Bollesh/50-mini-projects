let mainContainer = document.querySelector(".container");
let navigation = document.querySelector("nav");
let circle = document.querySelector(".circle");
let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () =>{
    circle.classList.add("rotate");
    mainContainer.classList.add("show-nav");
    navigation.style.transform = "translateX(0)";
    document.querySelector("nav ul li + li").style.transform = "translateX(0)";
    document.querySelector("nav ul li + li + li").style.transform = "translateX(0)";

});

closeBtn.addEventListener("click", () => {
    circle.classList.remove("rotate");
    mainContainer.classList.remove("show-nav");
    navigation.style.transform = "translateX(-100px)"
    document.querySelector("nav ul li + li").style.transform = "translateX(-10px)";
    document.querySelector("nav ul li + li + li").style.transform = "translateX(-20px)";
});