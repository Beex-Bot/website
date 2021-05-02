function backToDetails() {
    document.title = "Checkout • BEEX - The swiss army knife of pumps.";
    $('checkoutBreadcrumb').classList.add('active');
    $('paymentBreadcrumb').classList.remove('active');
    $('details').style.display = "block";
    $('detailsInputs').style.display = "block";
    $('detailsLoading').style.display = "none";
    $('payment').style.display = "none";
}

function validateDetails() {
    $('paymentBreadcrumb').classList.add('active');
    $('checkoutBreadcrumb').classList.remove('active');
    $('detailsInputs').style.display = "none";
    $('detailsLoading').style.display = "block";
    setTimeout(() => {
        document.title = "Payment • BEEX - The swiss army knife of pumps.";
        $('detailsLoading').style.display = "block";
        $('details').style.display = "none";
        $('payment').style.display = "block";
        countdown("timer", 10, 0);
    }, 650);
}

