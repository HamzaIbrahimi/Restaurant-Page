import mainBurger from "../images/mae-mu-I7A_pHLcQK8-unsplash.jpg";
import hotDog from "../images/hotdogs.jpg";
import smashBurger from "../images/smash_burger.jpg";

let imgInformation =
  "Indulge in the perfect burger experience - crafted just for you!";
let imgExtraInformation =
  "Treat yourself to the ultimate burger experience - made with fresh, flavorful ingredients and crafted to perfection. Each bite is a burst of taste that will leave you craving for more!";

export function renderImage(id, imgSrc) {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.id = id;
  return img;
}

export function renderDiv(id = "", text = "") {
  const div = document.createElement("div");
  div.textContent = text;
  div.id = id;
  return div;
}

function renderButton(text) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.border = `3px solid black`;
  return btn;
}

const appendChildren = (container, ...args) => {
  for (const elem of args) {
    container.appendChild(elem);
  }
};

function renderGridSpecial(div) {
  const containerGrid = renderDiv("special_items_grid");
  const gridFirstChild = renderDiv("hotdog_grid");
  const hotdogImage = renderImage("hotdog", hotDog);
  const titleDivOne = renderDiv("", "Our Special Hotdogs");
  const hotdogText =
    "Not a burger fan? No worries, we've got sizzling hotdogs just for you!";
  const textDiv = renderDiv("", hotdogText);
  const btn = renderButton("See the specials");
  appendChildren(gridFirstChild, hotdogImage, titleDivOne, textDiv, btn);
  const smashBurgerImage = renderImage("smashBurger", smashBurger);
  const titleDivTwo = renderDiv("", "Our Special Smash Burger");
  const smashBurgerText =
    "Meet the crowd favorite: our juicy, crispy-edged Smash Burger – a flavor-packed classic!";
  const textDivSmashBurger = renderDiv("", smashBurgerText);
  const btnBurger = renderButton("Order NOW!");
  const gridSecondChild = renderDiv("smashBurger_grid");
  appendChildren(
    gridSecondChild,
    smashBurgerImage,
    titleDivTwo,
    textDivSmashBurger,
    btnBurger
  );
  appendChildren(containerGrid, gridFirstChild, gridSecondChild);
  div.appendChild(containerGrid);
}

export function appendHomePage(div) {
  const imgContainer = renderDiv("hero_container");
  const imgText = renderDiv("img_text", imgInformation);
  const extraImgText = renderDiv("extra_img_text", imgExtraInformation);
  const img = renderImage("hero_image", mainBurger);
  appendChildren(imgContainer, img, imgText, extraImgText);
  div.appendChild(imgContainer);
  renderGridSpecial(div);
}
