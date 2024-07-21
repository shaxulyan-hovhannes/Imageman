export default function createTextareaField({
  name = "",
  rows = 1,
}: {
  name: string;
  rows?: number;
}): HTMLTextAreaElement {
  const textareaField = document.createElement("textarea");
  textareaField.name = name;
  textareaField.rows = rows;

  return textareaField;
}
