import {
  renderImage,
  renderDiv,
  renderFooter,
  appendChildren,
} from "./home.js";

import grillImg from "../images/grill.jpg";

const title = "All Types of Burgers, One Incredible Spot";

const aboutInfo1 =
  "At General Burger, we serve up the best burgers in town—crafted from the freshest ingredients and grilled to perfection. Whether you crave a classic cheeseburger or a bold new creation, every bite is packed with smoky, char-grilled flavor.";

const aboutInfo2 =
  "Our passion for quality means every burger is made to order, topped with handpicked produce and house-made sauces. Pair it with crispy fries and a cold drink for a meal that’s simply unforgettable.";

const location = "Location: Denver Street, Pixel Place";

const openHours =
  "We’re open seven days a week from 11 AM to 7 PM—or until we sell out. Come taste the difference!";

export function appendAboutPage(div) {
  const aboutContainer = renderDiv("about_container", "");
  const imgOpenHoursContainer = renderDiv("img_open_container", "");
  const img_open = [
    renderImage("about_image", grillImg),
    renderDiv("openHours", openHours),
  ];
  appendChildren(imgOpenHoursContainer, ...img_open);
  const info = [
    renderDiv("about_title", title),
    renderDiv("", aboutInfo1),
    renderDiv("", aboutInfo2),
    renderDiv("location", location),
    imgOpenHoursContainer,
  ];
  appendChildren(aboutContainer, ...info);
  div.appendChild(aboutContainer);
  renderFooter(div);
}
