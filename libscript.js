let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("book-slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;

    const slides = document.getElementsByClassName("book-slide");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();

    // Attach click event handlers to navigation arrows
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});
