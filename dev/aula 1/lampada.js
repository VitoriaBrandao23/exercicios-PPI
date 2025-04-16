function acender() {
	var lampada = document.getElementById("lampada");
	if (lampada.src.includes("off")) {
		lampada.src = "http://www.w3schools.com/js/pic_bulbon.gif"
	} else {
		lampada.src = "http://www.w3schools.com/js/pic_bulboff.gif"
	}
}