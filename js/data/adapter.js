import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../common/constants/index';

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

const mapGameLevel = {
  [QuestionType.TWO_OF_TWO]: FIRST_GAME,
  [QuestionType.TINDER_LIKE]: SECOND_GAME,
  [QuestionType.ONE_OF_THREE]: THIRD_GAME
};

const mapImageType = {
  [AnswerType.PAINTING]: `paint`,
  [AnswerType.PHOTO]: `photo`,
};

const adaptData = (data) => {
  const res = data.map((itr) => {
    const {type: dataType, question, answers} = itr;

    const type = mapGameLevel[dataType] || null;
    if (!type) {
      throw new Error(`adapter::Неизвестный тип данных: ${type}`);
    }

    if (!question) {
      throw new Error(`adapter::Пустая переменная question`);
    }

    if (!answers) {
      throw new Error(`adapter::Пустой массив answers`);
    }
    const images = answers.map((img) => {
      const {image = {}, type: imgType} = img;
      const {url: src, width, height} = image;
      const adpType = mapImageType[imgType];
      return {src, type: adpType, width, height};
    });

    return {type, question, images};
  });

  return res;

};

export default adaptData;
