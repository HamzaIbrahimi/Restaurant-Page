import mainBurger from "../images/mae-mu-I7A_pHLcQK8-unsplash.jpg";
import hotDog from "../images/hotdogs.jpg";
import smashBurger from "../images/smash_burger.jpg";
import instaIcon from "../images/insta_icon.png";
import fbIcon from "../images/fb_icon.png";

const imgInformation =
  "Indulge in the perfect burger experience - crafted just for you!";
const imgExtraInformation =
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
  return btn;
}

export const appendChildren = (container, ...args) => {
  for (const elem of args) {
    container.appendChild(elem);
  }
};

function renderGridSpecial(div) {
  const containerGrid = renderDiv("special_items_grid");
  const gridFirstChild = renderDiv("hotdog_grid");
  const hotdogText =
    "Not a burger fan? No worries, we've got sizzling hotdogs just for you!";
  const smashBurgerText =
    "Crowd favorite: our juicy, crispy-edged Smash Burger – a flavor-packed classic!";
  const gridFirstChildElements = [
    renderImage("hotdog", hotDog),
    renderDiv("", "Our Special Hotdogs"),
    renderDiv("", hotdogText),
    renderButton("See the specials"),
  ];
  appendChildren(gridFirstChild, ...gridFirstChildElements);

  const gridSecondChild = renderDiv("smashBurger_grid");
  const gridSecondChildElements = [
    renderImage("smashBurger", smashBurger),
    renderDiv("", "Our Special Smash Burger"),
    renderDiv("", smashBurgerText),
    renderButton("Order NOW!"),
  ];
  appendChildren(gridSecondChild, ...gridSecondChildElements);
  appendChildren(containerGrid, gridFirstChild, gridSecondChild);
  div.appendChild(containerGrid);
}

export function renderFooter(div) {
  const footerContainer = renderDiv("footer_container");
  const iconContainer = renderDiv("icons");
  const images = [renderImage("fb", fbIcon), renderImage("insta", instaIcon)];
  appendChildren(iconContainer, ...images);
  const footerNavigationContainer = renderDiv("footer_buttons");
  const allButtons = [
    renderButton("About"),
    renderButton("Contact"),
    renderButton("Location"),
    renderButton("Awards"),
    renderButton("Careers"),
    renderButton("Terms"),
    renderButton("Privacy"),
    renderButton("Email Signup"),
  ];
  appendChildren(footerNavigationContainer, ...allButtons);
  appendChildren(footerContainer, iconContainer, footerNavigationContainer);
  div.appendChild(footerContainer);
}
export function appendHomePage(div) {
  const imgContainer = renderDiv("hero_container");
  const fullHomePage = [
    renderImage("hero_image", mainBurger),
    renderDiv("img_text", imgInformation),
    renderDiv("extra_img_text", imgExtraInformation),
  ];
  appendChildren(imgContainer, ...fullHomePage);
  div.appendChild(imgContainer);
  renderGridSpecial(div);
  renderFooter(div);
}
