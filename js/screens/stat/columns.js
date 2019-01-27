const HEADER_SPEED = `Бонус за скорость:`;
const HEADER_LIFE = `Бонус за жизни:`;
const HEADER_SLOW = `Штраф за медлительность:`;

const headers = {
  'fast': HEADER_SPEED,
  'alive': HEADER_LIFE,
  'slow': HEADER_SLOW,
};

export const resultColumn = (index) => {
  const res = document.createElement(`td`);
  res.classList.add(`result__number`);
  res.innerText = index;
  return res;
};

export const indicatortColumn = (resVictory) => {
  const res = document.createElement(`td`);
  if (resVictory) {
    res.colSpan = 2;
  }
  return res;
};

export const resultTotalColumn = (text, resVictory) => {
  const res = document.createElement(`td`);
  res.classList.add(`result__total`);
  res.innerText = resVictory ? text : ``;
  return res;
};

export const resultTotalFInalColumn = (text, resVictory) => {
  const res = resultTotalColumn(``);
  res.classList.add(`result__total--final`);
  if (resVictory) {
    res.colSpan = 5;
  }
  res.innerText = text;
  return res;
};

export const resultPointsColumn = (text) => {
  const res = document.createElement(`td`);
  res.classList.add(`result__points`);
  res.innerText = `× ${text}`;
  return res;
};

export const resultExtraColumn = (header, mode) => {
  const text = mode ? headers[mode] : header;
  const res = document.createElement(`td`);
  res.classList.add(`result__extra`);
  res.innerText = text;
  return res;
};

export const resultExtraSpanColumn = (text, mode) => {
  const res = resultExtraColumn(text);
  const span = document.createElement(`span`);
  const spanClass = `stats__result--${mode}`;
  span.classList.add(`stats__result`);
  span.classList.add(spanClass);
  res.appendChild(span);
  return res;
};

