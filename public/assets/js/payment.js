function backToDetails() {
    $('details').style.display = "block";
    $('payment').style.display = "none";
}

function validateDetails() {
    $('detailsInputs').style.display = "none";
    $('detailsLoading').style.display = "block";
    setTimeout(() => {
        $('detailsLoading').style.display = "block";
        $('details').style.display = "none";
        $('payment').style.display = "block";
    }, 700);
}
