const imageSectionEl = document.querySelector (".image_section");
const textSectionEl = document.querySelector (".text_section");

window.addEventListener ("scroll", () => {
    updateImage();
});

function updateImage () {
    imageSectionEl.style.opacity = 1 - window.pageYOffset / 800;
    imageSectionEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}