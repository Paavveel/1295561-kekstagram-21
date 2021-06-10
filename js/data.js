(() => {
  'use strict';

  const MIN_LIKES = 15;
  const MAX_LIKES = 200;
  const MIN_AVATAR_NUMBER = 1;
  const MAX_AVATAR_NUMBER = 6;
  const MIN_COMMENT_NUMBER = 5;
  const MAX_COMMENT_NUMBER = 10;
  const SCALE_MIN = 25;
  const SCALE_MAX = 75;
  const SCALE_FULL = 100;
  const SCALE_COUNT = 25;

  const descriptions = [
    'Описание 1',
    'Описание 2',
    'Описание 3',
    'Описание 4',
    'Описание 5',
    'Описание 6',
    'Описание 7',
    'Описание 8',
    'Описание 9',
    'Описание 10',
  ];

  const names = [
    'Татьяна',
    'Мирон',
    'Артём',
    'Маргарита',
    'Евгения',
    'Иван',
    'Владимир',
    'Михаил',
    'Дарина',
    'Сафия',
  ];
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  let photosArray;
  window.data = {
    MIN_LIKES,
    MAX_LIKES,
    MIN_AVATAR_NUMBER,
    MAX_AVATAR_NUMBER,
    MIN_COMMENT_NUMBER,
    MAX_COMMENT_NUMBER,
    descriptions,
    names,
    messages,
    photosArray,
    SCALE_COUNT,
    SCALE_MIN,
    SCALE_MAX,
    SCALE_FULL,
  };
})();
