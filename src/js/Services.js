export default class Service {
  constructor() {
    this.buttonsWrapper = document.querySelector('.services-buttons-wrapper');
    this.gardens = document.querySelectorAll('.gardens');
    this.lawn = document.querySelectorAll('.lawn');
    this.planting = document.querySelectorAll('.planting');
    this.clickedTag = [];
  }

  activateButtons() {
    this.buttonsWrapper.addEventListener('click', (event) => {
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

    document.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') this.removeAllHighlight();
    });
  }

  highlightCards() {
    document
      .querySelectorAll('.services-item')
      .forEach((item) => item.classList.add('blur'));
    for (let i = 0; i < this.clickedTag.length; i += 1) {
      if (this.clickedTag[i].classList.contains('gardens-button')) {
        this.gardens.forEach((item) => item.classList.remove('blur'));
      }
      if (this.clickedTag[i].classList.contains('lawn-button')) {
        this.lawn.forEach((item) => item.classList.remove('blur'));
      }
      if (this.clickedTag[i].classList.contains('planting-button')) {
        this.planting.forEach((item) => item.classList.remove('blur'));
      }
    }
  }

  removeAllHighlight() {
    document
      .querySelectorAll('.services-button')
      .forEach((item) => item.classList.remove('active'));
    this.clickedTag.length = 0;
    document
      .querySelectorAll('.blur')
      .forEach((item) => item.classList.remove('blur'));
  }
}
