const logo = document.getElementById('dvd-logo');

// Initial position and speed
let x = 0;
let y = 0;
let speedX = 2;
let speedY = 2;

function moveLogo() {
    // Update position
    x += speedX;
    y += speedY;

    // Check for collisions with the screen edges
    if (x + logo.clientWidth >= window.innerWidth || x <= 0) {
        speedX = -speedX;
        logo.style.backgroundColor = getRandomColor();
    }

    if (y + logo.clientHeight >= window.innerHeight || y <= 0) {
        speedY = -speedY;
        logo.style.backgroundColor = getRandomColor();
    }

    // Apply new position
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    // Call the moveLogo function again on the next frame
    requestAnimationFrame(moveLogo);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Start the animation
moveLogo();
