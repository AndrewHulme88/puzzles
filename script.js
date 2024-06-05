const shapes = document.querySelectorAll('.shape');
const linkBoxes = document.querySelectorAll('.link-box');

shapes.forEach(shape => {
    shape.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.classList[1]);
        e.dataTransfer.effectAllowed = 'move';
    });

    shape.addEventListener('dragend', (e) => {
        e.target.style.top = `${e.clientY}px`;
        e.target.style.left = `${e.clientX}px`;
    });
});

linkBoxes.forEach(linkBox => {
    linkBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    linkBox.addEventListener('drop', (e) => {
        const shapeClass = e.dataTransfer.getData('text');
        const shape = document.querySelector(`.${shapeClass}`);
        const link = linkBox.querySelector('a');

        // Navigate to the link
        window.location.href = link.id === 'link-1' ? 'game1.html' : link.id === 'link-2' ? 'game2.html' : 'game3.html';
    });
});

const containers = document.querySelectorAll('.container');

shapes.forEach(shape => {
    let initialX = shape.offsetLeft;
    let initialY = shape.offsetTop;

    shape.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.classList[1]);
        e.dataTransfer.effectAllowed = 'move';
    });

    shape.addEventListener('dragend', (e) => {
        shape.style.top = `${initialY}px`;
        shape.style.left = `${initialX}px`;
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
        const shapeClass = e.dataTransfer.getData('text');
        const shape = document.querySelector(`.${shapeClass}`);

        if (container.classList.contains(shapeClass)) {
            shape.remove();
        }
    });
});
