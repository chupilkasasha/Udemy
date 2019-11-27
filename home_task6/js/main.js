var btnStart = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  daybudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  yearsavingsValue = document.querySelector('.yearsavings-value'),

  inputExpensesItem = document.getElementsByClassName('expenses-item'),
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  chooseIncome = document.querySelector('.choose-income'),
  savings = document.getElementById('savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

console.log();


var money, time;

//botton
expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

// start
btnStart.addEventListener('click', function () {

  expensesItemBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBudgetBtn.disabled = false;

  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = prompt('Ваш бюджет на месяц?');

  while (isNaN(money) || '' || money == null) {
    money = prompt('Ваш бюджет на месяц?');
  }

  appData.butget = money;
  appData.timeData = time;
  budgetValue.textContent = money;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date(time)).getDate();
});

var sum = 0;

expensesItemBtn.addEventListener('click', function () {
  for (var i = 0; i < inputExpensesItem.length; i++) {
    var q1 = inputExpensesItem[i].value,
      q2 = inputExpensesItem[++i].value;

    if ((typeof (q1) == 'string') && (typeof (q1)) != null && (typeof (q2)) != null &&
      q1 != '' && q2 != '' && q1.length < 30) {
      //console.log('done!');
      appData.expenses[q1] = q2;
      sum += +q2;
    } else {
      console.log('что-то пошло не так');
      i--;

    }
    expensesValue.textContent = sum;
  }
});

optionalExpensesBtn.addEventListener('click', function () {
  for (var i = 0; i < optionalExpensesItem.length; i++) {
    var сonsumption = optionalExpensesItem[i].value;

    if ((typeof (сonsumption) == 'string') && (typeof (сonsumption)) != null &&
      сonsumption != '' && сonsumption.length < 30) {
      appData.optionalExpenses[i] = сonsumption;

    } else {
      console.log('что-то пошло не так');
    };
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

  };
});

countBudgetBtn.addEventListener('click', function () {
  if (appData.butget != undefined) {
	appData.moneyPerDay = ((appData.butget - sum) /30).toFixed(1);


    //appData.moneyPerDay = (appData.butget / 30).toFixed(1);
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
      levelValue.textContent = 'средний уровень достатка';
    } else if (appData.moneyPerDay > 300 && appData.moneyPerDay <= 1000) {
      levelValue.textContent = 'достаток выше среднего';
    } else if (appData.moneyPerDay > 1000) {
      levelValue.textContent = 'высокий достаток';
    } else {
      console.log('что-то пошло не так!');
    }

  } else {
    daybudgetValue.textContent = 'ошибка!';
  }

});

chooseIncome.addEventListener('input', function () {
  var items = chooseIncome.value;
  if ((typeof (items) === 'string') && (typeof (items) !== null) && items !== '') {
    appData.income = items.split(', ');
    //appData.income.sort();
    incomeValue.textContent = appData.income;

  } else {
    console.log('не корректный ввод!');
  }

});

savings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    var sum = +chooseSum.value,
      percent = +choosePercent.value;
      appData.chooseIncome = (sum / 100) / 12 * percent;
      appData.choosePercent = (sum / 100) * percent;

      monthsavingsValue.textContent = appData.chooseIncome.toFixed(1);
      yearsavingsValue.textContent = appData.choosePercent.toFixed(1);

  }
});

choosePercent.addEventListener('input', function () {
  if (appData.savings == true) {
    if (appData.savings == true) {
      var sum = +chooseSum.value,
        percent = +choosePercent.value;
      appData.chooseIncome = (sum / 100) / 12 * percent;
      appData.choosePercent = (sum / 100) * percent;

      monthsavingsValue.textContent = appData.chooseIncome.toFixed(1);
      yearsavingsValue.textContent = appData.choosePercent.toFixed(1);

    }

  }
});

var appData = {
  butget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  optionalExpenses: {}
};
