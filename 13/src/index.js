// const number = prompt("Загадайте число");

// function checkNumber(num) {
//   const answer = prompt("Какое число загадали?");

//   if (num === answer) {
//     return console.log("правильно");
//   }

//   console.log("неправильно");
//   checkNumber(num);
// }

// checkNumber(number);

// const username = prompt("Имя?");

// function showName(ww) {
//   console.log(ww);
// }

// showName("asd");
// showName("qwe");

// showDiagram(data)

// есть строка "lorem ipsum is simply dummy", сделать новую строку, чтобы первое слово было с большой буквы
// функция принимает две строки и возвращает большую из них

// let str = "lorem ipsum is simply dummy";
// let newStr = str.replace("lorem", "Lorem");
// console.log(newStr);

// function test(str1, str2) {
//     //...
//     return
// }

// test("lorem", "Lorem");

// function checkLength(string1, string2) {
//   if (string1.length > string2.length) {
//     return console.log(string1);
//   }
//   console.log(string2);
//   const number = 2;
//   string1.length > string2.length ? console.log(string1) : console.log(string2);
//   if (number === 1) {
//     console.log(1);
//   } else if (number === 2) {
//     console.log(2);
//   }

//   switch (true) {
//     case 1 > 3:
//       console.log(1);
//       break;
//     case 2 === 3:
//       console.log(2);
//       break;
//     case 2 === 2:
//       console.log(3);
//       break;

//     default:
//       break;
//   }
// }

// checkLength("qwe", "2");

// const email = prompt("Введите почту");

// console.log(re.test(email));

// 1 - введите имя. Имя должно быть больше 3 символов
// 2 - введите почту. Почта по регулярке
// 3 - телефон. Номер должен быть не больше 20 символов

// function stepForm() {
//   const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   const userName = prompt("введите имя");
//   if (userName.length <= 3) {
//     return console.log("неправильно");
//   }

//   //   console.log(typeof userName === "number");

//   const email = prompt("введите почту");
//   if (!pattern.test(email)) {
//     return console.log("неправильная почта");
//   }

//   const tel = prompt("введите телефон");
//   if (tel.length > 20) {
//     return console.log("слишком длинный номер");
//   }

//   const data = `
//   Имя: ${userName},
//   Email: ${email},
//   Телефон: ${tel}
//   `;

//   //   console.log(data);

//   return data;
// }

// const result = stepForm();
// console.log(stepForm());

const calc = function() {
  const num1 = Number(prompt("Введите первое число"));
  const num2 = Number(prompt("Введите второе число"));
  const action = prompt("Введите символ математической операции");

  console.log(num1);
  console.log(num2);
  console.log(action);

  if (!isNaN(num1) && !isNaN(num2)) {
    switch (action) {
      case "+":
        alert(num1 + num2);
        break;
      case "-":
        alert(num1 - num2);
        break;
      case "*":
        alert(num1 * num2);
        break;
      case "/":
        alert(num1 / num2);
        break;
      case "%":
        alert((num1 / 100) * num2);
        break;
      default:
        alert("Введены неверные данные");
    }
  } else {
    alert("Введены неверные данные");
  }
};

calc();
