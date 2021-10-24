// Материалы для написания функций: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt (from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    const memory = from;
    from = to;
    to = memory;
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

getRandomInt();

function getRandomFloat (from, to, lotNumber) {
  lotNumber = Math.pow(10, Math.round(lotNumber));
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    const memory = from;
    from = to;
    to = memory;
  }

  return Math.floor((((((Math.random() * lotNumber) + 1) / lotNumber) * (to - from)) + from) * lotNumber) / lotNumber;
}

getRandomFloat();

export {getRandomInt, getRandomFloat};
