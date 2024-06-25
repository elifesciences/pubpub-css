// create menu div
const menuDiv = document.createElement("div");
menuDiv.setAttribute("class", "elife-nav-menu nav-bar-component");

// create overlay div
const overlayDiv = document.createElement("div");
overlayDiv.setAttribute("class", "elife-nav-overlay");

// clone logo and add to div
const elifeLogo = document
  .querySelector(".logo a")
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
  "nav ul > :nth-child(7)"
);
const insideElife = document.querySelector(
  "nav ul > :nth-child(8)"
);
const authorGuide = document.querySelector(
  "nav ul > :nth-child(9)"
);
const reviewerGuide = document.querySelector(
  "nav ul > :nth-child(10)"
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
  if(window.matchMedia("(max-width: 899px)").matches) {
    // const homeLink = document.querySelector(".nav-bar-component ul.nav-list > :nth-child(3)");
    // navItems.prepend(homeLink);

    // hide all but the "Menu" and burger
    const navElementsToHide = [
      document.querySelector(".nav-list > li:nth-child(3)"),
      document.querySelector(".nav-list > li:nth-child(4)"),
      document.querySelector(".nav-list > li:nth-child(5)"),
      document.querySelector(".nav-list > li:nth-child(6)"),
      document.querySelector(".nav-list > li:nth-child(7)"),
      document.querySelector(".nav-list > li:nth-child(8)"),
      document.querySelector(".nav-list > li:nth-child(9)")
    ];
    navElementsToHide.forEach((navElement) => {
      navElement?.classList.add('hidden');
    });
  }

  if(window.matchMedia("(min-width: 900px)").matches) {

    // show all
    const navElementsToHide = [
      document.querySelector(".nav-list > li:nth-child(3)"),
      document.querySelector(".nav-list > li:nth-child(4)"),
      document.querySelector(".nav-list > li:nth-child(5)"),
      document.querySelector(".nav-list > li:nth-child(6)"),
      document.querySelector(".nav-list > li:nth-child(7)"),
      document.querySelector(".nav-list > li:nth-child(8)"),
      document.querySelector(".nav-list > li:nth-child(9)")
    ];
    navElementsToHide.forEach((navElement) => {
      navElement?.classList.remove('hidden');
    });
  }
}

// toggle event listeners
/* document
  .querySelector("nav ul > :nth-child(2) a")
  .addEventListener("click", toggleMenu);*/
overlayDiv.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

window.addEventListener('load', sizeMenuToPage);
window.addEventListener('resize', sizeMenuToPage);

let head = document.getElementsByTagName('head').item(0);
const script = document.createElement('script');
script.setAttribute('id', 'Cookiebot');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
script.setAttribute('data-cbid', '0a5c50d8-fcf9-47b1-8f4f-1eaadb13941b');
script.setAttribute('data-blockingmode', 'auto');
head.appendChild(script);
