import './../../assets/styles/layout.scss';

import Header from './header/header.html';
import createCardContainer from './../card';

export default function createLayout(): HTMLElement {
  const layout = document.createElement('div');

  layout.className = 'layout';

  layout.innerHTML = Header;

  function renderLayout() {
    const h = document.createElement('h1');

    h.textContent = 'LAYOUTTTTTTTTt';
    h.className = 'layout-header';
    const CardContainer = createCardContainer();

    // layout.insertAdjacentHTML("beforeend", CardContainer);
    layout.appendChild(CardContainer);
  }

  renderLayout();

  return layout;
}
