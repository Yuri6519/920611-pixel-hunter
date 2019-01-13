export default (type, name, span) => {
  return `
  <label class="game__answer game__answer--${type}">
    <input class="visually-hidden" name="${name}" type="radio" value="${type}">
    <span>${span}</span>
  </label>
  `;
};
