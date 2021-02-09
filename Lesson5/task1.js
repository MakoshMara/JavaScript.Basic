const board = {
    row:8,
    col:8,
    inDiv: null,
    cell: [],

    cells() {
        this.inDiv = document.getElementById('board');
        for (let row = 0; row < this.row+1; row++) {
            const tr = document.createElement('tr');
            this.inDiv.appendChild(tr);

            for (let col = 0; col < this.col+1; col++) {
                const cell = document.createElement('td');
                tr.appendChild(cell);
                this.cell.push(cell);
            }
        }
    },
    render: function () {
        let x = 8
        for (let cellIndex in this.cell) {

            if (cellIndex > 0 && cellIndex < 9) {
                this.cell[cellIndex].textContent = 'ABCDEFGH'.charAt(cellIndex - 1)
                continue;
            }
            if (cellIndex != 0 && cellIndex % 9 == 0) {
                    this.cell[cellIndex].textContent = x;
                    x--
            }
            else {
                this.cell[cellIndex].style.backgroundColor = 'black';
                if (cellIndex%2==0){
                    this.cell[cellIndex].style.backgroundColor = 'white'
                }
            }
        }
    }
}
board.cells()
board.render()