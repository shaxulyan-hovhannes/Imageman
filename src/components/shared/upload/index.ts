export default function createUploadFileInput({
  id = "",
}: {
  id?: string;
}): HTMLInputElement {
  const uploadInput = document.createElement("input");
  uploadInput.id = id;
  uploadInput.type = "file";

  return uploadInput;
}
