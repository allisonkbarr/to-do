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
  list.appendChild(li)
}

var clearInput = function() {
  input.value = ""
}

form.addEventListener("submit",preventDefault)

submit.addEventListener("click",addToDo)

submit.addEventListener("click",clearInput)
