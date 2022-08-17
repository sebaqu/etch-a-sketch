function createDivs(amount) {
    const contentflex = document.querySelector('.contentflex');
    while (contentflex.firstChild) {
        contentflex.removeChild(contentflex.lastChild);
    }
    if (amount >= 100) amount = 100;
    if (amount <= 0) amount = 1;
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

function newGrid() {
    const grid = prompt("Enter grid size");
    if (grid != null && grid != '') {
        if (!isNaN(grid)) {
            createDivs(grid);
            sketch();
        } 
        else {
            alert(grid + " is not a number!");
        }
    }
}

function sketch() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', e => e.target.classList.add('sketch-color'));
    });
}

createDivs(32);
sketch();