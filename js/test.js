function createDivs(amount) {
    if (amount >= 100) amount = 100;
    if (amount <= 0) amount = 1;
    const contentflex = document.querySelector('.contentflex');
    for (let x = 0; x < amount; x++) {
        const row = document.createElement('div');
        row.classList.add('column');
        for (let y = 0; y < amount; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        contentflex.appendChild(row);
    }
}
 
function sketchDivs() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', e => e.target.classList.add('sketch-color'));
    });
}

function newGrid() {

}

createDivs(32);
sketchDivs();