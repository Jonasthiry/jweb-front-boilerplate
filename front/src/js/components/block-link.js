export default class BlockLink {

  constructor() {

    const cards = document.querySelectorAll('[data-block-link]');
    Array.prototype.forEach.call(cards, card => {
      let down, up, link = card.querySelector('h3 a');
      card.style.cursor = 'pointer';
      card.onmousedown = () => down = +new Date();
      card.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
          link.click();
        }
      }
    });

  }

}