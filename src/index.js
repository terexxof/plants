import BurgerHandler from "./js/BurgerHandler";
import Service from "./js/Services";

if (window.innerWidth < 767) {
  const burger = new BurgerHandler();
  burger.createBurger();
}

const service = new Service();
service.activateButtons();
