// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/

function stairsIn20(s) {
  let oneYear = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      oneYear += s[i][j];
    }
  }

  return oneYear * 20;
}
