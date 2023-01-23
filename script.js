const body = document.querySelector("body");
const div = document.createElement("div");
div.setAttribute("class", "elife-nav-menu");
const researchCategories = document.querySelector(
  ".nav-bar-component ul.nav-list > :nth-child(7)"
);
const insideElife = document.querySelector(
  ".nav-bar-component ul.nav-list > :nth-child(8)"
);
const authorGuide = document.querySelector(
  ".nav-bar-component ul.nav-list > :nth-child(9)"
);
const reviewerGuide = document.querySelector(
  ".nav-bar-component ul.nav-list > :nth-child(10)"
);
div.appendChild(researchCategories);
div.appendChild(insideElife);
div.appendChild(authorGuide);
div.appendChild(reviewerGuide);
body.appendChild(div);
