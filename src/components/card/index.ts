import "./../../assets/styles/card/index.scss";

import { Card } from "./../../types";
import { createCardElement } from "./card-item";
import openModal from "./card-modal";
import { addCard, editCard, deleteCard } from "./../../redux/cardsSlice";
import store from "./../../redux/store";

export default function createCardContainer(): HTMLElement {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  function renderCards() {
    cardContainer.innerHTML = "";

    const cards = store.getState().cards.cards;
    cards.forEach((card: Card) => {
      const cardElement = createCardElement(card, handleEdit, handleDelete);
      cardContainer.appendChild(cardElement);
    });

    const addCardElement = document.createElement("div");
    addCardElement.className = "card-item card-item-add";
    addCardElement.addEventListener("click", () => openModal(null, handleAdd));
    cardContainer.appendChild(addCardElement);
  }

  function handleAdd(card: Card) {
    store.dispatch(addCard(card));
    renderCards();
  }

  function handleDelete(id: string) {
    store.dispatch(deleteCard(id));
    renderCards();
  }

  function handleEdit(card: Card) {
    openModal(card, (updatedCard) => {
      store.dispatch(editCard(updatedCard));
      renderCards();
    });
  }

  renderCards();

  return cardContainer;
}
