// Binding the Html elements
const taskEl = document.getElementById("addTask")

const inputEl = document.getElementById("taskinput")

const listEl = document.getElementById("task-list")

const errorMessage = document.createElement("div")

let total  = document.getElementById("Count-total")

let completed = document.getElementById("Count-completed")

let remaining = document.getElementById("Count-remain")

const errorDiv = document.getElementById("error")

const clickOutside = document.getElementById("task-rack")

// let's Count How many number of tasks

let count = 0
let CompleteCount = 0

let DeleteCount = 0

// Adding Functionalities
taskEl.addEventListener("click", () => {

    // Updating the count

    const task = inputEl.value.trim()

    if(task !== ""){

        count += 1

        total.textContent = count
    }

    // ToCheck InputField is filled or not

    if(task == ""){
        return error()
    }

    // remove the Error Message 

    errorMessage.remove()  

    // Creating the list Elements
    
    const todoDiv = document.createElement("div")

    const li = document.createElement("li")

    li.classList.add("todoList")

    todoDiv.classList.add("task__li")

    // Adding CheckBox Functionality

    const checkBox = document.createElement("button")

    checkBox.classList.add("checkBox")

    checkBox.innerHTML = '<i class = "fa fa-check" style = "font-size: 32px; color: #bf0603;" ></i>'

    checkBox.style.marginRight = "0.5rem"

    checkBox.addEventListener("click", ()=>{
        todoDiv.style.backgroundColor = "#a4ac86"
        checkBox.classList.add("checkBox")
        todoDiv.style.opacity = "0.5"
        li.style.textDecorationLine = "line-through"
        CompleteCount += 1
        completed.textContent = CompleteCount
        
        remaining.textContent = count - CompleteCount
        
    })

    remaining.textContent = count - CompleteCount

    // Adding the  Delete Button to it

    const deleteButton = document.createElement("button")

    deleteButton.style.padding = "0.15rem"

    deleteButton.style.backgroundColor = "#011627"

    deleteButton.classList.add("deleteButton")

    deleteButton.innerHTML = '<i class = "fa fa-trash" style = "font-size: 32px; color: #fff;" ></i>'

    deleteButton.addEventListener("click", ()=>{
        DeleteCount += 1
        todoDiv.remove()
        count = count - 1;
        const wasCompleted = li.classList.contains("checkBox")
        total.textContent = count
        if(wasCompleted){
            CompleteCount -= 1
            CompleteCount.textContent = CompleteCount
        }
        remaining.textContent = count - CompleteCount


    })
    
    li.textContent = task

    // Editable Option
    li.addEventListener("click", (e)=>{
        
        const tasky = e.target
        tasky.contentEditable = "true"
        tasky.focus()
       
        }) 

    //  Appending everything 
    
    
    todoDiv.appendChild(li)
    todoDiv.appendChild(checkBox)
    todoDiv.appendChild(deleteButton)

    listEl.appendChild(todoDiv)
    
    
    })

// Error function

function error(){

    
    errorMessage.classList.add("Err")

    errorMessage.textContent = "Please Add the Tasks"

    errorMessage.style.color = "#f00"

    errorMessage.style.fontSize = "1.5rem"

    errorDiv.appendChild(errorMessage)

    errorDiv.style.textAlign = "center"
    
}

// Functionality to the delete button



