import {
  renderImage,
  renderDiv,
  renderFooter,
  appendChildren,
} from "./home.js";

const title = "All Types of Burgers, One Incredible Spot";

const aboutInfo1 =
  "At General Burger, we serve up the best burgers in town—crafted from the freshest ingredients and grilled to perfection. Whether you crave a classic cheeseburger or a bold new creation, every bite is packed with smoky, char-grilled flavor.";

const aboutInfo2 =
  "Our passion for quality means every burger is made to order, topped with handpicked produce and house-made sauces. Pair it with crispy fries and a cold drink for a meal that’s simply unforgettable.";

export function appendAboutPage(div) {
  const aboutContainer = renderDiv("about_container", "");
  const info = [
    renderDiv("about_title", title),
    renderDiv("", aboutInfo1),
    renderDiv("", aboutInfo2),
  ];
  appendChildren(aboutContainer, ...info);
  div.appendChild(aboutContainer);
}
