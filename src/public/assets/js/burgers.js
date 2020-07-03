const body = document.querySelector(".body");
const displayModalButton = document.getElementById("displayModal");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.querySelector(".submitBtn");
const listElement = document.querySelector(".burgerList");
const addBurger = document.querySelector(".addBurgerBtn");

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

const updateItem = (element) => {
  const id = element.getAttribute("data-id");
  $.ajax({
    url: `/api/burgers/${id}`,
    type: "PUT",
  });
};

const deleteItem = (element) => {
  const id = element.getAttribute("data-id");
  $.ajax({
    url: `/api/burgers/${id}`,
    type: "DELETE",
  });
};

const changeStyle = (event) => {
  addBurger.classList.add("is-info");
};

displayModalButton.addEventListener("click", displayModal);
closeModal.addEventListener("click", hideModal);
submitBtn.addEventListener("click", hideModal);
addBurger.addEventListener("hover", changeStyle);
