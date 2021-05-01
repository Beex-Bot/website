function backToDetails() {
    document.title = "Checkout &bullet; BEEX - The swiss army knife of pumps.";
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
        document.title = "Payment &bullet; BEEX - The swiss army knife of pumps.";
        $('detailsLoading').style.display = "block";
        $('details').style.display = "none";
        $('payment').style.display = "block";
    }, 700);
}

function submitPayment() {
    alert('You did it!');
}
