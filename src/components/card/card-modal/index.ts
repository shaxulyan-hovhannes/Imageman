import "./../../../assets/styles/card/card-modal.scss";

import { Card } from "./../../../types";
import createCardForm from "../card-form";

import { MODAL_BACKDROP_CLASSNAME } from "../../../constants/common";

export default function openModal(
  card: Card | null,
  onSave: (card: Card) => void
): void {
  const modal = document.createElement("div");
  modal.className = MODAL_BACKDROP_CLASSNAME;
  modal.addEventListener("click", (e: Event) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.classList.contains(MODAL_BACKDROP_CLASSNAME)
    ) {
      document.body.removeChild(modal);
    }
  });

  const dialog = document.createElement("div");
  dialog.className = "card-modal-dialog";

  const cardForm = createCardForm(card, onSave);

  dialog.appendChild(cardForm);

  modal.appendChild(dialog);

  document.body.appendChild(modal);
}
