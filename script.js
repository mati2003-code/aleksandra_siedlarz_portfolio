document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImg && e.target !== closeBtn) {
            lightbox.style.display = 'none';
        }
    });

    // Zamknięcie lightboxa przy naciśnięciu klawisza Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    });
});



