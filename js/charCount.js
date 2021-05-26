function charCount(str) {
  str.split(" ").join("");
  let dictionary = {};
  for (let i = 0; i < str.length; ++i) {
    if (dictionary[str[i]] == null) {
      dictionary[str[i]] = 1;
    }
    else {
      dictionary[str[i]] = dictionary[str[i]] + 1;
    }
  }
  return dictionary;
};

module.exports = charCount;