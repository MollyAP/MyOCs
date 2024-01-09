document.addEventListener('DOMContentLoaded', () => {
    const constructionModal = document.getElementById('constructionModal');
    const okButton = document.getElementById('okButton');

    // Display the modal on page load
    constructionModal.style.display = 'block';

    // Close the modal and hide the iframe when the "OK" button is clicked
    okButton.addEventListener('click', () => {
        constructionModal.style.display = 'none';

        // Hide the iframe by setting its style.display to 'none'
        const iframe = window.parent.document.getElementById('constructionIframe');
        if (iframe) {
            iframe.style.display = 'none';
        }
    });
});
