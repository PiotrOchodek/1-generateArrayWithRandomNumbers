const generateArrayWithRandomNumbers = (howManyNumbers, min, max) => {
  let arrNum = []

  for (let i = 0; i < howManyNumbers; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    arrNum.push(randomNumber)
  }

  console.log(arrNum)
};
generateArrayWithRandomNumbers(19,20,100);
