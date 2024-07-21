import "./../../../assets/styles/card/card-modal.scss";

import { Card } from "./../../../types";

export default function openModal(
  card: Card | null,
  onSave: (card: Card) => void
): void {
  const modal = document.createElement("div");
  modal.className = "card-modal-backdrop";

  const titleInput = document.createElement("input");
  titleInput.value = card ? card.title : "";
  modal.appendChild(titleInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.value = card ? card.description : "";
  modal.appendChild(descriptionInput);

  const imageInput = document.createElement("input");
  imageInput.type = "file";
  modal.appendChild(imageInput);

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    if (imageInput.files && imageInput.files.length > 0) {
      const now = new Date();

      const newCard: Card = {
        id: card ? card.id : String(Date.now()),
        title: titleInput.value,
        description: descriptionInput.value,
        image: URL.createObjectURL(imageInput.files[0]),
        created_at: `${now.getDate()}.${
          now.getMonth() + 1
        }.${now.getFullYear()}`,
      };
      onSave(newCard);
      document.body.removeChild(modal);
    } else {
      alert("Please upload an image.");
    }
  });
  modal.appendChild(saveButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  modal.appendChild(cancelButton);

  document.body.appendChild(modal);
}
