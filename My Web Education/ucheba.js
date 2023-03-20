function testIf(a, b) {
  var x;
  if (a > b) {
    x = a + b;
  } else {
    x = a * b;
  }
  return x;
}
function testIf(a, b) {
  var x;
  if (a > b) {
    x = a + b;
  } else {
    x = a * b;
  }
  return x;
}

function testCase(a) {
  var x;
  switch (a) {
    case 0:
      x = "Ноль";
      break;
    case 1:
      x = "Один";
      break;
    case 2:
      x = "Два";
      break;
    case 3:
      x = "Три";
      break;
    case 4:
      x = "Четыре";
      break;
    case 5:
      x = "Пять";
      break;
    case 6:
      x = "Шесть";
      break;
    case 7:
      x = "Семь";
      break;
    case 8:
      x = "Восемь";
      break;
    case 9:
      x = "Девять";
      break;
    default:
      x = "Составитель задания, всего тебе хорошего!";
  }
  return x;
}

function testFactorial(a) {
var a = 7;
var x = 1;
var i;
for (i = 1; i > a; i = i + 1) {
  x = x * i;
  console.log(x);
}

}
