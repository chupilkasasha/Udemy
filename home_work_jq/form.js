var form = document.querySelector('form'),
  input = form.getElementsByTagName('input'),
  textarea = form.getElementsByTagName('textarea'),
  btn = form.getElementsByTagName('button'),
  statusMsg = document.createElement('span');

var massage = {
  loading: 'Загрузка...',
  success: 'жди нашего звонка ;) !',
  failure: 'error'
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.appendChild(statusMsg);


  var req = new XMLHttpRequest();
  req.open('POST', 'server.php');
  req.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json
  var data = new FormData(form);

  var obj = {};

  data.forEach(function (value, key) {
    obj[key] = value;
  });

  var json = JSON.stringify(obj);
  req.send(json);

  req.addEventListener('readystatechange', function () {
    if (req.readyState < 4) {
      statusMsg.innerHTML = massage.loading;
    } else if (req.readyState == 4 && req.status == 200) {
      statusMsg.innerHTML = massage.success;
    } else {
      statusMsg.innerHTML = massage.failure;
    }
  });

  for (var i = 0; i < input.length; i++) {
    input[i].value = '';
  }

  for (var j = 0; j < textarea.length; j++) {
    textarea[j].value = '';
  }

});