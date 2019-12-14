// 1 tabs
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

  // 2 timer

  var deadLine = '2019-12-05 13:19:00';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
      sec = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));
    // hours = Math.floor(t/(1000/60/60) % 24);
    // days = Math.floor((t/(1000*60*60*24)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': sec
    };
  };

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      sec = timer.querySelector('.seconds'),

      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime); //obj

      function addZero(num) {
        if (num < 10) {
          return '0' + num;
        } else return num;
      };

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      sec.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        sec.textContent = '00';
      }
    }
  }

  setClock('timer', deadLine);

  // 3 modal 

  var more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    popup = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('.more-splash');
    document.body.style.overflow = 'hidden';
  });

  popup.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('.more-splash');
    document.body.style.overflow = '';
  });

  // 4 form modal

  var massage = {
    loading: 'Загрузка...',
    success: 'Спасибо, скоро мы вам позвоним1!',
    failure: 'error'
  };

  var form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMsg = document.createElement('div');
  statusMsg.classList.add('status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMsg);

    var request = new XMLHttpRequest();

    request.open('POST', 'server.php');
    //заголовки данных
    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json
    var formData = new FormData(form); //конструктор ответов пользователя obj
    //request.send(formData);

    var obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });

    var json = JSON.stringify(obj);
    request.send(json);

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMsg.innerHTML = massage.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMsg.innerHTML = massage.success;
      } else {
        statusMsg.innerHTML = massage.failure;
      }
    });

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }

  });

  // 5 form main

  var formMain = document.getElementById('form'),
    inputManeForm = formMain.getElementsByTagName('input'),
    statusMsgMainForm = document.createElement('div');
  statusMsgMainForm.classList.add('status');

  formMain.addEventListener('submit', function (event) {
    event.preventDefault();
    formMain.appendChild(statusMsgMainForm);

    var requestMain = new XMLHttpRequest();

    requestMain.open('POST', 'server.php');

    requestMain.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json
    var formDataMain = new FormData(formMain); //конструктор ответов пользователя obj
    //requestMain.send(formDataMain);

    var objM = {};
    formDataMain.forEach(function (value, key) {
      objM[key] = value;
    });

    var json = JSON.stringify(objM);
    requestMain.send(json);

    requestMain.addEventListener('readystatechange', function () {
      if (requestMain.readyState < 4) {
        statusMsgMainForm.innerHTML = massage.loading;
      } else if (requestMain.readyState === 4 && requestMain.status == 200) {
        statusMsgMainForm.innerHTML = massage.success;
      } else {
        statusMsgMainForm.innerHTML = massage.failure;
      }
    });

    for (var i = 0; i < inputManeForm.length; i++) {
      inputManeForm[i].value = '';
    }
    //очистка input

  });





});