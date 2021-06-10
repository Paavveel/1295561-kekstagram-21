(() => {
  'use strict';

  const body = document.querySelector('body');
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

  const bigPicture = document.querySelector('.big-picture');
  // bigPicture.classList.remove('hidden');

  const bigPicturePreview = bigPicture.querySelector('.big-picture__preview');

  const showPreview = (photos) => {
    bigPicturePreview.querySelector('.big-picture__img img').src =
      photos[0].url;
    bigPicturePreview.querySelector('.social__caption').textContent =
      photos[0].description;
    bigPicturePreview.querySelector('.likes-count').textContent =
      photos[0].likes;
    bigPicturePreview.querySelector('.comments-count').textContent =
      photos[0].comments.length;
    bigPicturePreview.querySelector('.social__comment .social__picture').src =
      photos[0].comments[0].avatar;
    bigPicturePreview.querySelector('.social__comment .social__picture').alt =
      photos[0].comments[0].name;
    bigPicturePreview.querySelector(
      '.social__comment .social__text'
    ).textContent = photos[0].comments[0].message;

    body.classList.add('modal-open');

    bigPicturePreview
      .querySelector('.social__comment-count')
      .classList.add('hidden');
    bigPicturePreview.querySelector('.comments-loader').classList.add('hidden');
  };

  // showPreview(window.data.photosArray);
  window.main = {
    body,
  };
})();
