export default class BurgerHandler {
  constructor() {
    this.burgerItem = document.querySelector('.burger');
    this.menu = document.querySelector('.header-nav');
    this.menuCloseItem = document.querySelector('.header-nav');
    this.menuLinks = document.querySelectorAll('.nav-link');
  }

  createBurger() {
    this.burgerItem.addEventListener('click', () => {
      this.menu.classList.add('header-nav-active');
    });

    this.menuCloseItem.addEventListener('click', () => {
      this.menu.classList.remove('header-nav-active');
    });

    for (let i = 0; i < this.menuLinks.length; i += 1) {
      this.menuLinks[i].addEventListener('click', () => {
        this.menu.classList.remove('header-nav-active');
      });
    }
  }
}
