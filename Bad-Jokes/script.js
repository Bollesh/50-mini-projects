const joke = document.querySelector("p");

document.querySelector("button").addEventListener("click", getJoke);

getJoke();

function getJoke(){

    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
        
    })
    .then((response) => response.json())
    .then((data => {
        joke.innerHTML = data.joke;
    }))

    joke.style.opacity = "0";
    setTimeout(()=>{
        joke.style.opacity = "1";
    }, 500)
}



