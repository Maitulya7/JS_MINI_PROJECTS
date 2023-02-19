let hour = 0
let minute = 0
let second = 0
let d = new Date()

setInterval(
    function(){
        let d = new Date()
        let minute = d.getMinutes() * 6
        let second = d.getSeconds() *6
        let hour = d.getHours() *30 + (Math.round(minute / 12))

        document.getElementById("minute-hand").style.transform =(`rotate(${minute}deg)`)

        document.getElementById("second-hand").style.transform =(`rotate(${second}deg)`)

        document.getElementById("hour-hand").style.transform =(`rotate(${hour}deg)`)

    } ,1000
)


