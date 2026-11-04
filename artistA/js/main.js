document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const year = button.dataset.year;
    document.querySelectorAll(".work-card").forEach(card => {
      card.hidden = year !== "all" && card.dataset.workYear !== year;
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
document.querySelectorAll(".image-button").forEach(button => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.title;
    lightboxCaption.textContent = button.dataset.title;
    lightbox.hidden = false;
  });
});
function closeLightbox() { lightbox.hidden = true; lightboxImage.src = ""; }
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
