import {
  renderImage,
  renderDiv,
  renderFooter,
  appendChildren,
} from "./home.js";
import chickenBurger from "../images/chicken_burger.jpg";
import eggBurger from "../images/egg_burger.jpg";
import smashBurger from "../images/secondSmashBurger.jpg";
import hotdogs from "../images/hotdogs.jpg";
import healthyBurger from "../images/healthy_burger.jpg";

const smashBurgerDescription =
  "Crispy, juicy, and smashed to perfection on the grill.";
const eggBurgerDescription =
  "A savory burger topped with a perfectly fried egg.";
const chickenBurgerDescription =
  "Tender, flavorful chicken grilled or fried to perfection.";
const hotdogsDescription =
  "Classic, juicy hotdogs with your favorite toppings.";
const healthyBurgerDescription =
  "A wholesome, guilt-free burger packed with fresh and nutritious ingredients.";

function gridItem(image, title, description, price, div) {
  const elems = [
    renderImage("", image),
    renderDiv("", title),
    renderDiv("", description),
    renderDiv("", price),
  ];
  appendChildren(div, ...elems);
}

export function appendMenuPage(div) {
  const menuContainer = renderDiv("menu_container");
  const menuTitle = renderDiv("menu_title", "The MENU");
  const menuGrid = renderDiv("menu_grid", "");
  const item1 = renderDiv("", "");
  const item2 = renderDiv("", "");
  const item3 = renderDiv("", "");
  const item4 = renderDiv("", "");
  const item5 = renderDiv("", "");
  gridItem(
    smashBurger,
    "The Smash burger",
    smashBurgerDescription,
    "11$",
    item1
  ),
    gridItem(
      chickenBurger,
      "Chicken Burger",
      chickenBurgerDescription,
      "10$",
      item2
    ),
    gridItem(eggBurger, "Sunny Side Burger", eggBurgerDescription, "8$", item3),
    gridItem(hotdogs, "Fancy A HotDog?", hotdogsDescription, "5$", item4),
    gridItem(
      healthyBurger,
      "The Healthy Burger",
      healthyBurgerDescription,
      "14$",
      item5
    ),
    appendChildren(menuGrid, item1, item2, item3, item4, item5);
  appendChildren(menuContainer, menuTitle, menuGrid);
  div.appendChild(menuContainer);
  renderFooter(div);
}
