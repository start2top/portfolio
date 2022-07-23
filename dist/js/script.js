window.addEventListener('DOMContentLoaded', function() {
    const hamburger =     document.querySelector('.hamburger'),
        menu      =     document.querySelector('.menu'),
        menuClose =     document.querySelector('.menu__close'),
        overlayClose =  document.querySelector('.menu__overlay'),
        body = document.querySelector('body'),
        formSendBtn = document.querySelector('.contacts__btn');


        hamburger.addEventListener('click', function() {
            menu.classList.add('active');
            if (window.matchMedia("(max-width: 700px)").matches) {
                body.style.overflow = 'hidden';
            }
        });

        menuClose.addEventListener('click', function() {
            menu.classList.remove('active');
            body.style.overflow = 'visible';
        });

        overlayClose.addEventListener('click', function() {
            menu.classList.remove('active');
            body.style.overflow = 'visible';

        });

        //загрузочная строка прогрузка вычисляется по значению % 
    var percentage =   document.querySelectorAll('.percentage'),
        lines = document.querySelectorAll('.skills__percentage_calc__elem__bar span');

        percentage.forEach( function (item, i) {
            lines[i].style.width = item.innerHTML;
        });
        
        let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop  = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

                requestAnimationFrame(step);  

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop 
                    + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
            }
        });
    });
    // formSendBtn.addEventListener('click', function(event) {
    //     event.preventDefault();
        
    // });
            
});