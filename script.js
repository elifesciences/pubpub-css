// create menu div
const menuDiv = document.createElement("div");
menuDiv.setAttribute("class", "elife-nav-menu nav-bar-component");

// create overlay div
const overlayDiv = document.createElement("div");
overlayDiv.setAttribute("class", "elife-nav-overlay");

// clone logo and add to div
const elifeLogo = document
  .querySelector(".nav-list > :first-child a")
  .cloneNode(true);

elifeLogo.setAttribute("class", "elife-nav-logo");

menuDiv.appendChild(elifeLogo);

// create close button
const closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.setAttribute("class", "elife-nav-close-button");

menuDiv.appendChild(closeButton);

// create nav items ul
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

// add navItems to menu div
menuDiv.append(navItems);

// prepend menu div to body
const body = document.querySelector("body");
body.prepend(menuDiv);
body.appendChild(overlayDiv);

// toggle function
function toggleMenu(e) {
  if (menuDiv.style.display === "block") {
    menuDiv.style.display = "none";
    overlayDiv.style.display = "none";
  } else {
    menuDiv.style.display = "block";
    overlayDiv.style.display = "block";
  }
  e.preventDefault();
}

function sizeMenuToPage() {
  if(window.matchMedia("max-width: 899px").matches) {
    const homeLink = document.querySelector(".nav-bar-component ul.nav-list > :nth-child(3)");
    navItems.prepend(homeLink);
  }
}

// toggle event listeners
document
  .querySelector(".nav-bar-component ul.nav-list > :nth-child(2) a")
  .addEventListener("click", toggleMenu);
overlayDiv.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

sizeMenuToPage();
