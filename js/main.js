(() => {
  'use strict';

  const pictureTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');

  const renderPhoto = (photos) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = photos.url;
    pictureElement.querySelector('.picture__comments').textContent =
      photos.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = photos.likes;

    return pictureElement;
  };

  const pictures = document.querySelector('.pictures');

  const render = (photos) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < photos.length; i++) {
      fragment.append(renderPhoto(photos[i]));
    }

    pictures.append(fragment);
  };
  render(window.data.photosArray);
})();
