/*
5.4 Задание 3
***
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let testString = "Hello";
let result;

function revertString(stringToRev){
  result = stringToRev.split('').reverse().join('');
  return result;
}

revertString(testString);

console.log(result);