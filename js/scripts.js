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
                svgIcon.find(".svg-path").css("stroke", "white"); 
            } else {
                svgIcon.find(".svg-path").css("fill", "white"); 
            }
            $(this).append('<span class="hover-text">Lorem ipsum</span>');
        }, function() { // on mouse leave
            $(this).css({
                "width": "60px",
                "background-color": "transparent"
            });
            let svgIcon = $(this).children(".svg-icon");

            if (svgIcon.hasClass('share-icon')) {
                svgIcon.find(".svg-path").css("stroke", "black"); 
            } else {
                svgIcon.find(".svg-path").css("fill", "black"); 
            }

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
            imageContainer.style.left = '';
        } else {
            if (window.innerWidth < 960) {
                imageContainer.style.left = '-400px';
            } else {
                imageContainer.style.left = '-15%';
            }
        }
        isMoved = !isMoved;
    });
});





