(() => {
  'use strict';

  const isEscEvent = (evt, action) => {
    if (evt.key === 'Escape') {
      action();
    }
  };

  const isEnterEvent = (evt, action) => {
    if (evt.key === 'Enter') {
      action();
    }
  };

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomComment = () => ({
    avatar: `img/avatar-${getRandomNumber(
      window.data.MIN_AVATAR_NUMBER,
      window.data.MAX_AVATAR_NUMBER
    )}.svg`,
    message:
      window.data.messages[getRandomNumber(0, window.data.messages.length - 1)],
    name: window.data.names[getRandomNumber(0, window.data.names.length - 1)],
  });

  const getRandomCommentArray = () => {
    const commentsAmount = getRandomNumber(
      window.data.MIN_COMMENT_NUMBER,
      window.data.MAX_COMMENT_NUMBER
    );
    const commentArray = [];

    for (let i = 0; i < commentsAmount; i++) {
      commentArray.push(getRandomComment());
    }
    return commentArray;
  };

  const getRandomArray = (amountOfObjects) => {
    const photos = [];
    for (let i = 1; i < amountOfObjects + 1; i++) {
      const element = {
        url: `photos/${i}.jpg`,
        description:
          window.data.descriptions[
            getRandomNumber(0, window.data.descriptions.length - 1)
          ],
        likes: getRandomNumber(window.data.MIN_LIKES, window.data.MAX_LIKES),
        comments: getRandomCommentArray(),
      };
      photos.push(element);
    }
    return photos;
  };

  window.data.photosArray = getRandomArray(25);
  console.log(window.data.photosArray);

  window.util = {
    isEscEvent,
    isEnterEvent,
  };
})();
