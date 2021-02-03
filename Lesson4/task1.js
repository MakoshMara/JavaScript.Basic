function decades(num) {
    if (num > 999 || num < 0) {
        console.log('Число должно быть больше 0 и не более 999')
        const res = {}
        return res
        }
    const res = {
        'сотни': parseInt(num / 100),
        'десятки': parseInt((num % 100) / 10),
        'единицы': (num - parseInt(num / 100) * 100 - parseInt((num % 100) / 10) * 10)
    }
    return console.log(res)
}

decades(5555)