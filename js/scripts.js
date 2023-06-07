window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.visibility = 'hidden');
});

$(document).ready(function() {
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
});

$(document).ready(function() {
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
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Get reference to the "last-buttons" and "image-container" elements
    const lastButtons = document.querySelector('.last-buttons');
    const imageContainer = document.querySelector('.image-container');

    // Start off in the initial state (could also be controlled via CSS)
    let isMoved = false;

    // Attach click event listener to the "last-buttons" element
    lastButtons.addEventListener('click', () => {
        if (isMoved) {
            // If the image container is already moved, move it back to the initial position
            imageContainer.style.left = '38px';
        } else {
            // Otherwise, move the image container to the left
            imageContainer.style.left = '-140px';
        }

        // Flip the isMoved flag
        isMoved = !isMoved;
    });
});






