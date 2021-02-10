const korzina = {
    goods: [],
    containerKorzina:document.getElementById('korzina'),

    renderKorzina (){
        this.containerKorzina.textContent = '';
        const korzinaP = document.createElement('p');
        korzinaP.textContent = 'Товары в корзине'
        this.containerKorzina.appendChild(korzinaP);
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.containerKorzina.insertAdjacentHTML('beforeend', this.goodInKorzinaRender(good));
            });
            this.containerKorzina.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товар(ов) на сумму ${this.sumInKorzina()}`);
        } else {
            this.containerKorzina.textContent = 'Корзина пуста';
        }
    },

    goodInKorzinaRender(good) {

        return `<div class="goodInKorzina">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    },

    sumInKorzina(){
        return this.goods.reduce((sumk, goods) => sumk + goods.price*goods.quantity, 0);
    },

    findInKorzina(good){
        let newGood = this.goods.find(item => item.id == good.id)
        if (typeof newGood !== 'undefined') {
            newGood.quantity++;
        }
        else {
            this.add(good);
        }
        this.renderKorzina()
    },

    add(good) {
        this.goods.push({...good, quantity: 1});
    }
}
const catalog = {
    korzina,
    goods: [
        {
            name: 'Велосипед',
            price: 10000,
            id: 1
        },
        {
            name: 'Шлем',
            price: 1000,
            id: 2
        },
        {
            name: 'Кеды',
            price: 3000,
            id: 3
        },
        {
            name: 'Бинты',
            price: 200,
            id: 4
        }
    ],
    containerCatalog: document.getElementById('catalog'),

    init(){
        this.renderCatalog();
        this.buyGood();
        this.korzina.renderKorzina()
    },

    renderCatalog() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.containerCatalog.insertAdjacentHTML('beforeend', this.renderGoodCart(good));
            });
        }
    },

    renderGoodCart(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="goodButton" id = ${good.id}>Купить</button>
                </div>`;
    },

    buyGood(){
        let b = document.getElementsByClassName('goodButton')
        for (const v of b) {
            v.addEventListener('click', (event) =>this.addToKorzina(event))
        }

    },

    addToKorzina(event) {
        let addGood = this.goods.find(good => good.id == event.target.getAttribute('id'))
        this.korzina.findInKorzina(addGood);
    },
};

catalog.init()