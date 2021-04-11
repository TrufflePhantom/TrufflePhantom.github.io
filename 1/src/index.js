function checkcompare(num) {
  let compare = prompt("какое число от 1 до 10 загадали?");
  console.log(`Число которое вы ввели: ${compare}`);
  if (num === compare) {
    alert("Ура!!!! Вы отгадали");
  } else {
    checkcompare(num);
  }
}

function checknumber(number) {
  if (number > 0 && number <= 10) {
    checkcompare(number);
  } else {
    alert("вы ввели не правильное число");
    startApp();
  }
}

function startApp() {
  let number = prompt("загадайте число от 1 до 10");
  if (number) {
    checknumber(number);
  } else {
    let stopgame = confirm("вы точно хотите закончить игру? ");
    if (stopgame) {
      return;
    } else {
      startApp();
    }
  }
  console.log(`Число которое вы загадали: ${number}`);
}
startApp();
