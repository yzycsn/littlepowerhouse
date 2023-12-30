let slideIndex = 0;

function showSlides() {
    const slidesContainer = document.getElementById("slideshow-container");
    //slidesContainer.innerHTML = ''; // Clear existing content

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

        // Add click event listener to redirect to the corresponding PDF file
        img.addEventListener('click', function() {
            window.open(`books/book${i + 1}.pdf`, '_blank');
        });

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('book-title');
        bookTitle.innerHTML = `<a href="books/book${i + 1}.pdf" target="_blank">Book ${i + 1}</a>`;

        slide.appendChild(img);
        slide.appendChild(bookTitle);

        slidesContainer.appendChild(slide);
    }

    //

