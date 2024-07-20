import "./../../assets/styles/card.scss";

import { Card } from "./../../types";
import { createCardElement } from "./card-item";
// import { openModal } from "./CardModal";
import { addCard, editCard, deleteCard } from "./../../redux/cardsSlice";
import store from "./../../redux/store";

export default function createCardContainer(): HTMLElement {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  cardContainer.textContent = "CARD CONTAINER";

  const handleEdit = () => {};
  const handleDelete = () => {};

  function renderCards() {
    cardContainer.innerHTML = "";

    const cards = store.getState().cards.cards;
    cards.forEach((card) => {
      const cardElement = createCardElement(card, handleEdit, handleDelete);
      cardContainer.appendChild(cardElement);
    });

    const addCardElement = document.createElement("div");
    addCardElement.className = "card-item card-item-add";
    // addCardElement.textContent = "+";
    // addCardElement.addEventListener("click", () => openModal(null, handleAdd));
    cardContainer.appendChild(addCardElement);
  }

  renderCards();

  return cardContainer;
}
