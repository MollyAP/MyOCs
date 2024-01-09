const home = document.getElementById('home');

function clickHandler() {
    // Initial position
    home.style.position = 'relative';
    home.style.bottom = '0';

    homebutton.classList.add('rotate')

    // Hop animation
    const hopHeight = 50;
    const hopDuration = 500;
    const fallDuration = 500;

    // Hop
    home.style.transition = `transform ${hopDuration / 2}ms ease-out`;
    home.style.transform = 'translateY(-' + hopHeight + 'px)';

    // Fall
    setTimeout(() => {
        home.style.transition = `transform ${fallDuration / 2}ms ease-in`;
        home.style.transform = 'translateY(100vh)';
    }, hopDuration);

    // Redirect after animation completes
    setTimeout(() => {
        window.location.href = './';
    }, hopDuration + fallDuration);

    // Remove the click event listener to prevent multiple clicks
    home.removeEventListener('click', clickHandler);
}

home.addEventListener('click', clickHandler);
