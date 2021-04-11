function checkcompare(num) {
  let compare = prompt("ля, какое число загадал предыдущий комрад?");
  console.log(`Число которое вы ввели: ${compare}`);
  if (num === compare) {
    alert("Ты шо маг?! Ты отгадал!");
  } else {
    checkcompare(num);
  }
}

function checknumber(number) {
  if (number > 0 && number <= 10) {
    checkcompare(number);
  } else {
    alert("ты шо чык-чырык?! от 1 до 10!");
    startApp();
  }
}

function startApp() {
  let number = prompt("Ля, загадай чиcло от 1 до 10");
  if (number) {
    checknumber(number);
  } else {
    let stopgame = confirm("ля ты уже закончил играть? ");
    if (stopgame) {
      return;
    } else {
      startApp();
    }
  }
  console.log(`Число которое вы загадали: ${number}`);
}
startApp();
