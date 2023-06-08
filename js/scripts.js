$(document).ready(function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.visibility = 'hidden');

    $(".social-icons").hover(
        function() { // on mouse enter
            let svgIcon = $(this).children(".svg-icon");

            if (svgIcon.hasClass('share-icon')) {
                svgIcon.find(".svg-path").css("stroke", "white"); 
            } else {
                svgIcon.find(".svg-path").css("fill", "white"); 
            }
        }, function() { // on mouse leave
            let svgIcon = $(this).children(".svg-icon");

            if (svgIcon.hasClass('share-icon')) {
                svgIcon.find(".svg-path").css("stroke", "black"); 
            } else {
                svgIcon.find(".svg-path").css("fill", "black"); 
            }

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
            if (window.innerWidth < 600) {
                imageContainer.style.left = '-600px';
            } else if (window.innerWidth < 700) {
                imageContainer.style.left = '-470px';
            } else if (window.innerWidth <960){
                imageContainer.style.left = '-220px';
            } else if (window.innerWidth <1130){
                imageContainer.style.left = '-600px'
            } else if (window.innerWidth <1350){
                imageContainer.style.left = '-500px'
            } else {
                imageContainer.style.left = '-200px'
            }
        }
        isMoved = !isMoved;
    });
});



/* 

bottomButtons.addEventListener('click', () => {
    if (isMoved) {
        imageContainer.style.left = '';
    } else {
        if (window.innerWidth < 960) {
            imageContainer.style.left = '-600px';
        } else {
            imageContainer.style.left = '-15%';
        }
    }
    isMoved = !isMoved;
}); */