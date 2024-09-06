// script.js
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}


document.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.id === 'scrollButton_0' || target.id === 'scrollButton_0_slide') {
        scrollToElement('.body');
    } else if (target.id === 'scrollButton_1' || target.id === 'scrollButton_1_slide') {
        scrollToElement('.head_about');
    } else if (target.id === 'scrollButton_2' || target.id === 'scrollButton_2_slide') {
        scrollToElement('.head_experience');
    } else if (target.id === 'scrollButton_3' || target.id === 'scrollButton_3_slide') {
        scrollToElement('.head_skill');
    } else if (target.id === 'scrollButton_4' || target.id === 'scrollButton_4_slide' || target.id === 'scrollButton_5') {
        scrollToElement('.head_contact');
    } else if (target.classList.contains('bi-x-lg')) {
        closeMenu();
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'visible2');
            } else {
                entry.target.classList.remove('visible', 'visible2');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .bounce-in').forEach(el => observer.observe(el));
});

const scrollButton = document.getElementById('scrollButton');
const content = document.querySelector('.body');
// แสดงปุ่มเมื่อเลื่อนหน้าเว็บลง
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// เมื่อคลิกปุ่ม เลื่อนขึ้นไปด้านบน
scrollButton.addEventListener('click', function() {
    content.scrollIntoView({ behavior: 'smooth' });
});


function toggleMenu() {
    const menu = document.querySelector('.header__menu-slide');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('close');
    } else {
        menu.classList.remove('close');
        menu.classList.add('show');
    }
}

function closeMenu() {
    const menu = document.querySelector('.header__menu-slide');
    menu.classList.remove('show');
    menu.classList.add('close');
}

document.querySelector('.bi-x-lg').addEventListener('click', closeMenu);



function scrollToElement(elementSelector) {
    const contentElement = document.querySelector(elementSelector);
    if (contentElement) {
        const startPosition = window.pageYOffset;
        const targetPosition = contentElement.getBoundingClientRect().top + startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition - startPosition, 600);
            window.scrollTo(0, run);
            if (timeElapsed < 600) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
}

const labeltext__content = document.querySelector(".text__content");
const n_x = 'Nattanon';
const color = '#FFF96D';
labeltext__content.innerHTML = `
    Hi, <br>I'm <span style="color: ${color}">${n_x}</span> Siripaisananusorn <br>Computer Science
    <div class="button__style" id="scrollButton_5">
        <p class="btn__text--style" id="scrollButton_5">Contact</p>
    </div>
`;

function handleScroll() {
    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header__style--text');
    const scrollY = window.scrollY;

    // ลดการทำงานภายในฟังก์ชัน
    if (scrollY > 10) { 
        header.classList.add('sticky');
        headerText.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
        headerText.classList.remove('sticky');
    }
}
// ใช้ debounce กับฟังก์ชัน handleScroll
window.addEventListener('scroll', debounce(handleScroll, 100)); // 100ms delay
