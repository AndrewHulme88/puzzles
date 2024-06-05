const squares = document.querySelectorAll('.square');
const gridCells = document.querySelectorAll('.grid-cell');

squares.forEach(square => {
    square.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.classList[1]);
        e.dataTransfer.effectAllowed = 'move';
    });

    square.addEventListener('dragend', (e) => {
        e.target.style.top = '';
        e.target.style.left = '';
    });
});

gridCells.forEach(gridCell => {
    gridCell.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    gridCell.addEventListener('drop', (e) => {
        const squareClass = e.dataTransfer.getData('text');
        const square = document.querySelector(`.${squareClass}`);

        if (!gridCell.querySelector('.square')) {
            gridCell.appendChild(square);
        }
    });
});
