
const btns = document.querySelectorAll(".btn")
const numberEl = document.querySelector("#number")


let count = 0


btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList
        if(style.contains("decrement")){
            count--
        }
        else if (style.contains("increment")){
            count++
        } else  {
            count = 0
        }

        if(count > 0){
            number.style.color = "green"
        } else  if( count === 0){
            number.style.color = "white"
        } else {
            number.style.color = "red"
        }
        numberEl.textContent = count 
    })
})




