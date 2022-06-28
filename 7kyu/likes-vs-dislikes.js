// https://www.codewars.com/kata/62ad72443809a4006998218a/

function likeOrDislike(buttons) {
    return buttons.reduce((prev, curr) => prev === curr ? Nothing : curr, Nothing);
  }