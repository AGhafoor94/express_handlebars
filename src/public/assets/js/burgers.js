const body = document.querySelector("body");
const displayModalButton = document.getElementById("displayModal");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.querySelector(".submitBtn");

const displayModal = (event) => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("displayNone");
  modal.classList.add("displayBlock");
};
const hideModal = (event) => {
  const modal = document.querySelector(".modal");
  modal.classList.add("displayNone");
  modal.classList.remove("displayBlock");
};
displayModalButton.addEventListener("click", displayModal);
//body.addEventListener("click", hideModal);
closeModal.addEventListener("click", hideModal);
submitBtn.addEventListener("click", hideModal);
