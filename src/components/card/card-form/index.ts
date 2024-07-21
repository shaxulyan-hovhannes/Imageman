import * as Yup from "yup";
import uuid4 from "uuid4";
import "./../../../assets/styles/card/card-form.scss";

import { Card } from "./../../../types";

import createTextField from "../../shared/text-field";
import createTextareaField from "../../shared/textarea-field";
import createUploadFileInput from "../../shared/upload";

import { MODAL_BACKDROP_CLASSNAME } from "../../../constants/common";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string(),
});

// ADD-TO-DO need big refactoring
export default function createCardForm(
  card: Card | null,
  onSave: (card: Card) => void
): HTMLFormElement {
  const cardForm = document.createElement("form");

  const titleInputWrapper = document.createElement("div");
  titleInputWrapper.className = "card-form-item-container";

  const titleInput = createTextField({
    name: "title",
  });

  if (card) {
    titleInput.value = card.title;
  }

  const titleLabel = document.createElement("p");
  titleLabel.className = "card-form-field-label";
  titleLabel.textContent = "Name";
  titleInputWrapper.appendChild(titleLabel);

  titleInputWrapper.appendChild(titleInput);
  cardForm.appendChild(titleInputWrapper);

  const descriptionInputWrapper = document.createElement("div");
  descriptionInputWrapper.className = "card-form-item-container";
  const descriptionInput = createTextareaField({
    name: "description",
    rows: 4,
  });
  if (card) {
    descriptionInput.value = card.description;
  }
  const descriptionLabel = document.createElement("p");
  descriptionLabel.className = "card-form-field-label";
  descriptionLabel.textContent = "Description";
  descriptionInputWrapper.appendChild(descriptionLabel);

  descriptionInputWrapper.appendChild(descriptionInput);
  cardForm.appendChild(descriptionInputWrapper);

  const uploadInputWrapper = document.createElement("div");
  const uploadInputId = "upload-input";

  uploadInputWrapper.className = "card-form-item-container";
  const uploadInput = createUploadFileInput({
    id: uploadInputId,
  });

  uploadInput.addEventListener("change", () => {
    if (uploadInput.files && uploadInput.files.length > 0) {
      const imageSRC = URL.createObjectURL(uploadInput.files[0]);

      const submitButtonWrapper = document.createElement("div");
      submitButtonWrapper.className =
        "card-form-item-container card-form-submit-wrapper";
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Save";
      const image = document.createElement("img");
      image.src = imageSRC;
      image.alt = "card";
      submitButtonWrapper.appendChild(image);
      submitButtonWrapper.appendChild(submitButton);
      cardForm.appendChild(submitButtonWrapper);

      cardForm.removeChild(uploadInputWrapper);
    }
  });

  const uploadImagelabel = document.createElement("label");
  uploadImagelabel.htmlFor = uploadInputId;
  uploadImagelabel.style.cursor = "pointer";
  const labelIcon = document.createElement("div");
  uploadImagelabel.appendChild(labelIcon);
  // Of course, instead of just icon here should be a button
  uploadInputWrapper.appendChild(uploadImagelabel);
  uploadInputWrapper.appendChild(uploadInput);
  cardForm.appendChild(uploadInputWrapper);

  cardForm.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const formData = {
      title: titleInput.value,
      description: descriptionInput.value,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      if (uploadInput.files && uploadInput.files.length > 0) {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const id = uuid4();
        const createdAt = `${day > 9 ? day : "0" + day}.${
          month > 9 ? month : "0" + month
        }.${now.getFullYear()}`;
        const newCard: Card = {
          id: card ? card.id : id,
          title: titleInput.value,
          description: descriptionInput.value,
          created_at: card ? card.created_at : createdAt,
          image: URL.createObjectURL(uploadInput.files[0]),
        };
        onSave(newCard);
        const modal = document.querySelector(`.${MODAL_BACKDROP_CLASSNAME}`);

        if (modal instanceof HTMLElement) {
          document.body.removeChild(modal);
        }
      } else {
        alert("Please upload an image.");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          alert(error.message);
        });
      } else {
        console.error("Unexpected error:", err);
      }
    }
  });

  return cardForm;
}
