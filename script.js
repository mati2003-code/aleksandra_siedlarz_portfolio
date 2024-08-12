// Skrypt lightbox
document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    const closeLightbox = document.querySelector(".lightbox .close");
    closeLightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
});

