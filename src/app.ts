import createLayout from "./components/layout";

const root = document.getElementById("root");
const layout = createLayout();

document.addEventListener("DOMContentLoaded", () => {
  root?.appendChild(layout);
});
