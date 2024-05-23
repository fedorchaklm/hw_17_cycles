function getNumbers(from, to) {
  const numbers = [];
  for (let i = from; i <= to; i++) {
    numbers.push(i);
  }
  return numbers;
}

function getSquares() {
  const squares = [];
  for (let i = 10; i <= 20; i++) {
    squares.push(i ** 2);
  }
  return squares;
}

function getMultiplicationTable(number) {
  let multiplicationTable = "";
  for (let i = 1; i <= 10; i++) {
    let multy = 7 * i;
    multiplicationTable += `<tr> <td>${number} * ${i} = ${multy} </td> </tr> `;
  }
  return multiplicationTable;
}

function sumOfWholeNumbers(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

function getProducts(from, to) {
  let product = 1;
  for (let i = from; i <= to; i++) {
    product *= i;
  }
  return product;
}

function getArithmeticMean(from, to) {
  let sumNumbers = 0;
  for (let i = from; i <= to; i++) {
    sumNumbers += i;
  }
  const arithmeticMean = sumNumbers / (to - from + 1);
  return arithmeticMean;
}

function getSumEvenNumbers(from, to) {
  let sumEvenNumbers = 0;
  for (let i = from; i <= to; i++) {
    sumEvenNumbers += i % 2 === 0 ? i : 0;
  }
  return sumEvenNumbers;
}

function getSumNumbersMultiplesOfThree(from, to) {
  const sumNumbersMultiplesOfThree = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      sumNumbersMultiplesOfThree.push(i);
    }
  }
  return sumNumbersMultiplesOfThree;
}

function getDividersOfNaturalNumber(number) {
  const dividers = [];
  for (let i = number; i > 0; i--) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
}

function getEvenDividers(arr) {
  const counterEvenDividers = [];
  for (const n of arr) {
    if (n % 2 === 0) {
      counterEvenDividers.push(n);
    }
  }

  return counterEvenDividers;
}

function getSumOfEvenDividers(arr) {
  let sumEvenCounterDividers = 0;
  for (const n of arr) {
    sumEvenCounterDividers += n;
  }
  return sumEvenCounterDividers;
}

function getFuLLMultiplicationTable() {
  let multiplicationTable = "";
  for (let i = 1; i <= 10; i++) {
    multiplicationTable += `<tr> </tr>`;
    for (let j = 1; j <= 10; j++) {
      let multy = i * j;
      multiplicationTable += `<td>${j} * ${i} = ${multy}</td>`;
    }
  }
  return multiplicationTable;
}

function getNumbersWithStep(from, to, step) {
  const numberList = [];
  for (let i = from; i <= to; i += step) {
    numberList.push(i);
  }
  return numberList;
}

function getMoney(from, to, step, course) {
  let cash = "";
  for (let i = from; i <= to; i += step) {
    cash += `<tr><td>${i} $ = ${course * i} грн. </td><tr/>`;
  }
  return cash;
}

function getNumberWithLimitedSquqres(from, to, limit) {
  const integerNumbersList = [];
  for (let i = from; i <= to; i++) {
    if (i * i < limit) {
      integerNumbersList.push(i);
    }
  }
  return integerNumbersList;
}

function isPrimeNumber(number) {
  let answer;
  if (number <= 1) {
    answer = "не просте";
  } else {
    for (let i = 2; i <= Math.round(number / 2); i++) {
      if (number % i === 0) {
        answer = "не просте";
        break;
      }
      answer = "просте";
    }
  }
  return answer;
}

function isDerivedFromNumber(number) {
  let answer = "не можна";

  for (let i = 1; i < number; i++) {
    if (3 ** i === number) {
      answer = "можна";
      break;
    }
  }
  return "не можна";
}

const naturalNumber = 44;
const dividers = getDividersOfNaturalNumber(naturalNumber);
const evenDividers = getEvenDividers(dividers);
const integerNumber = 58;
const enteredNumber = 17;

document.write(`
<h2>Написати цикли, які зможуть:</h2>
<h3>1. Вивести на сторінку в один рядок через кому числа від 10 до 20.</h3>
<p>${getNumbers(10, 20).join(", ")}.</p>
<h3>2. Вивести квадрати чисел від 10 до 20.</h3>
<p>${getSquares(10, 20).join(", ")}.</p>
<h3>3. Вивести таблицю множення на 7.</h3>
<table> ${getMultiplicationTable(7)}</table>
<h3>4. Знайти суму всіх цілих чисел від 1 до 15.</h3>
<p>Cума всіх цілих чисел від 1 до 15 дорівнює  <b>${sumOfWholeNumbers(
  1,
  15
)}</b></p>
<h3>5. Знайти добуток усіх цілих чисел від 15 до 35.</h3>
<p>Добуток усіх цілих чисел від 15 до 35 дорівнює <b>${BigInt(
  getProducts(15, 35)
)}</b></p>
<h3>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</h3>
<p>Cереднє арифметичне всіх цілих чисел від 1 до 500 дорівнює: <b>${getArithmeticMean(
  1,
  500
)}</b></p>
<h3>7. Вивести суму лише парних чисел в діапазоні від 30 до 80.</h3>
<p>Cума лише парних чисел в діапазоні від 30 до 80 дорівнює: <b>${getSumEvenNumbers(
  30,
  80
)}</b></p>
<h3>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.</h3>
<p>${getSumNumbersMultiplesOfThree(100, 200).join(", ")}.</p>
<h3>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</h3>
<p>У натурального числа ${naturalNumber} наступні дільники - <b>${dividers.join(
  ", "
)}.</b> </p>
<h3>10. Визначити кількість його парних дільників.</h3>
<p>Кількість парних дільників натурального числа ${naturalNumber} дорівнює: <b>${
  evenDividers.length
}</b></p>
<h3>11. Знайти суму його парних дільників.</h3>
<p>Cума парних дільників числа ${naturalNumber} дорівнює: <b>${getSumOfEvenDividers(
  getEvenDividers(getDividersOfNaturalNumber(naturalNumber))
)}</b></p>
<h3>12. Надрукувати повну таблицю множення від 1 до 10.</h3>
<table> ${getFuLLMultiplicationTable()}</table>
<h3>13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).</h3>
<p>${getNumbersWithStep(20, 30, 0.5).join(", ")}.</p>
<h3>14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.</h3>
<table>${getMoney(10, 100, 10, 27)}</table>
<h3>15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.</h3>
<p> Дане ціле число: ${integerNumber}. Цілі числа, квадрат яких не перевищує це число: <b>${getNumberWithLimitedSquqres(
  1,
  100,
  integerNumber
).join(", ")}.</b> </p>
<h3>16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</h3>
<p>Дане ціле число: ${enteredNumber} - <b>${isPrimeNumber(
  enteredNumber
)}</b> </p>
<h3>17. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).</h3>
<p> Дане ціле число: ${enteredNumber}. Одержати це число шляхом зведення числа 3 у деякий ступінь - <b>${isDerivedFromNumber(enteredNumber)}</b>. </p>
`);
