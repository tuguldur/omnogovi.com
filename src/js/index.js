import { MDCRipple } from "@material/ripple";
import "../scss/index.scss";
import "./navbar";
import "./drawer";
import "./card";
console.log("🎄");
var iconButton = document.querySelectorAll(".mdc-icon-button");
iconButton.forEach(iconButton => {
  new MDCRipple(iconButton).unbounded = true;
});

const buttons = document.querySelectorAll(".mdc-button");
for (const button of buttons) {
  new MDCRipple(button);
}
