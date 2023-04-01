const generateArrayWithRandomNumbers = (howManyNumbers, min, max) => {
  let arrNum = [];

  for (let i = 0; i < howManyNumbers; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    arrNum.push(randomNumber);
  }
  const newArr = new Array(arrNum);

  console.log(newArr);
  return newArr;
};

const arr1 = generateArrayWithRandomNumbers(19, 20, 100);
const arr2 = generateArrayWithRandomNumbers(10, 10, 50);
const arr3 = generateArrayWithRandomNumbers(5, 2, 30);
const arr4 = generateArrayWithRandomNumbers(8, 45, 72);

const generateArraysWithArrays = (...arr) => {
  return [...arr];
};

const allArrays = generateArraysWithArrays(arr1, arr3, arr3, arr4);
console.log(allArrays);
