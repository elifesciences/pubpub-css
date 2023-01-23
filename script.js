// create menu div
const menuDiv = document.createElement("div");
menuDiv.setAttribute("class", "elife-nav-menu nav-bar-component");

// clone logo and add to div
const logo = document
  .querySelector(".nav-list > :first-child a")
  .cloneNode(true);

menuDiv.appendChild(logo);

const navItems = document.createElement("ul");
navItems.setAttribute("class", "elife-nav-items");

// select & move extra nav items to menu
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

navItems.appendChild(researchCategories);
navItems.appendChild(insideElife);
navItems.appendChild(authorGuide);
navItems.appendChild(reviewerGuide);

// prepend menu div to body
const body = document.querySelector("body");
body.prepend(div);
