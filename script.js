const shapes = document.querySelectorAll('.shape');

shapes.forEach(shape => {
    shape.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.classList[1]);
        e.dataTransfer.effectAllowed = 'move';
    });

    shape.addEventListener('dragend', (e) => {
        e.target.style.top = `${e.clientY}px`;
        e.target.style.left = `${e.clientX}px`;
    });

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
});
