export const shortenText = text => {
  if (text.length >= 100) {
    return `${text.substr(0, 100)}...`;
  }
  return text;
};