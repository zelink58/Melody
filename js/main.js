$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-itaji path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modaCloseButton = $('.modal-close-button')
    var viewFlatsButton = $('.view-flats')
    

    floorPath.on('mouseover', function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor")
    $(".counter").text(currentFloor);
    });

    floorPath.on('click', function () {
        modal.toggleClass('is-open');
    })

    modaCloseButton.on('click', function () {
        modal.toggleClass('is-open');
    })

    viewFlatsButton.on('click', function () {
        modal.toggleClass('is-open');
    })

    counterUp.on("click", function () {
    if (currentFloor < 17) {

        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
        });

});