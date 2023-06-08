$(document).ready(function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.visibility = 'hidden');

    $(".social-icons").hover(
        function() { // on mouse enter
            $(this).css({
                "width": "238px",
                "border-radius": "96px",
                "background-color": "#789376"
            });
            let svgIcon = $(this).children(".svg-icon");

            if (svgIcon.hasClass('share-icon')) {
                svgIcon.find(".svg-path").css("stroke", "white"); // White SVG icon stroke
            } else {
                svgIcon.find(".svg-path").css("fill", "white"); // White SVG icon fill
            }
            $(this).append('<span class="hover-text">Lorem ipsum</span>');
        }, function() { // on mouse leave
            $(this).css({
                "width": "60px",
                "background-color": "transparent"
            });
            let svgIcon = $(this).children(".svg-icon");

            if (svgIcon.hasClass('share-icon')) {
                svgIcon.find(".svg-path").css("stroke", "black"); // Black SVG icon stroke
            } else {
                svgIcon.find(".svg-path").css("fill", "black"); // Black SVG icon fill
            }

            // remove the text when the mouse leaves
            $(this).children('.hover-text').remove();
        }
    );

    $("#centered-button").hover(
        function() { // on mouse enter
            $(this).css({
                "background-color": "#0D9206",
            }).addClass("bounce");
        }, function() { // on mouse leave
            $(this).css({
                "background-color": "#FF8800",
            }).removeClass("bounce");
        }
    );

    const bottomButtons = document.querySelector('.bottom-buttons');
    const imageContainer = document.querySelector('.image-container');
    let isMoved = false;

    bottomButtons.addEventListener('click', () => {
        if (isMoved) {
            // If the image container is already moved, reset it back to the original CSS styles
            imageContainer.style.left = '';
        } else {
            // Check the width of the viewport
            if (window.innerWidth < 960) {
                // If it's less than 960px, set left to 10%
                imageContainer.style.left = '10%';
            } else {
                // Otherwise, set left to 30%
                imageContainer.style.left = '-15%';
            }
        }
        isMoved = !isMoved;
    });
});





