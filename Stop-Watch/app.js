
// variables for buttons 
const startStopBtn = document.querySelector("#startstopbtn")
const resetBtn = document.querySelector("#resetbtn")

// variables for time value 
let seconds = 0
let minutes = 0
let hours = 0

// variables for leading zero
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

//variables to setInterval and timeState 
let timeInterval = null
let timeState = "stopped"

// stop watch function
function stopWatch(){
    seconds++

    if( seconds / 60 === 1){
        seconds = 0
        minutes++
    }

    if(minutes / 60 === 1 ){
        minutes = 0
        hours++
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
    let display = document.getElementById("timer").innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}

startStopBtn.addEventListener("click" , function(){

    if(timeState === "stopped"){
        timeInterval = window.setInterval(stopWatch , 1000)
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

    document.getElementById("timer").innerHTML = "00:00:00"

})