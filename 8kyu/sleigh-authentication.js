// https://www.codewars.com/kata/52adc142b2651f25a8000643/

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  }

  return false;
};
