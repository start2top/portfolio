window.addEventListener('DOMContentLoaded', function() {
    var hamburger =     document.querySelector('.hamburger'),
        menu      =     document.querySelector('.menu'),
        menuClose =     document.querySelector('.menu__close'),
        overlayClose =  document.querySelector('.menu__overlay');

        hamburger.addEventListener('click', function() {
            menu.classList.add('active');
        });

        menuClose.addEventListener('click', function() {
            menu.classList.remove('active');
        });

        overlayClose.addEventListener('click', function() {
            menu.classList.remove('active');
        });

        //загрузочная строка прогрузка вычисляется по значению % 
    var percentage =   document.querySelectorAll('.percentage'),
        lines = document.querySelectorAll('.skills__percentage_calc__elem__bar span');

        percentage.forEach( function (item, i) {
            lines[i].style.width = item.innerHTML;
        });
        
        
            
});