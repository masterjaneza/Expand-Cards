let img = document.querySelectorAll("img");

img.forEach((image) => {
  image.addEventListener("click", () => {
    img.forEach((imgEl) => {
      imgEl.classList.remove("expand");
      imgEl.classList.add("not-expanded");
    });
    image.classList.add("expand");
    image.classList.remove("not-expanded");
  });
});
