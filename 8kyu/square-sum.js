// https://www.codewars.com/kata/515e271a311df0350d00000f/

function squareSum(numbers) {
  const arr = numbers.map((item) => item ** 2);
  const result = arr.reduce((a, b) => a + b, 0);

  return result;
}
