const btn = document.querySelector("#open-btn")
const model = document.querySelector(".model-container")
const closeBtn = document.querySelector(".close-btn")

btn.addEventListener("click" , function(){
    model.style.display = "block"
})

closeBtn.addEventListener("click" , function(){
    model.style.display = "none"
})

window.addEventListener("click" ,function(e){
    if(e.target === model){
        model.style.display = 'none'
    }
})

