let mainHeading = document.querySelector(".header");
let Events = document.querySelectorAll(".event");
let eventTitles = document.querySelectorAll(".title");
let eventKey = document.querySelector("#key > p");
let eventKeyCode = document.querySelector("#keyCode > p");
let eventCode = document.querySelector("#code > p");
let innerTexts = document.querySelectorAll("p");
let eventContainer = document.querySelector(".eventContainer")
eventContainer.classList.add("invis");

let numberOfKeysPressed = 0;


window.addEventListener("keydown", (event)=>{
    numberOfKeysPressed++;
    if(numberOfKeysPressed == 1){
        mainHeading.classList.add("invis");
        eventContainer.classList.remove("invis");
        Events.forEach(Event =>{
            Event.classList.add("fadein");
        });
        eventTitles.forEach(eventTitle =>{
            eventTitle.classList.add("popout")
        });
        texts(500, event)
    }
    else{
        texts(200, event)
        eventTitles.forEach(eventTitle=>{
            eventTitle.classList.remove("popout")
            eventTitle.classList.add("float");
            setTimeout(()=>{
                eventTitle.classList.remove("float");
            }, 500);
        })
    }
});


function texts(delay, event){
    innerTexts.forEach(innerText =>{
        innerText.style.transition = `opacity ${delay}ms ease-in-out`;
        innerText.style.opacity = "0";
        setTimeout(()=>{
            innerText.style.opacity = "1";
            if(event.keyCode == 32){
                eventKey.innerHTML = `Space`;
            }
            else{
                eventKey.innerHTML = `${event.key}`;
            }
            eventKeyCode.innerHTML = `${event.keyCode}`
            eventCode.innerHTML = `${event.code}`
        }, delay)
    });
}