import IntroView from './intro-view';
import {Appl} from '../common/utils/index';
import Loader from '../data/loader';
import gameData from '../data/index';

export default class IntroPresenter {
  constructor() {
    this._root = document.createElement(`div`);
    this.setLoading(false);
    this._loading = this._root.querySelector(`#loading`);
    this._clickOk = false;
  }

  setLoading(loaded) {
    this._root.innerHTML = ``;
    const view = new IntroView(loaded);
    this._root.appendChild(view.element);
  }

  startLoading() {
    this._interval = setInterval(() => {
      const {hidden} = this._loading;
      this._loading.hidden = !hidden;
    }, 500);
    return () => clearInterval(this._interval);
  }

  afterLoadData() {
    this.setLoading(true);
    this._root.onclick = this.handleClick.bind(this);
    setTimeout(() => {
      this.handleClick();
    }, 2000);
  }

  loadImage(url) {
    return new Promise((resolve, fail) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => fail(`Не удалось загрузить image: url=${url}`);
      image.src = url;
    });
  }

  loadImages(data) {
    const res = [];
    const srcSet = new Set();
    for (const itr of data) {
      itr.forEach((element) => {
        const {src} = element;
        srcSet.add(src);
      });
    }

    srcSet.forEach((src) => {
      res.push(this.loadImage(src));
    });

    return res;
  }

  loadData() {
    this.stopLoading = this.startLoading();

    // иммитация долгой загрузки
    setTimeout(() => {
      Loader.loadData()
      .then((data) => {
        gameData.data = data;
        return data.map((itr) => itr.images);
      })
      .then((data) => this.loadImages(data))
      .then((data) => Promise.all(data))
      .then((images) => {
        gameData.images = images;
      })
      .then(() => this.afterLoadData())
      .catch((err) => Appl.showError(err))
      .then(() => this.stopLoading());
    }, 2000);
  }

  get element() {
    return this._root;
  }

  handleClick() {
    if (!this._clickOk) {
      this._clickOk = true;
      Appl.showWelcome();
    }
  }
}
