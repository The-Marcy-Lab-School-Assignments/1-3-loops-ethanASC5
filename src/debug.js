const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i ++) {
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = '';
  for (let num = 0; num < 2; num++) {
    for (let i = 0; i < 10; i++) {
      result += `-${num}${i}`;
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
