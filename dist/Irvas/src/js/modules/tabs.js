    // установка функции с аргументами для их введения с html класами в виде аргументов 
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

          //добавление атрибута {display = none} к неактивным вкладкам табов 
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        //+ удаление выбранного класса активности
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    // по умолчанию включение первой вкладки 
    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;