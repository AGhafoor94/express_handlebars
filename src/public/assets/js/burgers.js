const displayModalButton = document.getElementById("displayModal");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.querySelector(".submitBtn");
const listElement = document.querySelector(".burgerList");
const reloadButton = document.querySelector(".reloadButton");

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
  console.log(id);
  $.ajax({
    url: `/api/burgers/${id}`,
    type: "DELETE",
  });
};

displayModalButton.addEventListener("click", displayModal);
closeModal.addEventListener("click", hideModal);
submitBtn.addEventListener("click", hideModal);
reloadButton.addEventListener("click", reloadPage);
