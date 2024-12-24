import "./css/normalize.css";
import "./css/style.css";

import { appendHomePage } from "./pages/home.js";
import { appendAboutPage } from "./pages/about.js";
import { appendMenuPage } from "./pages/menu.js";
const mainContainer = document.querySelector("#content");
appendHomePage(mainContainer);

const mainButtons = [
  document.querySelector("#home"),
  document.querySelector("#about"),
  document.querySelector("#menu"),
];

function cleanUp() {
  mainContainer.innerHTML = "";
  mainButtons.forEach((button) => {
    button.style.textDecoration = "none";
  });
}

mainButtons[0].addEventListener("click", () => {
  cleanUp();
  appendHomePage(mainContainer);
  mainButtons[0].style.textDecoration = "overline";
});

mainButtons[1].addEventListener("click", () => {
  cleanUp();
  appendAboutPage(mainContainer);
  mainButtons[1].style.textDecoration = "overline";
});

mainButtons[2].addEventListener("click", () => {
  cleanUp();
  appendMenuPage(mainContainer);
  mainButtons[2].style.textDecoration = "overline";
});
