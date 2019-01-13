export default (placeholder, src, alt, width, height) => {
  return `<img src="${src ? src : placeholder}" alt="${alt}" width="${width}" height="${height}">`;
};
