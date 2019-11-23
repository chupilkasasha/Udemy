var btnStart = document.getElementById('start'),
budgetValue = document.querySelector('.budget-value'), 
daybudgetValue = document.querySelector('.daybudget-value'), 
levelValue = document.querySelector('.level-value'), 
expensesValue = document.querySelector('.expenses-value'),
optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
incomeValue = document.querySelector('.income-value'),
monthsavingsValue = document.querySelector('.monthsavings-value'),
yearsavingsValue = document.querySelector('.yearsavings-value'),

inputExpensesItem = document.getElementsByClassName('expenses-item').value,
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item').value,
expensesItemBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBudgetBtn = document.getElementsByTagName('button')[2],
chooseIncome = document.querySelector('.choose-income').value,
savings = document.getElementById('savings'),
chooseSum = document.querySelector('.choose-sum').value,
choosePercent = document.querySelector('.choose-percent').value,
yearValue = document.querySelector('.year-value').value,
monthValue = document.querySelector('.month-value').value,
dayValue = document.querySelector('.day-value').value;

console.log();
