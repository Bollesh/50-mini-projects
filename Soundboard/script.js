const btnContainer = document.querySelector(".btnContainer");
btnContainer.classList.add("translateAnimation");

const buttons = document.querySelectorAll("button");
const sounds = ["galaxyMeme", "fart", "amogus", "outroMeme", "hehe", "notification"];

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        stopAudio();

        document.querySelector(`.${sounds[i]}`).play();
    });
}

function stopAudio(){
    sounds.forEach(sound =>{
        const song = document.querySelector(`.${sound}`);
        song.pause();
        song.currentTime = 0;
    });
}