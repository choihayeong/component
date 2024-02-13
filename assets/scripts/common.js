// common.js
/* ACCORDION */
const accordion = document.querySelector(".accordion"),
  accordionItem = accordion.querySelectorAll("li");

function accordionItemClickEvent(ele) {
  ele.target.classList.toggle("active");
  ele.target.nextElementSibling.classList.toggle("active");
}

accordionItem.forEach((item) => {
  item.addEventListener("click", accordionItemClickEvent);
});

/* MODAL */
const body = document.body,
  btnModal = document.querySelector("#btnModal"),
  btnModalClose = document.querySelector(".btn-modal");

function modalBtnClickEvent(e) {
  e.target.nextElementSibling.classList.toggle("active");
  body.classList.add("dim");
}
function modalCloseEvent(e) {
  console.log(e.target.dataset.modal);
}

btnModal.addEventListener("click", modalBtnClickEvent);
btnModalClose.addEventListener("click", modalCloseEvent);
