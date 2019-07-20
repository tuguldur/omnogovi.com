import { MDCMenuSurface } from "@material/menu-surface";

const account = document.getElementById("account-button");
const search = document.getElementById("search-input");
const clear = document.getElementById("clear-button");
const form = document.getElementById("search-form");
const searchTrigger = document.getElementById("search-trigger");
const seachContainer = document.getElementById("search-container");
const menuSurface = new MDCMenuSurface(
  document.querySelector(".mdc-menu-surface")
);
account.addEventListener("click", _ => {
  menuSurface.open();
});
// account.addEventListener("blur", _ => {
//   menuSurface.close();
// });
search.addEventListener("keyup", e => {
  var input = e.target.value;
  if (input) {
    clear.style.display = "block";
    seachContainer.setAttribute("has-text", "");
  } else {
    clear.style.display = "none";
    seachContainer.removeAttribute("has-text", "");
  }
});
search.addEventListener("focus", _ => {
  form.classList.add("f");
});
search.addEventListener("blur", _ => {
  form.classList.remove("f");
  seachContainer.classList.remove("show");
});
clear.addEventListener("click", _ => {
  clear.style.display = "none";
  seachContainer.removeAttribute("has-text");
});

searchTrigger.addEventListener("click", _ => {
  seachContainer.classList.add("show");
  search.focus();
});
console.log("navbar imported");
