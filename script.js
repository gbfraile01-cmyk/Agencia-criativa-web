/* =========================================
MENU DE NAVEGAÇÃO
========================================= */

const menu = document.querySelector('.header__menu');
const navigation = document.querySelector('.header__navigation');

if (menu && navigation) {
const links = menu.querySelectorAll('.header__link');

```
links.forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('header__navigation--active');
    });
});
```

}

/* =========================================
ROLAGEM SUAVE
========================================= */

const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach((link) => {
link.addEventListener('click', (event) => {
const targetId = link.getAttribute('href');

```
    if (targetId === '#') {
        return;
    }

    const target = document.querySelector(targetId);

    if (target) {
        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
```

})