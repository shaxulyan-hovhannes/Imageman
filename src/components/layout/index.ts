export default function createLayout(): HTMLElement {
  const layout = document.createElement("div");

  function renderLayout() {
    layout.innerHTML = "<h1>LAYOUT</h1>";
  }

  renderLayout();

  return layout;
}
