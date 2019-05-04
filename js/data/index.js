class GameData {
  constructor() {
    this._data = null;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  get images() {
    return this._images;
  }

  set images(value) {
    this._images = value;
  }

  getImage(key) {
    let res;

    for (const img of this._images) {
      if (img.src === key) {
        res = img;
        break;
      }
    }

    return res;
  }

}

const gameData = new GameData();

export default gameData;

