import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

function createImageCard(image) {
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${image.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${image.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${image.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${image.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `;
}

export function createGallery(images) {
    const createMurkup = images.map(createImageCard).join('');
    imageList.insertAdjacentHTML('beforeend', createMurkup);

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    lightbox.refresh();
}

export function clearGallery() {
    imageList.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}