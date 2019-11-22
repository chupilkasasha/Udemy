'use strict';
var money,
	time;

function start() {
	money = prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');

	while (isNaN(money) || '' || money == null) {
		money = prompt('Ваш бюджет на месяц?');
	}
}

start();

var appData = {
	butget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	optionalExpenses: {},
	chooseExp: function(){
			for (var i = 0; i < 2; i++) {
		var q1 = prompt('Введите обязательную статью расходов в этом месяце'),
			q2 = +prompt('Во сколько обойдется ?');
	
		if ((typeof (q1) == 'string') && (typeof (q1)) != null && (typeof (q2)) != null &&
			q1 != '' && q2 != '' && q1.length < 30) {
			console.log('done!');
			appData.expenses[q1] = q2;
		} else {
			console.log('что-то пошло не так');
			i--;
	
		}
	}
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.butget / 30).toFixed(1);
		alert('Ежедневный бюджет ' + appData.moneyPerDay);
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
		console.log('минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
		console.log('средний уровень достатка');
	} else if (appData.moneyPerDay > 300 && appData.moneyPerDay <= 1000) {
		console.log('достаток выше среднего');
	} else if (appData.moneyPerDay > 1000) {
		console.log('высокий достаток');
	} else {
		console.log('что-то пошло не так!');
	}

	},
	checkSavings: function(){
		if(appData.savings == true){
		var save = +prompt('Какая сумма накопления?'),
		percent = +prompt('Какая ставка депозита?');
		appData.monthIncome = (save / 100)/12 * percent;
		alert('доход в месяц с депозита = ' + appData.monthIncome);
	}

	},
	chooseOptExpenses: function(){
		for (var i = 0; i <= 3; i++) {
			var сonsumption = prompt('название необязательных расходов?');

		if ((typeof (сonsumption) == 'string') && (typeof (сonsumption)) != null &&
			сonsumption != '' && сonsumption.length < 30) {
				appData.optionalExpenses[i] = сonsumption;

		} else {
			console.log('что-то пошло не так');
		};
	};
	},
	chooseIncome: function(){
		var items = prompt('что принесет доп доход?, Перечислить через запятую!', '');

		if((typeof (items) === 'string') && (typeof(items) !== null) && items !== ''){
			appData.income = items.split(', ');
			appData.income.push(prompt('может что-то еще?'));
			appData.income.sort();
		}else {
			console.log('не корректный ввод, введите данные согласно инструкции!')
		}
		appData.income.forEach (function (item, i) {
			alert('Способы доп. заработка: ' + (i+1) + ' ' + item)});
}
}

for(var key in appData){
	alert('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
}