
function todolist(){
    let text = document.getElementById("text");
var t = document.createTextNode(text.value)
var v = document.createTextNode(text.value)
var newitem = document.createElement("li")
var checked = document.createElement("li")
var remove = document.createElement("button")
var complete = document.createElement("button")
newitem.append(t, remove, complete)
checked.append(v)
document.getElementById("todolist").appendChild(newitem)
text.value = ""
remove.innerText = "Remove"
complete.innerText = "completed"
remove.addEventListener('click', function(){
    document.getElementById("todolist").removeChild(newitem)
})
complete.addEventListener('click', function(){
    document.getElementById("completed").appendChild(checked)
    document.getElementById("todolist").removeChild(newitem)
})


}

