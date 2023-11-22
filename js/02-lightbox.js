import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const images = galleryItems.map(
    ({
        preview,
        original,
        description,
    }) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
);
galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

const galleryImages = document.querySelectorAll(".gallery__item");

new SimpleLightbox(galleryImages, {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});
