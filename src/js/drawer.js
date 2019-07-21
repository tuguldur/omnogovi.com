import { MDCRipple } from "@material/ripple";
import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
const lists = document.querySelectorAll(".drawer-link,.mdc-list-item");
for (const list of lists) {
  new MDCRipple(list);
}

const listEl = document.querySelector("#drawer-list");
const drawerElement = document.querySelector(".mdc-drawer");
const drawerButton = document.getElementById("drawer-button");
const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;
  drawerButton.addEventListener("click", _ => {
    drawer.open = !drawer.open;
  });
  listEl.addEventListener("click", _ => {
    drawer.open = false;
  });
};

if (window.matchMedia("(max-width: 1321px)").matches) {
  initModalDrawer();
} else {
  const list = new MDCList(listEl);
  list.wrapFocus = true;
}
// Toggle between permanent drawer and modal drawer at breakpoint 900px
const resizeHandler = () => {
  if (window.matchMedia("(max-width: 1321px)").matches) {
    initModalDrawer();
  } else {
    drawerElement.classList.remove("mdc-drawer--modal");
  }
};
window.addEventListener("resize", resizeHandler);
