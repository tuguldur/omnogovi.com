import { MDCRipple } from "@material/ripple";

const cards = document.querySelectorAll(".object-card, .mdc-card, .job-card");

cards.forEach(card => {
  new MDCRipple(card);
});
