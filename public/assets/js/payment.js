function setErr(message) {
    $('error').textContent = message;
    $('error').style.display = "block";
}

function removeErr() {
    $('error').style.display = "none";
}

function backToDetails() {
    document.title = "Checkout • BEEX - The swiss army knife of pumps.";
    $('checkoutBreadcrumb').classList.add('active');
    $('paymentBreadcrumb').classList.remove('active');
    document.querySelectorAll("button[type=submit]")[0].disabled = false;
    $('details').style.display = "block";
    $('detailsInputs').style.display = "block";
    $('detailsLoading').style.display = "none";
    $('payment').style.display = "none";
}

var timerRunning = false;

function validateDetails() {
    $('detailsInputs').style.display = "none";
    $('detailsLoading').style.display = "block";
    document.querySelectorAll("button[type=submit]")[0].disabled = true;
    setTimeout(() => {
        document.title = "Payment • BEEX - The swiss army knife of pumps.";
        $('paymentBreadcrumb').classList.add('active');
        $('checkoutBreadcrumb').classList.remove('active');
        $('detailsLoading').style.display = "block";
        $('details').style.display = "none";
        $('payment').style.display = "block";
        if(timerRunning) {
            clearTimeout(globalTimer);
        }
        startTimer(60 * 10, $('timer'));
        timerRunning = true;
    }, 650);
}
