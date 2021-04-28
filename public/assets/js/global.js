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
	if(document.body.scrollBottom > 5 || document.documentElement.scrollBottom > 5) {
		$(".bottom-bar")[0].style.display = "hidden";
	} else {
		$(".bottom-bar")[0].style.display = "block";
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

// mobileNav("open");
