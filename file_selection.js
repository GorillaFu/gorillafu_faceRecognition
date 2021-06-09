const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const file = input.files[0];
  const text = document.createElement("p");
  if (file.length === 0) {
    text.textContent = "No file currently selected for upload";
    preview.appendChild(text);
  } else {
    if (validFileType(file)) {
      text.textContent = `File name: ${file.name}`;
    } else {
      text.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
    }
    preview.appendChild(text);
  }
}

const fileTypes = ["image/png", "image/jpeg"];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
