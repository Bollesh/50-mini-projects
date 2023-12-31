let loadScreen = document.querySelector("img");
let loadScreenCounter = document.querySelector("p");
let i = 0;

if(i <= 100){
    setInterval(() => {
        if(i <= 100){
            loadScreenCounter.innerHTML = `${i}%` 
            loadScreenCounter.style.opacity = `${1 - (i/100)}`
            loadScreen.style.filter = `blur(${33.33 - (i/3)}px)`
            console.log(i/3)
            i++;
        }
    }, 30);
}
