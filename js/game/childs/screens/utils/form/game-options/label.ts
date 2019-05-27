export default (type, name, span, styled) => {

  const style = styled ? `style="background-color: green"` : null;

  return `
  <label class="game__answer game__answer--${type}">
    <input class="visually-hidden" name="${name}" type="radio" value="${type}">
    <span ${style}>${span}</span>
  </label>
  `;
};
