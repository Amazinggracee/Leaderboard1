import renderScores from './design.js';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  renderScores(result);
};

export default getData;
