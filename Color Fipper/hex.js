
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

let newHex = []

const btn = document.getElementById("btn")
const color = document.querySelector(".color")
const saveEl = document.getElementById("save")
const colorName = document.getElementById("colorName")

btn.addEventListener("click", function random(){
    // get random number between 0-3
    let hexColor = "#"
    for(i = 0 ; i <6 ; i++ ){
        let randomIndex = Math.floor(Math.random()*hex.length)
        hexColor += hex[randomIndex]
        color.textContent = hexColor
        document.body.style.backgroundColor = hexColor  

       
        
    }
})


