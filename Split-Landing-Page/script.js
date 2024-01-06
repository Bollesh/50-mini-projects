let leftContainer = document.querySelector(".left");
let rightContainer = document.querySelector(".right");
let containers = document.querySelectorAll(".container");

leftContainer.addEventListener("mouseover", () => {
    Default();
    leftContainer.classList.add("grow");
    rightContainer.classList.add("shrink");
});

rightContainer.addEventListener("mouseover", () => {
    Default();
    rightContainer.classList.add("grow");
    leftContainer.classList.add("shrink");
});

containers.forEach(container =>{
    container.addEventListener("mouseout", Default);
});


function Default(){
    leftContainer.classList.remove("grow", "shrink");
    rightContainer.classList.remove("grow", "shrink");
}

