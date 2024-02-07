window.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

    function showImage(index) {

        images[index].style.opacity = '1';
    }

    function hideImage(index) {
        images[index].style.opacity = '0';
    }

    function showNextImage() {
        hideImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);

    }

    showImage(currentIndex);
    setInterval(showNextImage, 1000);
});