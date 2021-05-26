def char_count(str):
  str = str.replace(" ", "")
  dictionary = {}
  for letter in str:
    if dictionary.get(letter) == None:
      dictionary[letter] = 1
    else:
      dictionary[letter] = dictionary.get(letter) + 1
  return dictionary
