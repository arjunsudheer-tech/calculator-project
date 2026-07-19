let calculation = localStorage.getItem('calculation') || '';

displayResult();

function updateCalculation(value) {
  calculation += value;
  displayResult();
  localStorage.setItem('calculation',calculation);
}

function calculateResult() {
  calculation = eval(calculation);
  displayResult();
  localStorage.setItem('calculation',calculation);
}

function displayResult() {
  document.querySelector('.js-result')
    .innerHTML = calculation;
}

function clearButton() {
  calculation = '';
  displayResult();
  localStorage.setItem('calculation',calculation);
}