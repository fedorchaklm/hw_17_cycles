document.write("<h2>Написати цикли, які зможуть:</h2>");

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
const numbers = [];
for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
document.write(
  "<h3>1. Вивести на сторінку в один рядок через кому числа від 10 до 20.</h3>"
);
document.write(`<p>${numbers.join(", ")}.</p>`);

// 2. Вивести квадрати чисел від 10 до 20.
const squares = [];
for (let i = 10; i <= 20; i++) {
  squares.push(i ** 2);
}
document.write("<h3>2. Вивести квадрати чисел від 10 до 20.</h3>");
document.write(`<p>${squares.join(", ")}.</p>`);

// 3. Вивести таблицю множення на 7.
const number = 7;
let multiplicationTable = "";
for (let i = 1; i <= 10; i++) {
  let multy = 7 * i;
  multiplicationTable += `<tr> <td>${number} * ${i} = ${multy} </td> </tr> `;
}
document.write(`<h3>3. Вивести таблицю множення на 7.</h3>`);
document.write(`<table> ${multiplicationTable}</table>`);

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write(`<h3>4. Знайти суму всіх цілих чисел від 1 до 15.</h3>`);
document.write(
  `<p>Cума всіх цілих чисел від 1 до 15 дорівнює  <b>${sum}</b></p>`
);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
document.write(`<h3>5. Знайти добуток усіх цілих чисел від 15 до 35.</h3>`);
document.write(
  `<p>Добуток усіх цілих чисел від 15 до 35 дорівнює <b>${BigInt(
    product
  )}</b></p>`
);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sumNumbers = 0;
const from = 1;
const to = 500;
for (let i = from; i <= to; i++) {
  sumNumbers += i;
}
const arithmeticMean = sumNumbers / (to - from + 1);

document.write(
  `<h3>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</h3>`
);
document.write(
  `<p>Cереднє арифметичне всіх цілих чисел від 1 до 500 дорівнює: <b>${arithmeticMean}</b></p>`
);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEvenNumbers = 0;
for (let i = 30; i <= 80; i++) {
  sumEvenNumbers += i % 2 === 0 ? i : 0;
}
document.write(
  `<h3>7. Вивести суму лише парних чисел в діапазоні від 30 до 80.</h3>`
);
document.write(
  `<p>Cума лише парних чисел в діапазоні від 30 до 80 дорівнює: <b>${sumEvenNumbers}</b></p>`
);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let sumNumbersMultiplesOfThree = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    sumNumbersMultiplesOfThree.push(i);
  }
}
document.write(
  `<h3>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.</h3>`
);
document.write(`<p>${sumNumbersMultiplesOfThree.join(", ")}.</p>`);

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const naturalNumber = 44;
let dividers = [];
let counterDividers = 0;
let counterEvenDividers = 0;
let sumEvenCounterDividers = 0;
for (let i = 45; i > 0; i--) {
  if (naturalNumber % i === 0) {
    dividers.push(i);
    counterDividers++;
    if (i % 2 === 0) {
      counterEvenDividers++;
      sumEvenCounterDividers += i;
    }
  }
}
document.write(
  `<h3>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</h3>`
);
document.write(
  `<p>У натурального числа ${naturalNumber} наступні дільники - <b>${dividers.join(
    ", "
  )}.</b> </p>`
);

// 10. Визначити кількість його парних дільників.
document.write(`<h3>10. Визначити кількість його парних дільників.</h3>`);
document.write(
  `<p>Кількість парних дільників натурального числа ${naturalNumber} дорівнює: <b>${counterEvenDividers}</b></p>`
);

// 11. Знайти суму його парних дільників.
document.write(`<h3>11. Знайти суму його парних дільників.</h3>`);
document.write(
  `<p>Cума парних дільників числа ${naturalNumber} дорівнює: <b>${sumEvenCounterDividers}</b></p>`
);

// 12. Надрукувати повну таблицю множення від 1 до 10.
let multiplicationTable2 = "";
for (let i = 1; i <= 10; i++) {
  multiplicationTable2 += `<tr> </tr>`;
  for (let j = 1; j <= 10; j++) {
    let multy = i * j;
    multiplicationTable2 += `<td>${j} * ${i} = ${multy}</td>`;
  }
}
document.write(`<h3>12. Надрукувати повну таблицю множення від 1 до 10.</h3>`);
document.write(`<table> ${multiplicationTable2}</table>`);

// 13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let numberList = [];
const step = 0.5;
for (let i = 20; i <= 30; i += step) {
  numberList.push(i);
}
document.write(
  `<h3>13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).</h3>`
);
document.write(`<p>${numberList.join(", ")}</p>`);

// 14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const course = 27;
let cash = "";
for (let i = 10; i <= 100; i += 10) {
  cash += `<tr><td>${i} $ = ${course * i} грн. </td><tr/>`;
}
document.write(
  `<h3>14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.</h3>`
);
document.write(`<table>${cash}</table>`);

// 15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const integerNumber = 58;
let integerNumbersList = "";
for (let i = 1; i <= 100; i++) {
  integerNumbersList += i * i < integerNumber ? `${i} ` : "";
}
document.write(
  `<h3>15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.</h3>`
);
document.write(
  `<p> Дане ціле число: ${integerNumber}. Цілі числа, квадрат яких не перевищує це число: <b>${integerNumbersList}</b> </p>`
);

// 16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const enteredNumber = 17;
let answer;
if (enteredNumber <= 1) {
  answer = "не просте";
} else {
  for (let i = 2; i <= Math.round(enteredNumber / 2); i++) {
    if (enteredNumber % i === 0) {
      answer = "не просте";
      break;
    }
    answer = "просте";
  }
}
document.write(
  `<h3>16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</h3>`
);
document.write(`<p>Дане ціле число: ${enteredNumber} - <b>${answer}</b> </p>`);

// 17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const someNumber = 25;
let someAnswer = "не можна";

for (let i = 1; i < someNumber; i++) {
  if (3 ** i === someNumber) {
    someAnswer = "можна";
    break;
  }
}

document.write(
  `<h3>17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).</h3>`
);
document.write(
  `<p> Дане ціле число: ${someNumber}. Одержати це число шляхом зведення числа 3 у деякий ступінь - <b>${someAnswer}</b>. </p>`
);
