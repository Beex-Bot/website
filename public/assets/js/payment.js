function backToDetails() {
    document.title = "Checkout • BEEX - The swiss army knife of pumps.";
    $('checkoutBreadcrumb').classList.add('active');
    $('paymentBreadcrumb').classList.remove('active');
    $('details').style.display = "block";
    $('detailsInputs').style.display = "block";
    $('detailsLoading').style.display = "none";
    $('payment').style.display = "none";
}

var timerRunning = false;

function validateDetails() {
    $('detailsInputs').style.display = "none";
    $('detailsLoading').style.display = "block";
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
