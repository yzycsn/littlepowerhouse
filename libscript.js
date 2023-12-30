let slideIndex = 0;

function showSlides() {
    const slidesContainer = document.getElementById("slideshow-container");
    slidesContainer.innerHTML = ''; // Clear existing content

    // Array of book covers (replace with actual cover filenames)
    const bookCovers = ['book1_cover.jpg', 'book2_cover.jpg'];

    for (let i = 0; i < bookCovers.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add('book-slide', 'fade');

        const img = document.createElement('img');
        img.src = `books/${bookCovers[i]}`;
        img.alt = `Book ${i + 1} Cover`;

        // Set a fixed height for each book cover based on the aspect ratio (1:1.41)
        img.style.height = 'calc(100vw / 1.41)';

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.innerHTML = `<a href="books/book${i + 1}.pdf" target="_blank">Book ${i + 1}</a>`;

        slide.appendChild(img);
        slide.appendChild(bookTitle);

        slidesContainer.appendChild(slide);
    }

    // Display the current slide
    slidesContainer.getElementsByClassName('book-slide')[slideIndex].style.display = 'block';
}

function plusSlides(n) {
    slideIndex += n;

    const slides = document.getElementsByClassName('book-slide');

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();

    // Attach click event handlers to navigation arrows
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });
});
