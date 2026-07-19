let calculation = '';

function updateCalculation(value) {
  calculation += value;
  displayResult();
}

function calculateResult() {
  calculation = eval(calculation);
  displayResult();
}

function displayResult() {
  document.querySelector('.js-result')
    .innerHTML = calculation;
}