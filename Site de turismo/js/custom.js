document.addEventListener("DOMContentLoaded", function(event){
	const headerSize = document.getElementById('header').clientHeight;
	document.getElementById('container-background').style.height = (window.innerHeight - headerSize) + "px";
});