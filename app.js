let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");
let e = document.getElementById("input").value
let workTime = e;
let breakTime = 5;
let seconds = "00";

window.onload = () => {

    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;

    workTitle.classList.add('active');
}

function start(){

document.getElementById("start").style.display = "none"
let reset = document.getElementById("reset")
reset.style.display = "inherit"

    seconds = 59;

    let workMinuets = workTime - 1;
    let breakMinuets = breakTime - 1;

    breakCount = 0;

reset.addEventListener("click", () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = "00";
    reset.style.display = "none"
    document.getElementById("start").style.display = "inherit"
    clearInterval(a)
})

    let timerFunction = () => {
        document.getElementById("minutes").innerHTML = workMinuets;
        document.getElementById("seconds").innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            workMinuets = workMinuets - 1;
            if(workMinuets === -1){
            if(breakCount % 2 === 0){
                workMinuets = breakMinuets;
                breakCount++

                workTitle.classList.remove("active")
                breakTitle.classList.add("active")
            }else{
                workMinuets = workTime;
                breakCount++

                workTitle.classList.add("active")
                breakTitle.classList.remove("active")
            }
            }
            seconds = 59;
        }

    }
  let a =   setInterval(timerFunction, 1000);
}


