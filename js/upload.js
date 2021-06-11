(() => {
  'use strict';

  const {
    DefaultSettings,
    Scale,
    setEffectLevel,
    setPinStyles,
    resetEffect,
    applyEffect,
    resetScale,
    changeScale,
  } = window.editing;

  const { getCoords, isEscEvent } = window.util;

  const uploadFile = document.querySelector('#upload-file');

  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');

  const scaleControlSmaller = imgUploadOverlay.querySelector(
    '.scale__control--smaller'
  );
  const scaleControlBigger = imgUploadOverlay.querySelector(
    '.scale__control--bigger'
  );

  const effects = imgUploadOverlay.querySelector('.effects');
  const effectLevelPin = imgUploadOverlay.querySelector('.effect-level__pin');
  const effectLevelLine = imgUploadOverlay.querySelector(`.effect-level__line`);

  const onScaleControlSmallerClick = () => {
    changeScale(Scale.MIN, Scale.MAX, -Scale.STEP);
  };

  const onScaleControlBiggerClick = () => {
    changeScale(Scale.MIN, Scale.MAX, Scale.STEP);
  };

  const openImgUploadOverlay = () => {
    imgUploadOverlay.classList.remove('hidden');
    window.main.body.classList.add('modal-open');
  };
  const closeImgUploadOverlay = () => {
    imgUploadOverlay.classList.add('hidden');
    window.main.body.classList.remove('modal-open');
  };

  const onOverlayEscPress = (evt) => {
    evt.preventDefault();
    isEscEvent(evt, closeImgUploadOverlay);
    document.removeEventListener('keydown', onOverlayEscPress);
    uploadCancel.removeEventListener('click', onUploadCancelClick);
    scaleControlSmaller.removeEventListener(
      'click',
      onScaleControlSmallerClick
    );
    scaleControlBigger.removeEventListener('click', onScaleControlBiggerClick);
    uploadFile.value = '';
  };
  const onUploadCancelClick = () => {
    closeImgUploadOverlay();
    document.removeEventListener('keydown', onOverlayEscPress);
    uploadCancel.removeEventListener('click', onUploadCancelClick);
    scaleControlSmaller.removeEventListener(
      'click',
      onScaleControlSmallerClick
    );
    scaleControlBigger.removeEventListener('click', onScaleControlBiggerClick);
    uploadFile.value = '';
  };

  effectLevelPin.addEventListener(`mousedown`, () => {
    const lineXCoord = getCoords(effectLevelLine).left;
    const deltaXMax = effectLevelLine.offsetWidth;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();

      const pinXCoord = moveEvt.clientX;
      const deltaX = pinXCoord - lineXCoord;

      if (deltaX >= 0 && deltaX <= deltaXMax) {
        const effectLevelFactor = (deltaX / deltaXMax).toFixed(2);
        setEffectLevel(effectLevelFactor);
        setPinStyles(effectLevelFactor);
      }
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

  effects.addEventListener(`click`, (evt) => {
    const effect = evt.target.value;
    if (!effect) return;

    resetEffect();
    setPinStyles(DefaultSettings.FACTOR);
    applyEffect(effect);
    resetScale();
  });

  uploadFile.addEventListener('change', () => {
    openImgUploadOverlay();
    resetEffect();
    setPinStyles(DefaultSettings.FACTOR);
    applyEffect(DefaultSettings.EFFECT);
    document.addEventListener('keydown', onOverlayEscPress);
    uploadCancel.addEventListener('click', onUploadCancelClick);
    scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
    scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
  });
})();
