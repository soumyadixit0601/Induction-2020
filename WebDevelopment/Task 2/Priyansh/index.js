var  btnClick = document.querySelector(".btnClick")
btnClick.addEventListener("click", function(){
	btnClick.classList.toggle("toggleColor")
	document.body.classList.toggle("toggleColor")
	btnClick.classList.toggle("change")
})
