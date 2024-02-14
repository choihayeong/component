// common.js
/** body tag */
const body = document.body;

/* ACCORDION */
function closeAllDisclosure() {
  const openAccordionItem = document.querySelectorAll("details[open]");

  for (let i = 0; i < openAccordionItem.length; i++) {
    openAccordionItem[i].removeAttribute("open");
  }
}

closeAllDisclosure();

/* previdous accordion */
const accordion = document.querySelector(".accordion"),
  accordionItem = accordion.querySelectorAll("li");

function accordionItemClickEvent(ele) {
  ele.target.classList.toggle("active");
  ele.target.nextElementSibling.classList.toggle("active");
}

accordionItem.forEach((item) => {
  item.addEventListener("click", accordionItemClickEvent);
});

/* DROPDOWN */
const dropdownBtnEl = document.querySelectorAll(".btn--dropdown");
const dropdownEl = document.querySelectorAll(".dropdown");

const toggleAnotherEvent = (el) => {
  document.querySelectorAll(".btn--dropdown.active").forEach((item) => {
    if (el !== item) {
      item.click();
    }
  });
};

dropdownBtnEl.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    toggleAnotherEvent(e);
    el.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  let target = e.target;

  if (!target.classList.contains("btn--dropdown")) {
    dropdownBtnEl.forEach((el, index) => {
      el.classList.remove("active");
    });
    dropdownEl.forEach((el, index) => {
      el.classList.remove("active");
    });
  }
});

/* MODAL */
const btnModal = document.querySelector("#btnModal");
const modalCloseEl = document.querySelector("#modalClose");

function modalBtnClickEvent(e) {
  e.target.nextElementSibling.classList.toggle("active");
  body.classList.add("dim");
}
function modalCloseEvent(e) {
  const modalEl = document.querySelector(`#${e.target.dataset.modal}`);
  modalEl.classList.remove("active");
  body.classList.remove("dim");
}

btnModal.addEventListener("click", modalBtnClickEvent);
modalCloseEl.addEventListener("click", modalCloseEvent);
