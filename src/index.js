'use strict';
const $tooltip = document.querySelectorAll('.tooltip');
$tooltip.forEach(box => {
    box.addEventListener('mouseover',function() {
        const $span = document.createElement('span');
        const textContent = this.dataset.tooltip;
        $span.classList.add('tooltip-content');
        $span.textContent = textContent;
        this.append($span);

        box.addEventListener('mousemove', e => {
            const num = 20;
            const X = e.clientX;
            const Y = e.clientY;
            $span.style.left = (X + num) + 'px';
            $span.style.top = (Y + num) + 'px';
        });
    });
    box.addEventListener('mouseout',() => {
        const $span = document.querySelector('span.tooltip-content');
        $span.remove();
    });
});

//Вторая часть.\\

const initAccordion = () => {
    const accordion = document.querySelectorAll('.accordion');
    accordion.forEach(accor => {
        accor.addEventListener('click', (e) => {
            if (e.target.classList.contains('title')) {
                e.target.classList.toggle('active');
            }
        });
    });
};
initAccordion();
