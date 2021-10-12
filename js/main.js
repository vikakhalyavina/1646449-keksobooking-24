function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return max <= min ? false : Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntFromRange(-10, 10);

function getRandomArbitrary(min, max, maxDigits = 0) {
  const digitsDegree = 10 ** maxDigits;
  return max <= min
    ? false
    : ~~Math.abs(
        ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree
      );
}

getRandomArbitrary(-10, 10, 5);
