const numBtns = document.querySelectorAll('.numBtn');
const result = document.querySelector('#result');

numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', (e) => {
    result.value = numBtn.value;
  });
});
