const korzinadiv = document.getElementById('korzina')
const text = document.createElement('p')
text.id ='text';
korzinadiv.appendChild(text)
const goods = document.createElement('p')
goods.id ='goods';
korzinadiv.appendChild(goods)
const button = document.createElement('button');
button.id ='button';
korzinadiv.appendChild(button)

const korzina = {
    gds:[],
    container:document.getElementById('korzina'),

    statusKorzina(){
        let n = this.gds.length + 1
        let x = this.sumKorzina()
        let p2 = document.getElementById('goods')
        p2.textContent = ''
        for (const good of this.gds) {
            p2.textContent  = p2.textContent + `${good.name} (${good.amt} шт.) - ${good.price} за штуку\n`
        }
         let p = document.getElementById('text')
        p.textContent = this.gds.length == 0 ? 'Корзина пуста' : `В корзине ${n} товаров на ${x} рублей`;

    },
    button(){
        b = document.getElementById('button')
        b.textContent = this.gds.length == 0 ? 'Добавить товар в корзину' : 'Оплатить';
    },

    sumKorzina(){
        return this.gds.reduce((sumk, gds) => sumk + gds.price*gds.amt, 0);
    },
    initEvent() {
        let b = document.getElementById('button')
        let p = document.getElementById('text')
        if (b.textContent == 'Добавить товар в корзину') {
            b.addEventListener('click', (event) =>this.addToKorzina(event))
        }
        if (b.textContent == 'Оплатить') {
            b.addEventListener('click', function () {
                b.style.display = 'none';
                p.textContent = 'Оплачено'
            })
            this.gds = []
            console.log(this.gds)
        }
    },
    addToKorzina(event) {
        this.gds = [
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
            ]
        this.button()
        this.statusKorzina()
        this.initEvent()
    },
}
korzina.statusKorzina()
korzina.button()
korzina.initEvent()


