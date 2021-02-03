const korzina = {
    gds:[
        {
            name: 'Велосипед',
            price: 10000,
            amt: 1
        },
        {
            name: 'Шлем',
            price: 1000,
            amt: 2
        },
        {
            name: 'Кеды',
            price: 3000,
            amt: 1
        },
        {
            name: 'Бинты',
            price: 200,
            amt: 10
        }
    ],
    sumKorzina(){
        return this.gds.reduce((sumk, gds) => sumk + gds.price*gds.amt, 0);
    }
}
console.log(korzina.sumKorzina())