// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const galleryImg = galleryItems.map(item=>`
  <a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description}/>
</a>`).join(" ")
gallery.innerHTML = galleryImg

new SimpleLightbox('.gallery a', {
    captionDelay: 250});

