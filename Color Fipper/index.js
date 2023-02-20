const colors = ["green","red","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click", function(){
    // get random number between 0-3
    let randomIndex = Math.floor(Math.random()*colors.length) 
    document.body.style.backgroundColor = colors[randomIndex]
    color.textContent = colors[randomIndex]
})

