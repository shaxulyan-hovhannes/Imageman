import { Card } from "./../../../types";

export function createCardElement(
  card: Card,
  onEdit: (card: Card) => void,
  onDelete: (id: string) => void
): HTMLElement {
  const cardElement = document.createElement("div");
  cardElement.className = "card-item";

  const image = document.createElement("img");
  image.src = card.image;
  cardElement.appendChild(image);

  const deleteButton = document.createElement("button");
  deleteButton.className = "card-item-delete-button";
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    onDelete(card.id);
  });
  cardElement.appendChild(deleteButton);

  const cardContent = document.createElement("div");
  cardContent.className = "card-item-main-content";
  cardElement.appendChild(cardContent);

  const infoSection = document.createElement("div");
  infoSection.className = "card-item-info-section";
  cardContent.appendChild(infoSection);

  const title = document.createElement("h5");
  title.textContent = card.title;
  infoSection.appendChild(title);

  const description = document.createElement("p");
  description.className = "card-item-info-section-description";
  description.textContent = card.description;
  infoSection.appendChild(description);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => onEdit(card));
  cardContent.appendChild(editButton);

  return cardElement;
}
