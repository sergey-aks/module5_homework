
/*5.7 Задание 8
***
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.
*/
let testMap = new Map([

    ["key1", "testVal"],
  
    [123, 456],
  
    [true, "some values"]
  
  ]);
  
  for (let key of testMap.keys()){
    console.log(`Ключ — ${key}, значение — ${testMap.get(key)}`)
  }
  