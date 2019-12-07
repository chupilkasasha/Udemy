//1
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

// получаем элементы
  var tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

// скрываем элементы, оставляем 1
  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);


  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

// запуск обработчика события
// передаем 0 tabContent и сравниваем с выбраным tab 

  info.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer

  var deadLine = '2019-12-05 13:19:00';

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date()),
    sec = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000/60) % 60),
    hours = Math.floor((t / (1000*60*60)));
    // hours = Math.floor(t/(1000/60/60) % 24);
    // days = Math.floor((t/(1000*60*60*24)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': sec
    };
  };

  function setClock(id, endtime){
    var timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    sec = timer.querySelector('.seconds'),

    timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
      var t = getTimeRemaining(endtime); //obj
      // hours.textContent = t.hours;
      // minutes.textContent = t.minutes;
      // sec.textContent = t.seconds;

      function addZero(num){
        if(num < 10) {
            return '0' + num;
        } else return num;
    };

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      sec.textContent = addZero(t.seconds);

      if(t.total <= 0){
        clearInterval(timeInterval);
        hours.textContent = '00' ;
        minutes.textContent = '00';
        sec.textContent = '00';
      }
      //else if(t.hours < 10){
      //   hours.textContent = '0' +  t.hours;
      // }else if(t.minutes < 10){
      //   minutes.textContent ='0' + t.minutes;
      // }else if(t.seconds < 10){
      //   sec.textContent = '0' + t.seconds;
      // }
    }
  }

  setClock('timer', deadLine);








});