import {adaptData, adaptStat} from './adapters/index';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const QUESTIONS = `questions`;
const STATS = `stats`;
const APP_ID = 96857401;
const DEF_NAME = `unknownUser`;

const checkResult = (response) => {
  if (response.ok) {
    return response;
  } else {
    const {status = `???`, ststusText = ``} = response;
    throw new Error(`${status}:${ststusText}`);
  }
};

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/${QUESTIONS}`)
    .then(checkResult)
    .then((response) => response.json())
    .then((data) => adaptData(data));
  }

  static loadStat(name = DEF_NAME) {
    return fetch(`${SERVER_URL}/${STATS}/${APP_ID}-${name}`)
    .then(checkResult)
    .then((response) => response.json())
    .then((data) => adaptStat(data));
  }

  static saveStat(data = {}, name = DEF_NAME) {
    const reqSet = {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      }
    };
    const url = `${SERVER_URL}/${STATS}/${APP_ID}-${name}`;
    return fetch(url, reqSet).then(checkResult);
  }
}
