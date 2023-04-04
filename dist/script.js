/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/BurgerHandler.js":
/*!*********************************!*\
  !*** ./src/js/BurgerHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BurgerHandler)
/* harmony export */ });
class BurgerHandler {
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

/***/ }),

/***/ "./src/js/Services.js":
/*!****************************!*\
  !*** ./src/js/Services.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Service)
/* harmony export */ });
class Service {
  constructor() {
    this.buttonsWrapper = document.querySelector('.services-buttons-wrapper');
    this.gardens = document.querySelectorAll('.gardens');
    this.lawn = document.querySelectorAll('.lawn');
    this.planting = document.querySelectorAll('.planting');
    this.clickedTag = [];
  }
  activateButtons() {
    this.buttonsWrapper.addEventListener('click', event => {
      if (event.target.tagName !== 'BUTTON') return;
      if (this.clickedTag.length < 2) {
        event.target.classList.add('active');
        this.clickedTag.push(event.target);
        this.highlightCards();
      } else {
        this.removeAllHighlight();
        event.target.classList.add('active');
        this.clickedTag.push(event.target);
        this.highlightCards();
      }
    });
    document.addEventListener('click', event => {
      if (event.target.tagName !== 'BUTTON') this.removeAllHighlight();
    });
  }
  highlightCards() {
    document.querySelectorAll('.services-item').forEach(item => item.classList.add('blur'));
    for (let i = 0; i < this.clickedTag.length; i += 1) {
      if (this.clickedTag[i].classList.contains('gardens-button')) {
        this.gardens.forEach(item => item.classList.remove('blur'));
      }
      if (this.clickedTag[i].classList.contains('lawn-button')) {
        this.lawn.forEach(item => item.classList.remove('blur'));
      }
      if (this.clickedTag[i].classList.contains('planting-button')) {
        this.planting.forEach(item => item.classList.remove('blur'));
      }
    }
  }
  removeAllHighlight() {
    document.querySelectorAll('.services-button').forEach(item => item.classList.remove('active'));
    this.clickedTag.length = 0;
    document.querySelectorAll('.blur').forEach(item => item.classList.remove('blur'));
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_BurgerHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/BurgerHandler */ "./src/js/BurgerHandler.js");
/* harmony import */ var _js_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Services */ "./src/js/Services.js");


if (window.innerWidth < 767) {
  const burger = new _js_BurgerHandler__WEBPACK_IMPORTED_MODULE_0__["default"]();
  burger.createBurger();
}
const service = new _js_Services__WEBPACK_IMPORTED_MODULE_1__["default"]();
service.activateButtons();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map