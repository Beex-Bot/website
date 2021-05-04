function $(id) {
	if (id.startsWith(".")) {
		return document.getElementsByClassName(id.substring(1));
	} else {
		return document.getElementById(id);
	}
}

window.onload = scrollFunction();

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		$("nav").style.background = "rgb(20, 30, 40, 0.65)";
		$("nav").style.backdropFilter = "blur(5px)";
	} else {
		$("nav").style.backgroundColor = "transparent";
		$("nav").style.backdropFilter = "none";
	}
}

function mobileNav(action) {
	if (action == "open") {
		$("openMenu").style.display = "none";
		$("closeMenu").style.display = "block";
		$("mobileNav").style.display = "block";
		document.getElementsByTagName("body")[0].style.maxHeight = "100vh";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
	} else {
		$("openMenu").style.display = "block";
		$("closeMenu").style.display = "none";
		$("mobileNav").style.display = "none";
		document.getElementsByTagName("body")[0].style.maxHeight = "auto";
		document.getElementsByTagName("body")[0].style.overflow = "";
	}
}

var globalTimer;

function startTimer(duration, display, killTimer) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds; 
        if (diff <= 0) {
            start = Date.now() + 1000;
		}
    };
    timer();
    globalTimer = setInterval(timer, 1000);
}
