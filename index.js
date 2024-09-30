let form = document.querySelector("form")
form.addEventsListerner= ("submit",function(e){
e.preventDefault()
console.log("form is submitted")
})