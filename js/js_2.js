function addUsers() {
  var nameUsers = [];
  for (var i = 0; i < 5; i++) {
    var user = prompt('Введите пользователя ' + (i+1) +':', '');
    nameUsers[i] = user;
    }
  return nameUsers;
  }

function checkUsers(logIn, userArrey) {
  for (var i = 0; i < userArrey.length; i++) {
    if (userArrey[i] == logIn) {
      alert(userArrey[i] + ',' + ' вы успешно вошли!');
      return true;
    }
  }
  alert('Ошибка входа!')
}

function mainFunc() {
  userArrey = addUsers();
  logIn = prompt('Введете логин пользователя', '');
  checkUsers(logIn, userArrey);
}

mainFunc();
