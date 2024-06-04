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
