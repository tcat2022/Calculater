let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");
let input = document.getElementById("input")
let inputBreak = document.getElementById("input-break")
let inputLongBreak = document.getElementById("input-longbreak")
let workTime = 25;
let intreval = 0
let breakTime = 5;
let longbreakTime = 15
let seconds = "00";
setInterval(function(){
    if(input.value === "0"){
        workTime = 25
        input.value = "25"
        document.getElementById("minutes").innerHTML = workTime;
        alert("error \n you cant use zero")
    }
    if(inputBreak.value === "0"){
        breakTime = 5
        inputBreak.value = "5"
        alert("error \n you cant use zero")
    }
    if(inputLongBreak.value === "0"){
        longbreakTime = 15
        inputLongBreak.value = "15"
        alert("error \n you cant use zero")
    }
},1)
setInterval(function(){
localStorage.setItem("time", input.value);
  localStorage.getItem("time")
  localStorage.setItem("time1", inputBreak.value);
  localStorage.getItem("time1")

},1000)

window.onload = () => {
workTime =  localStorage.getItem("time")
input.value = localStorage.getItem("time")
breakTime =  localStorage.getItem("time1")
inputBreak.value = localStorage.getItem("time1")
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
    if(inputBreak){
        inputBreak.addEventListener('keyup', function() {
            breakTime = inputBreak.value 
    
          });
          input.addEventListener('click', function() {
            breakTime = inputBreak.value 
          });
        }    

        if(inputLongBreak){
            inputLongBreak.addEventListener('keyup', function() {
                longbreakTime = inputLongBreak.value 
        
              });
              input.addEventListener('click', function() {
                longbreakTime = inputLongBreak.value 
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

   let breakCount = 0;

reset.addEventListener("click", () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = "00";
    reset.style.display = "none"
    document.getElementById("start").style.display = "inherit"
    seconds = "00"
    intreval = 0
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
                    intreval++
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
    setInterval( function(){
        console.log(intreval)
        if(intreval === 4){
            console.log(longbreakTime)
            intreval = 0
    workMinuets = longbreakTime - 1
                }
    },1)
  let a =   setInterval(timerFunction, 1000);
})



