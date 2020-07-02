const displayModalButton = document.getElementById("displayModal");
const closeModal = document.querySelector(".modal-close");
const submitBtn = document.querySelector(".submitBtn");
const listElement = document.querySelector(".burgerList");

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
  const eaten = element.getAttribute("data-eaten");
  const eatenValue = {
    eaten: true,
  };
  $.ajax({
    method: "PUT",
    url: `/api/burgers?id=${id}`,
    data: {
      eatenValue,
    },
  }).then(console.log(id));
};
displayModalButton.addEventListener("click", displayModal);
closeModal.addEventListener("click", hideModal);
submitBtn.addEventListener("click", hideModal);
