import "./css/normalize.css";
import "./css/style.css";

import { appendHomePage } from "./pages/home.js";

const mainContainer = document.querySelector("#content");

appendHomePage(mainContainer);
