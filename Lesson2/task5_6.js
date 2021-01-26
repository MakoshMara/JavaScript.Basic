/* Задание 5: Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/
function getSum(a, b) {
    return a + b;
}

function getDif(a, b) {
    return a - b;
}

function getComp(a, b) {
    return a * b;
}

function getDiv(a, b) {
    return a / b;
}

/* Задание 6:  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения
операции выполнить одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (использовать switch).
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return getSum(arg1, arg2);
        case '-':
            return getDif(arg1, arg2);
        case '*':
            return getComp(arg1, arg2);
        case '/':
            return getDiv(arg1, arg2);
        default:
            return 'Неизвестная операция'
    }
}

let a = 6;
let b = 3;
console.log(mathOperation(a, b, 'dsfs'))
