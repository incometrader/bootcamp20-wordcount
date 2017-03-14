const words = function wordCount(str) {
  const splitArr = str.split(/\s+/m);
  const count = {};
  splitArr.forEach((entry) => {
    if (Object.prototype.hasOwnProperty.call(count, entry)) {
      count[entry] += 1;
    } else {
      count[entry] = 1;
    }
  });

  return count;
};

module.exports = words;
