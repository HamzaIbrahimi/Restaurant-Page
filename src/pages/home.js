import mainBurger from "../images/mae-mu-I7A_pHLcQK8-unsplash.jpg";

export function renderImage(id) {
  const img = document.createElement("img");
  img.src = mainBurger;
  img.id = id;
  return img;
}

export function renderDiv(id) {
  const div = document.createElement("div");
  div.id = id;
  return div;
}

export function appendHomePage(div) {
  let imgInformation =
    "Indulge in the perfect burger experience - crafted just for you!";
  let imgExtraInformation =
    "Treat yourself to the ultimate burger experience - made with fresh, flavorful ingredients and crafted to perfection. Each bite is a burst of taste that will leave you craving for more!";
  const imgContainer = renderDiv("hero_container");
  const imgText = renderDiv("img_text");
  const extraImgText = renderDiv("extra_img_text");
  imgText.textContent = imgInformation;
  extraImgText.textContent = imgExtraInformation;
  const img = renderImage("hero_image");
  imgContainer.appendChild(img);
  imgContainer.appendChild(imgText);
  imgContainer.appendChild(extraImgText);
  div.appendChild(imgContainer);
}
