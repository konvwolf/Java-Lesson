"use strict";

// 1. Калькулятор температуры

function farenheit(temp) {
    return (9 / 5) * temp + 32;
}

let tempC = prompt("Укажите температуру в градусах по Цельсию:");

alert(`${tempC} C соответствуют ${farenheit(tempC)} F`);


// 2. Переменные admin и name

let name = "Василий";
let admin = name;
alert(admin);


// 3. Вывод значений выражений

alert(10 + 10 + "10");
/* Слабая типизация - первые два числа были сложены,
результат приведен к строковому типу и конкатенирован
со строковым значением */

alert(10 + "10" + 10);
/* Первое и третье числа приведены к строковому типу,
после чего все значения конкатенированы */

alert(10 + 10 + + "10");
/* Первые два числа сложены, третье строковое значение
с помощью оператора + приведено к числовому типу,
а после прибавлено к сумме первых двух чисел */

alert(10 / - "");
/* Значение в кавычках "пустое", трактуется движком как ноль,
а при делении на ноль в JS результатом будет бесконечность.
В данном случае - минус бесконечность из-за определяющего минуса
после оператора деления */

alert(10 / + "2,5");
/* Выдает результат NaN, поскольку значение в кавычках изначально
является строковым значением и не может быть приведено к числовому типу
поскольку знак "," не является десятичным разделителем. Если вместо знака
"," поставить знак ".", то строковое значение в кавычках будет приведено
к числу 2,5, а результатом математического действия будет число 4 */


// 4. Корректные / некорректные имена переменных

let mode = "normal"; // Корректно

let my_valu3 = 102; // Корректно

// let 3my_value3 = "102"; Некорректно, названия переменных нельзя начинать с цифры

let __hello__ = "world"; // Корректно, но не рекомендуется

let $$$ = "money"; // Корректно, но не рекомендуется

// let !0_world = true; Некорректно, в названии переменных не должно быть операторов


// 5. Самостоятельно разобраться с атрибутами тега script (async и defer)

/* Атрибут async указывает браузеру, что код JS следует парсить одновременно с HTML.
При этом на время исполнения кода парсинг HTML останавливается.
Атрибут defer указывает браузеру, что скрипт JS надо выполнить только после завершения
загрузки страницы. */