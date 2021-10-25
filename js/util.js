function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return max <= min ? false : Math.abs(result);
}
getRandomIntFromRange(-10, 10);

function getRandomArbitrary(min, max, maxDigits = 0) {
  const digitsDegree = 10 ** maxDigits;
  const result =
    ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  return max <= min ? false : Math.abs(result);
}

getRandomArbitrary(-10, 10, 5);

const getRandomArrayElement = (elements) =>
  elements[getRandomIntFromRange(0, elements.length - 1)];

function getElement(parentElement, elementSelector, elementContent) {
  const element = parentElement.querySelector(elementSelector);
  if (elementContent) {
    element.textContent = elementContent;
  }
  return element;
}

export {
  getRandomIntFromRange,
  getRandomArbitrary,
  getRandomArrayElement,
  // eslint-disable-next-line comma-dangle
  getElement,
};
