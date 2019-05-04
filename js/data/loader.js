import adaptData from './adapter';

const serverUrl = `https://es.dump.academy/pixel-hunter/questions`;

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
    return fetch(serverUrl)
    .then(checkResult)
    .then((response) => response.json())
    .then((data) => adaptData(data));
  }
}
