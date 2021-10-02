function getRandomIntFromRange(from, to) {
  return to <= from ? false : Math.floor(Math.random() * (to - from)) + from;
}
getRandomIntFromRange(0, 200);

function getRandomArbitrary(min, max, maxDigits = 0) {
  const digitsDegree = 10 ** maxDigits;
  return max <= min
    ? false
    : ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandomArbitrary(1, 2, 5);
