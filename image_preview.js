const files = document.getElementById("image_uploads");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".preview_image");
const previewText = previewContainer.querySelector(".preview_text");

files.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    previewText.style.display = "none";
    previewImage.style.display = "block";
    reader.addEventListener("load", function () {
      console.log(this);
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  } else {
    previewText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute("src", "");
  }
});
