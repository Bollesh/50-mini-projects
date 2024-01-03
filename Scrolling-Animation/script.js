let contentBoxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBox);

showBox();

function showBox(){
    const bottomTrigger = window.innerHeight / 5 * 4;

    contentBoxes.forEach(contentBox =>{
        let boxTop = contentBox.getBoundingClientRect().top;

        if(bottomTrigger > boxTop){
            contentBox.classList.add("show");
        }
        else{
            contentBox.classList.remove("show");
        }
    });
        
}