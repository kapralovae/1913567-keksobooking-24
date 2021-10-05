// Материалы для написания функций: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt (from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
// нужен ли в этом месте тернарный оператор?
// (from <0 || to <0) ? return (alert('Вводите только положительные значения')) : return (Math.round(Math.random(from, to) * Math.max(from, to)))
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    let memory = from;
    from = to;
    to = memory;

    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  return Math.floor(Math.random() * (to - from + 1) + from); // функция Math.random возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1).

  // Может показаться заманчивым использовать Math.round() для округления, но это может сделать распределение неравномерным, что может оказаться неприемлемым для ваших нужд.
  // Каких нужд? Почему не стоит использовать Math.round()?
  // Если написать return Math.round(Math.random() * Math.max(from, to)); не перезаписывав from = Math.ceil(from); и to = Math.floor(ro); , то результат тот же?
  // фунция Math.round округляет до ближайшего целого числа Math.round(1.4) = 1 Math.round(1.5) = 2, поэтому диапозон станет [0, 1].
}

getRandomInt();

function getRandomFloat (from, to, lotNumber) {
  lotNumber = Math.pow(10, Math.round(lotNumber));
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    let memory = from;
    from = to;
    to = memory;

    return Math.floor((Math.random() * (to - from + 1) + from) * lotNumber) / lotNumber;
  }

  return Math.floor((Math.random() * (to - from + 1) + from) * lotNumber) / lotNumber;
}

getRandomFloat();
