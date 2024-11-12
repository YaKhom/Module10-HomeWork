//№1
let input = prompt("Введите значение: ");
let number = +input;
if (typeof number === "number" && !isNaN(number)) {
  if (number % 2 === 0) {
    console.log("Число чётное");
  } else {
    console.log("Число нечётное");
  }
} else if (isNaN(number)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  console.log("Упс, кажется, вы ошиблись");
}

//№2
let x;
if (typeof x === "number") {
  console.log("x — число");
} else if (typeof x === "string") {
  console.log("x — строка");
} else if (typeof x === "boolean") {
  console.log("x — логический тип");
} else {
  console.log("Тип x не определён");
}

//№3
const str = "Happy New Year!";
const reversed = str.split("").reverse().join("");
console.log(reversed);

//№4
const randomNum = Math.floor(Math.random() * 101);

//№5
const arr = [1, "hello", true, 99, "world"];
console.log("Количество элементов:", arr.length);
arr.forEach((element) => console.log(element));

//№6
const equalArr = [5, 5, 5, 5, 5];
function areAllElementsEqual(equalArr) {
  for (let i = 1; i < equalArr.length; i++) {
    if (equalArr[i] !== equalArr[0]) {
      return false;
    }
  }
  return true;
}
console.log(areAllElementsEqual(equalArr));

//№7
const randomArr = [1, 2, 3, 0, "hello", null, 4, 5, 6, 0, true, "world", 8];
function countElements(randomArr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  randomArr.forEach((element) => {
    if (typeof element === "number" && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });
  console.log(`Четных чисел: ${evenCount}`);
  console.log(`Нечетных чисел: ${oddCount}`);
  console.log(`Нулей: ${zeroCount}`);
}
countElements(randomArr);

//№8
const myMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
  ["isStudent", true],
]);

for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
