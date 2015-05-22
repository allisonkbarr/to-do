var form = document.querySelector("#form")
var input = document.querySelector("#input")
var list = document.querySelector("#list")
var submit = document.querySelector("#submit")

var preventDefault = function(e) {
  e.preventDefault()
}

var addToDo = function() {
  if (input.value == "") return
  var li = document.createElement("li")
  li.innerText = input.value
  li.className = "todo"
  list.appendChild(li)
}

var clearInput = function() {
  input.value = ""
}

var strikethrough = function(e) {
  var li = e.target
  var style = window.getComputedStyle(li).getPropertyValue("text-decoration")
  if (style == "line-through") {
    li.style.textDecoration = "none"
  } else {
    li.style.textDecoration = "line-through"
  }
}

form.addEventListener("submit",preventDefault)

submit.addEventListener("click",addToDo)

submit.addEventListener("click",clearInput)

list.addEventListener("click",strikethrough)
