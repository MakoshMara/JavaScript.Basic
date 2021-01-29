function generateMass() {
    let m = [];
    for (let i = 2; i <= 100; i++) {
        m.push(i);
    }
    return m
}

function primeNumbers(m) {
    let res = []
    while (m.length > 0) {
        let i = m.shift();
        res.push(i);
        let key = 0
        while (key < m.length) {
            if (m[key] % i === 0) {
                m.splice(key, 1);
            }
            key++;
        }
    }
    return res
}

console.log(primeNumbers(generateMass()))
