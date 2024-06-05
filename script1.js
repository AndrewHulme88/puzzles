const shapes = document.querySelectorAll('.shape');
const cells = document.querySelectorAll('.cell');

squares.forEach(square => {
    square.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.classList[1]);
        e.dataTransfer.effectAllowed = 'move';
    });

    square.addEventListener('dragend', (e) => {
        e.target.style.top = `${e.clientY}px`;
        e.target.style.left = `${e.clientX}px`;
    });
});

cells.forEach(cell => {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    cell.addEventListener('drop', (e) => {
        const squareClass = e.dataTransfer.getData('text');
        const square = document.querySelector(`.${squareClass}`);

        cell.appendChild(square);
    });
});
