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

function countdown(elementName, minutes, seconds)
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n)
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    element = $(elementName);
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}