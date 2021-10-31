'ust strict';
(function () {
    window.__forceSmoothScrollPolyfill__ = true;

    // Scroll top btn
    function goToTop() {
        const btnTop = $('.go-to-top');

        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 100) {
                btnTop.fadeIn();
            } else {
                btnTop.fadeOut();
            }
        });
    }
 
    goToTop();

    // Burger
    const burgerBtn = document.querySelector('.burger');
    const menu = document.querySelector('.menu-mobile__wrapper');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', (e) => {
        e.preventDefault();

        menu.classList.toggle('menu--active');
        body.classList.toggle('lock');
    })

    // Timer
    const date = new Date('Jan 01 2022 00:00:00');
    
    function counts() {
        const daysEl = document.querySelector('.days');
        const hoursEl = document.querySelector('.hours');
        const minutesEl = document.querySelector('.minutes');
        const secondsEl = document.querySelector('.seconds');

        const now = new Date();
        const gap = date - now;

        let days = Math.floor(gap / 1000 / 60 / 60 / 24);
        let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(gap / 1000 / 60) % 60;
        let seconds = Math.floor(gap / 1000) % 60;

        if (gap < 0) {
            days+= 7;
            hours+= 24;
            minutes+= 60;
            seconds+= 60;
        }
        
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        if (gap === 0) {
            clearInterval(interval);
        }
    }

    counts();

    const interval = setInterval(() => {
        counts();
    }, 1000);
 
})();