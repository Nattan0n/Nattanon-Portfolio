// main.js

import '../style/backgroundStyle.css';

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    console.log(interBubble);
    if (!interBubble) {
        console.error('Element .interactive not found');
        return;
    }
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX - interBubble.clientWidth / 2)}px, ${Math.round(curY - interBubble.clientHeight / 2)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
