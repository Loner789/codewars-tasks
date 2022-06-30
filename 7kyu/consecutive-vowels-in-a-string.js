// https://www.codewars.com/kata/62a933d6d6deb7001093de16/

function getTheVowels(word) {
  let string = "aeiou",
    count = 0,
    letter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== string[letter]) continue;
    else {
      letter = (letter + 1) % string.length;
      count++;
    }
  }

  return count;
}
