import {assert} from 'chai';
import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../../common/constants/index';
import adaptData from './adapter';

const serverData = [
  {
    "type": `two-of-two`,
    "question": `Угадайте для каждого изображения фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      }
    ]
  },
  {
    "type": `tinder-like`,
    "question": `Угадай, фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите рисунок среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите фото среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  }
];

const adapterData = [
  {
    type: FIRST_GAME,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    images: [
      {
        src: `http://placehold.it/468x458`,
        type: `photo`,
        width: 468,
        height: 458,
      },
      {
        src: `http://placehold.it/468x458`,
        type: `paint`,
        width: 468,
        height: 458,
      }
    ]
  },
  {
    type: SECOND_GAME,
    question: `Угадай, фото или рисунок?`,
    images: [
      {
        src: `http://placehold.it/705x455`,
        type: `photo`,
        width: 705,
        height: 455,
      },
    ]
  },
  {
    type: THIRD_GAME,
    question: `Найдите рисунок среди изображений`,
    images: [
      {
        src: `http://placehold.it/304x455`,
        type: `photo`,
        width: 304,
        height: 455,
      },
      {
        src: `http://placehold.it/304x455`,
        type: `paint`,
        width: 304,
        height: 455,
      },
      {
        src: `http://placehold.it/304x455`,
        type: `photo`,
        width: 304,
        height: 455,
      },
    ]
  },
  {
    type: THIRD_GAME,
    question: `Найдите фото среди изображений`,
    images: [
      {
        src: `http://placehold.it/304x455`,
        type: `paint`,
        width: 304,
        height: 455,
      },
      {
        src: `http://placehold.it/304x455`,
        type: `paint`,
        width: 304,
        height: 455,
      },
      {
        src: `http://placehold.it/304x455`,
        type: `photo`,
        width: 304,
        height: 455,
      },
    ]
  }
];


describe(`Test adapter data`, () => {
  it(`should adaptData() return object equal to adapterData`, () => {
    const res = adaptData(serverData);
    assert.deepEqual(res, adapterData);
  });
});
