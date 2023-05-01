const modalClose = document.querySelector(".modal--close");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalDiv = document.querySelector(".modal--div");

const toggleModal = function () {
  modal.classList.toggle("modal-window--close");
};

btn.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModal);

modal.addEventListener("click", function (e) {
  if (e.target.closest(".modal--div") === null) {
    toggleModal();
  }
});
