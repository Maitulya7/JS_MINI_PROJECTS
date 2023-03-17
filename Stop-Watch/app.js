
// variables for buttons 
const startStopBtn = document.querySelector("#startstopbtn")
const resetBtn = document.querySelector("#resetbtn")

// variables for time value 
let milliseconds = 0 
let seconds = 0
let minutes = 0
let hours = 0

// variables for leading zero

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0
let leadingMilliseconds = 00

//variables to setInterval and timeState 
let timeInterval = null
let timeState = "stopped"

// stop watch function
function stopWatch(){
    milliseconds+=10
    if(milliseconds / 1000 ===  1  ){
        milliseconds = 0
        seconds++
    }

    if( seconds / 60 === 1){
        seconds = 0
        minutes++
    }

    if(minutes / 60 === 1 ){
        minutes = 0
        hours++
    }

    if(milliseconds < 10){
        leadingMilliseconds = "00" + milliseconds.toString()
    }else{
        leadingMilliseconds =  milliseconds
    }

    if( seconds < 10 ){
        leadingSeconds = "0" + seconds.toString()
    } else{
        leadingSeconds = seconds
    }
    if( minutes < 10 ){
        leadingMinutes = "0" + minutes.toString()
    } else{
        leadingMinutes = minutes
    }
    if( hours < 10 ){
        leadingHours = "0" + hours.toString()
    } else{
        leadingHours = hours
    }

    // display our function on screen
    let display = document.getElementById("timer").innerHTML = leadingHours +":"+ leadingMinutes +":"+ leadingSeconds +":"+ leadingMilliseconds

}

startStopBtn.addEventListener("click" , function(){

    if(timeState === "stopped"){
        timeInterval = window.setInterval(stopWatch , 10)
        document.getElementById("startstopbtn").innerHTML =
         `
         <i class="fa-solid fa-pause" id='pause'></i>
        `
        timeState = "started"
    }
    else{
        window.clearInterval(timeInterval)
        document.getElementById("startstopbtn").innerHTML = 
        `
        <i class="fa solid fa-play" id="play"></i>
        `
        timeState = "stopped"
    }
})


resetBtn.addEventListener("click", function(){
    window.clearInterval(timeInterval)
    seconds = 0
    minutes = 0
    hours = 0
    milliseconds = 0

    document.getElementById("timer").innerHTML = "00:00:00:000"

})
