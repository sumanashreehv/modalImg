const openModalBtnElem = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElem = document.querySelector(".modal__content")

openModalBtnElem.addEventListener("click", () => {
    modalElement.classList.add("open")
});

modalContentElem.addEventListener("click", () => {
    modalElement.classList.remove("open")
})
