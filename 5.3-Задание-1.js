/*
5.3 Задание 1
***
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
*/

let someValue = +prompt('Введите число');
if( typeof someValue === 'number' && !isNaN(someValue) ){
  if( someValue%2 ) {
    console.log(`Вы ввели нечетное число «${someValue}»`);
  } else {
     console.log(`Вы ввели четное число «${someValue}»`);
  } 
} 
else{
  console.log("Упс, кажется, вы ошиблись");
} 

		 