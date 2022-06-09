export const parseQueryString = (url) => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  const params = {};
  let match;
  /* eslint-disable no-cond-assign */
  while (match = regex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
};
