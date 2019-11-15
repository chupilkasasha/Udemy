'use strict';

var money = prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
	butget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

//for***************

	for(var i = 0; i < 2; i++){
		var q1 = prompt('Введите обязательную статью расходов в этом месяце'),
	        q2 = +prompt('Во сколько обойдется ?');

	        if((typeof(q1) == 'string') && (typeof(q1)) != null && (typeof(q2)) != null
	        	&& q1 != '' && q2 != '' && q1.length < 30){
	        	console.log('done!');
	        	appData.expenses[q1] = q2;
	        }else{
	        	console.log('что-то пошло не так');
	        	i--;

	        }
	}

//while*************

// var i = 0;
// while(i < 2){
// 	var q1 = prompt('Введите обязательную статью расходов в этом месяце'),
//         q2 = +prompt('Во сколько обойдется ?');

//         if((typeof(q1) == 'string') && (typeof(q1)) != null && (typeof(q2)) != null
//         	&& q1 != '' && q2 != '' && q1.length < 30){
//         	console.log('done!')
//         	appData.expenses[q1] = q2;
//         }else{
//         	console.log('что-то пошло не так');
//         	i--;

//         }
//         i++;
// }

//do while***********

// var i = 0;
// do{
// 		var q1 = prompt('Введите обязательную статью расходов в этом месяце'),
//        	q2 = +prompt('Во сколько обойдется ?');

//         if((typeof(q1) == 'string') && (typeof(q1)) != null && (typeof(q2)) != null
//         	&& q1 != '' && q2 != '' && q1.length < 30){
//         	console.log('done!')
//         	appData.expenses[q1] = q2;
//         }else{
//         	console.log('что-то пошло не так');
//         	i--

//         }
//         i++
//     }while (i < 2)


	appData.moneyPerDay = appData.butget / 30;
	alert('Ежедневный бюджет ' + appData.moneyPerDay);

	if(appData.moneyPerDay < 100){
		console.log('минимальный уровень достатка');
	}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 300){
		console.log('средний уровень достатка');
	}else if(appData.moneyPerDay > 300 && appData.moneyPerDay <= 1000){
		console.log('достаток выше среднего');
	}else if(appData.moneyPerDay > 1000){
		console.log('высокий достаток');
	}else{
		console.log('что-то пошло не так!');
}

////////////////////////////////////////
