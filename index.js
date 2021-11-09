const numBtns = document.querySelectorAll('.numBtn');
const result = document.querySelector('#result');
const opBtns = document.querySelectorAll('.opBtn');
const equalBtn = document.querySelector('.equalBtn');
const clearBtn = document.querySelector('.clearBtn');

let firstNum = '';
let firstDone = false;
let secondNum = '';
let operator = '';
let secondDone = false;
let thirdNum = '';

const operation = () => {
  switch (operator) {
    case '+':
      return (result.value = Number(firstNum) + Number(secondNum));
    case '-':
      return (result.value = Number(firstNum) - Number(secondNum));
    case '*':
      return (result.value = Number(firstNum) * Number(secondNum));
    case '/':
      return (result.value = Number(firstNum) / Number(secondNum));
    default:
      return;
  }
};

clearBtn.addEventListener('click', (e) => {
  firstNum = '';
  firstDone = false;
  secondNum = '';
  secondDone = false;
  operator = '';
  result.value = '0';
  thirdNum = '';
});

equalBtn.addEventListener('click', () => {
  if (firstDone === false) {
    return;
  } else if (firstDone === true && secondDone === false) {
    console.log(firstNum, secondNum, operator);
    secondNum = thirdNum;
    result.value = operation();
    firstNum = operation();
    secondNum = '';
    return;
  } else if (firstDone === true && secondDone === true) {
    result.value = operation();
    firstNum = operation();
    secondDone = false;
    firstDone = true;
    thirdNum = secondNum;
    secondNum = '';
  }
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener('click', (e) => {
    firstDone = true;
    if (firstDone === true && secondDone === true) {
      result.value = operation();
      firstNum = operation();
      secondDone = false;
      secondNum = '';
    }
    operator = opBtn.value;
  });
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', (e) => {
    if (firstDone === false) {
      firstNum = firstNum + numBtn.value;
      result.value = firstNum;
    } else {
      secondNum = secondNum + numBtn.value;
      result.value = secondNum;
      secondDone = true;
    }
  });
});
