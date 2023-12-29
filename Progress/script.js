let circles = document.getElementsByClassName("circle");
let progressBar = document.getElementById("progress");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let stepNumber = 0;

nextBtn.addEventListener("click", () => {
    if(stepNumber < 3){
        stepNumber++;
        progressBar.style.width = `${stepNumber * 33}%`;
        circles[stepNumber].classList.add("active");
    }

    

    disableButtons();
});

prevBtn.addEventListener("click", () => {
    if(stepNumber > 0){
        circles[stepNumber].classList.remove("active");
        stepNumber--;
        progressBar.style.width = `${100 - (3 - stepNumber) * 33}%`;
    }

    disableButtons();
});

function disableButtons(){
    if(stepNumber == 0){
        prevBtn.disabled = true;  
    }
    else{
        prevBtn.disabled = false;
    }

    if(stepNumber == 3){
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
    }
}