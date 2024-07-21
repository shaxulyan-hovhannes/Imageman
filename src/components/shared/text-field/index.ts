export default function createTextField({
  name = '',
}: {
  name?: string;
}): HTMLInputElement {
  const inputTextFied = document.createElement('input');
  inputTextFied.type = 'text';
  inputTextFied.name = name;

  return inputTextFied;
}
