let start = document.getElementById("start")
let pause = document.getElementById("pause")
let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");
let longBreakTitle = document.getElementById("longbreak")
let input = document.getElementById("input")
let inputBreak = document.getElementById("input-break")
let inputLongBreak = document.getElementById("input-longbreak")
let inputLongBreakInterval = document.getElementById("longbreak-interval")
let workTime = 25;
let intreval = 0
let breakTime = 5;
let longbreakTime = 15
let longBreakIntervalTime = 4
let seconds = "00";
let cancelled = false
let constantTime = input.value
let constantSeconds = "59"
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
    if(inputLongBreakInterval.value === "0"){
        longBreakIntervalTime = 4
        inputLongBreakInterval.value = "4"
        alert("error \n you cant use zero")
    }
},1)
setInterval(function(){
localStorage.setItem("time", input.value);
  localStorage.getItem("time")
  localStorage.setItem("time1", inputBreak.value);
  localStorage.getItem("time1")
  localStorage.setItem("time2", inputLongBreak.value);
  localStorage.getItem("time2")
  localStorage.setItem("time3", inputLongBreakInterval.value);
  localStorage.getItem("time3")
},1000)

   if (performance.navigation.type == 1){
workTime =  localStorage.getItem("time")
input.value = localStorage.getItem("time")
breakTime =  localStorage.getItem("time1")
inputBreak.value = localStorage.getItem("time1")
longbreakTime = localStorage.getItem("time2")
inputLongBreak.value = localStorage.getItem("time2")
longBreakIntervalTime = localStorage.getItem("time3")
inputLongBreakInterval.value = localStorage.getItem("time3")
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
    workTitle.classList.add('active');
}else{
    workTime = 25
    input.value = 25
    breakTime = 5
    inputBreak.value = 5
    inputLongBreak.value = 15
    longbreakTime = 15
    inputLongBreakInterval.value = 4
    longBreakIntervalTime = 4
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
          inputBreak.addEventListener('click', function() {
            breakTime = inputBreak.value 
          });
        }    

        if(inputLongBreak){
            inputLongBreak.addEventListener('keyup', function() {
                longbreakTime = inputLongBreak.value 
        
              });
              inputLongBreak.addEventListener('click', function() {
                longbreakTime = inputLongBreak.value 
              });
            }  
            
        if(inputLongBreakInterval){
             inputLongBreakInterval.addEventListener('keyup', function() {
                longBreakIntervalTime = inputLongBreakInterval.value 
        
              });
              inputLongBreakInterval.addEventListener('click', function() {
                longBreakIntervalTime = inputLongBreakInterval.value 
              });
             }  



start.addEventListener("click",() =>{
start.style.display = "none"
pause.style.display = "inherit"
let reset = document.getElementById("reset")
seconds = constantSeconds

    let workMinuets = workTime - 1;
    let breakMinuets = breakTime - 1;

   let breakCount = 0;

reset.addEventListener("click", () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = "00";
    seconds = "00"
    intreval = 0
    workTime = input.value
    
    clearInterval(a)
    start.style.display = "inherit"
pause.style.display = "none"
})
    let timerFunction = () => {
        document.getElementById("minutes").innerHTML = workMinuets;
        document.getElementById("seconds").innerHTML = seconds;
    if( seconds < 10 ){
            document.getElementById("seconds").innerHTML  = "0" + seconds;
        }

        seconds = seconds - 1;
        if(seconds === -1) {
            workMinuets = workMinuets - 1;
            if(workMinuets === -1){
                if(breakCount % 2 === 0){
                    workMinuets = breakMinuets;
                    breakCount++
                    breakTitle.classList.add("active")
                    workTitle.classList.remove("active") 
                    intreval++
                }else{
                    workMinuets = workTime - 1;
                    breakCount++
                    workTitle.classList.add("active")
                    breakTitle.classList.remove("active")
                    longBreakTitle.classList.remove("active")
                }
                }
                seconds = 59;
                
                
            }
            constantTime = workMinuets ;  
            constantSeconds = seconds + 1
    }
    setInterval( function(){
        if(intreval == longBreakIntervalTime){
            console.log(longBreakIntervalTime)
            intreval = 0
    workMinuets = longbreakTime - 1
    breakTitle.classList.remove("active")
   longBreakTitle.classList.add("active")
                }
             
                   
                
    },1)
    let a =   setInterval(timerFunction,1000);
    pause.addEventListener('click', () =>{
        cancelled = true
        start.style.display = "inherit"
        pause.style.display = "none"
        if(cancelled){
            workTime =  constantTime + 1
          seconds =  constantSeconds
              clearInterval(a)
      console.log(constantSeconds)
              }
              else{
                  constantTime = input.value 
                  constantSeconds = "00"
              }
    })

})
console.log(document.getElementById("seconds").innerHTML)
