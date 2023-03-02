//variables 

const inputTask = document.getElementById("input-task")
const taskContainer =  document.getElementById("task-container")
const addTask = document.getElementById("add-task")

addTask.addEventListener("click" , function(){
    let task = document.createElement("div")
    task.classList.add("task")

    let li = document.createElement("li")
    li.innerHTML = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement("button")
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkButton.classList.add("checkbutton")
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = `<i class="fa-solid  fa-trash-can"></i>`
    deleteButton.classList.add("detelebutton")
    task.appendChild(deleteButton)


    if(!inputTask.value){
        alert("Please Enter The Task")
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value = ""

    checkButton.addEventListener("click" ,function(){
        checkButton.parentElement.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener("click", function(e){
        let target = e.target

        target.parentElement.parentElement.remove()
    })
})

