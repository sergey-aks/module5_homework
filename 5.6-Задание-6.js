/*
5.6 Задание 6
***
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let arr = [1,2,3];
// let arr = [1,1,3];
// let arr = [1,1,1];
// let arr = ["aaa","aaa","aaa"];

let res = 'true, все элементы одинаковые';
arr.forEach(function(item,index,array){
  for(let i = 0; i<arr.length; i++){
    if(i != index){
      if(item != arr[i]){
        res = 'false, есть разные элементы';
      }
    }
  }
});
console.log(res);

