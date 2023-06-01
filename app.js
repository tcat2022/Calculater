let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");
let input = document.getElementById("input")
let workTime = 25;
  
let breakTime = 5;
let seconds = "00";
setInterval(function(){
localStorage.setItem("time", input.value);
  localStorage.getItem("time")

},1000)

window.onload = () => {
workTime =  localStorage.getItem("time")
input.value = localStorage.getItem("time")
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
    workTitle.classList.add('active');
}

if(input){
    input.addEventListener('keyup', function() {
        workTime = input.value 
        document.getElementById("minutes").innerHTML = workTime;

      });
      input.addEventListener('click', function() {
        workTime =input.value
        document.getElementById("minutes").innerHTML = workTime;

      });
    }
        
let start = document.getElementById("start")
start.addEventListener("click",() =>{
start.style.display = "none"
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
    seconds = "00"
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
                    breakTitle.classList.add("active")
                    workTitle.classList.remove("active") 
               
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
})


