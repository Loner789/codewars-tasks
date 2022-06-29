// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}