/**
 * Format text
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 * @package Iwamidenko-Recruit
 */

export default class FormatText {

  constructor() {
    const headings = document.querySelectorAll('.section__heading');
    if (!headings.length) return;

    headings.forEach((heading) => {
      const text = heading.id;
      heading.dataset.title = text.replace('-', ' ');
    });

    const terms = document.querySelectorAll('.postItem__terms');
    if (!terms.length) return;

    terms.forEach((term) => {
      // アンカーの中身を配列に格納
      const links = term.querySelectorAll('a');
      const texts = [];
      links.forEach((link) => {
        texts.push(link.textContent);
      });

      // 配列をspanタグとして出力
      term.innerHTML = '';
      texts.forEach((text) => {
        const span = document.createElement('span');
        span.textContent = text;
        term.appendChild(span);
      });
    });
  }

}
