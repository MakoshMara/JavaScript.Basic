/* Задача 4:
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
 */
function getRandomInRange(max = 15) {
    return Math.floor(Math.random() * (max + 1));
}

function numberToMax(a) {
    switch (a) {
        case 16:
            break;
        default:
            console.log(a);
            return numberToMax(++a);
    }
}

var a = getRandomInRange();
numberToMax(a);