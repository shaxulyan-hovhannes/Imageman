import Header from "./header/header.html";
import "./header/header.scss";

export default function createLayout(): HTMLElement {
  const layout = document.createElement("div");

  layout.className = "layout";

  layout.innerHTML = Header;

  function renderLayout() {
    const h = document.createElement("h1");

    h.textContent = "LAYOUTTTTTTTTt";
    h.className = "layout-header";

    // layout.insertAdjacentHTML("beforeend", h);
    layout.appendChild(h);
  }

  renderLayout();

  return layout;
}
