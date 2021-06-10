(() => {
  'use strict';

  const uploadFile = document.querySelector('#upload-file');

  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');
  const imgUploadPreview = imgUploadOverlay.querySelector(
    '.img-upload__preview img'
  );
  const scaleControlValue = imgUploadOverlay.querySelector(
    '.scale__control--value'
  );
  const scaleControlSmaller = imgUploadOverlay.querySelector(
    '.scale__control--smaller'
  );
  const scaleControlBigger = imgUploadOverlay.querySelector(
    '.scale__control--bigger'
  );

  const effectLevelPin = imgUploadOverlay.querySelector('.effect-level__pin');
  const effects = imgUploadOverlay.querySelector('.effects__list');
  const effectLevel = imgUploadOverlay.querySelector(
    '.img-upload__effect-level'
  );

  const onScaleControlSmallerClick = () => {
    let scaleValue = scaleControlValue.value;

    scaleValue = Number(scaleValue.slice(0, scaleValue.length - 1));

    if (scaleValue > window.data.SCALE_MIN) {
      scaleValue -= window.data.SCALE_COUNT;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.style.transform = `scale(0.${scaleValue})`;
    }
  };

  const onScaleControlBiggerClick = () => {
    let scaleValue = scaleControlValue.value;

    scaleValue = Number(scaleValue.slice(0, scaleValue.length - 1));

    if (scaleValue < window.data.SCALE_MAX) {
      scaleValue += window.data.SCALE_COUNT;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.style.transform = `scale(0.${scaleValue})`;
    } else if (scaleValue < window.data.SCALE_FULL) {
      scaleValue += window.data.SCALE_COUNT;
      scaleControlValue.value = `${scaleValue}%`;
      imgUploadPreview.style = '';
    }
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
    window.util.isEscEvent(evt, closeImgUploadOverlay);
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

  uploadFile.addEventListener('change', () => {
    openImgUploadOverlay();
    document.addEventListener('keydown', onOverlayEscPress);
    uploadCancel.addEventListener('click', onUploadCancelClick);
    scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
    scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);

    effects.addEventListener('change', (evt) => {
      const element = evt.target.id;

      if (!element) return;
      imgUploadPreview.classList = '';

      switch (element) {
        case 'effect-none':
          imgUploadPreview.classList.add('effects__preview--none');
          effectLevel.hidden = true;
          break;
        case 'effect-chrome':
          imgUploadPreview.classList.add('effects__preview--chrome');

          break;
        case 'effect-sepia':
          imgUploadPreview.classList.add('effects__preview--sepia');

          break;
        case 'effect-marvin':
          imgUploadPreview.classList.add('effects__preview--marvin');

          break;
        case 'effect-phobos':
          imgUploadPreview.classList.add('effects__preview--phobos');

          break;
        case 'effect-heat':
          imgUploadPreview.classList.add('effects__preview--heat');

          break;

        default:
          break;
      }
    });

    effectLevelPin.addEventListener('mouseup', () => {
      console.log('up');
    });
  });
})();
