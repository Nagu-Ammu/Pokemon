let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    img[i].style.filter = "drop-shadow(4px 4px 3px palegreen)";
  });
}
