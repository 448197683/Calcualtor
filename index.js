const numBtns = document.querySelectorAll('.numBtn');
const result = document.querySelector('#result');
const opBtns = document.querySelectorAll('.opBtn');
const equalBtn = document.querySelector('.equalBtn');
const clearBtn = document.querySelector('.clearBtn');

let firstNum = '';
let firstDone = false;
let secondNum = '';
let operator = '';

clearBtn.addEventListener('click', (e) => {
  firstNum = '';
  firstDone = false;
  secondNum = '';
  secondDone = false;
  operator = '';
  result.value = '0';
});

equalBtn.addEventListener('click', () => {
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
});

/* equalBtn.addEventListener('click', (e) => {
  if (operator === '+') {
    result.value = Number(firstNum) + Number(secondNum);
  } else if (operator === '-') {
    result.value = Number(firstNum) - Number(secondNum);
  } else if (operator === '*') {
    result.value = Number(firstNum) * Number(secondNum);
  } else if (operator === '/') {
    result.value = Number(firstNum) / Number(secondNum);
  }
}); */

opBtns.forEach((opBtn) => {
  opBtn.addEventListener('click', (e) => {
    firstDone = true;
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
    }
  });
});
