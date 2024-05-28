document.addEventListener('DOMContentLoaded', function() {
    const catImage = document.getElementById('cat-image');
    const newCatButton = document.getElementById('new-cat-button');

    function fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                catImage.src = data[0].url;
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    }

    newCatButton.addEventListener('click', fetchCatImage);

    // Fetch a cat image on initial load
    fetchCatImage();
});
