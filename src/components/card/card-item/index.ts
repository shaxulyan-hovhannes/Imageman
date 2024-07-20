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

  const title = document.createElement("h3");
  title.textContent = card.title;
  cardElement.appendChild(title);

  const description = document.createElement("p");
  description.textContent = card.description;
  cardElement.appendChild(description);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => onEdit(card));
  cardElement.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "card-item-delete-button";
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    // alert(card.id);
    onDelete(card.id);
  });
  cardElement.appendChild(deleteButton);

  return cardElement;
}
