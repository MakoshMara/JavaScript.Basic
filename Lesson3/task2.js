function countBasketPrice(k) {
    let res = 0;
    for (const value of k) {
        res = res + value[1] * value[2];
    }
    return 'Общая цена корзины:' + res
}

const korzina = [
    ['Велосипед', 1, 10000],
    ['Шлем', 2, 1000],
    ['Кеды', 1, 3000],
    ['Бинты', 10, 200]
]; // [Товар, количество, цена за штуку]

console.log(countBasketPrice(korzina))
