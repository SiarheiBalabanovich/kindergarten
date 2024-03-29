'use strict'

// MENU section
document.addEventListener("DOMContentLoaded", function () {
  const burgerCheckbox = document.getElementById("burger");
  const menuItems = document.querySelectorAll(".menu__link");
  const recruitmentButton = document.querySelector(".button__menu");
  const logoImage = document.getElementById("logo");
  let logoChanged = false; // Flag to track logo changes
  // Adding an event handler for each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Close the burger menu
      burgerCheckbox.checked = false;
      // If the logo has been changed, return it to the main one
      if (logoChanged) {
        logoImage.src = "images/Menu section/logo.svg"; // Path to main logo
        logoChanged = false;
      }
    });
  });

  // Handler for the button "Rekrutacja"
  recruitmentButton.addEventListener("click", function () {
    const targetElement = document.getElementById("recrutation");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Closing the burger menu
    burgerCheckbox.checked = false;
    // If the logo has been changed, return it to the main one
    if (logoChanged) {
      logoImage.src = "images/Menu section/logo.svg"; // Path to main logo
      logoChanged = false;
    }
  });

  // Burger menu state change handler
  burgerCheckbox.addEventListener("change", function () {
    if (burgerCheckbox.checked) {
      // When activating the burger menu, change the logo
      logoImage.src = "images/Menu section/logo-2.svg"; // Path to the new logo
      logoChanged = false; // Setting the logo change flag
    } else if (!logoChanged) {
      // When the burger menu is deactivated and if the logo has not been changed, we return the main logo
      logoImage.src = "images/Menu section/logo.svg"; // Path to main logo
    }
  });
});



// INFORMATION section (slider)
const swiper = new Swiper('.information__slider', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 1000,
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
});



// OFFERS section (for large screens)
function toggleItemOffers(clickedItem) {
  const currentSection = clickedItem.closest('.offers__section-container');
  const contentContainers = currentSection.querySelectorAll('.content__offers');
  const items = currentSection.querySelectorAll('.item');
  const arrows = currentSection.querySelectorAll('.arrow');
  const mainImage = currentSection.querySelector('.image__offers');
  const index = Array.from(items).indexOf(clickedItem) + 1;

  contentContainers.forEach((content, i) => {
    const item = items[i];
    const arrow = arrows[i];

    if (i + 1 === index) {
      // Toggle the visibility of the clicked item
      const isOpen = content.classList.contains('active');
      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      content.classList.toggle('active');
      item.classList.toggle('active');
      arrow.classList.toggle('active');
      arrow.classList.toggle('collapsed');
    } else {
      // Close other items
      content.style.maxHeight = null;
      content.classList.remove('active');
      item.classList.remove('active');
      arrow.classList.remove('active');
      arrow.classList.remove('collapsed');
    }
  });

  // Update src for the main image in the current section
  if (mainImage) {
    mainImage.src = `images/Offers section/Offers - photo-${index}.jpg`;
  }
}



// ORGANIZATION section (for large screens)
function toggleItemOrganization(clickedItem) {
  const currentSection = clickedItem.closest('.organization__section-container');
  const contentContainers = currentSection.querySelectorAll('.content__organization');
  const items = currentSection.querySelectorAll('.item');
  const arrows = currentSection.querySelectorAll('.arrow');
  const mainImage = currentSection.querySelector('.image__organization');
  const index = Array.from(items).indexOf(clickedItem) + 1;

  contentContainers.forEach((content, i) => {
    const item = items[i];
    const arrow = arrows[i];

    if (i + 1 === index) {
      const isOpen = content.classList.contains('active');
      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      content.classList.toggle('active');
      item.classList.toggle('active');
      arrow.classList.toggle('active');
      arrow.classList.toggle('collapsed');
    } else {
      content.style.maxHeight = null;
      content.classList.remove('active');
      item.classList.remove('active');
      arrow.classList.remove('active');
      arrow.classList.remove('collapsed');
    }
  });

  if (mainImage) {
    mainImage.src = `images/Organization section/Organization - photo-${index}.jpg`;
  }
}



// GALLERY section
var myswiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  initialSlide: 1,
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});

// Slider switch buttons GALLERY section
const swiperButtonPrev = document.querySelector('.swiper-button-prev-2');
const swiperButtonNext = document.querySelector('.swiper-button-next-2');

// Function to set button background color
function setBackgroundColor(button, color) {
  button.style.backgroundColor = color;
}

swiperButtonPrev.addEventListener('mouseover', function() {
  setBackgroundColor(this, '#547E32');
});

swiperButtonPrev.addEventListener('mouseout', function() {
  setBackgroundColor(this, 'rgba(84, 126, 50, 0.5)');
});

// Click event handler for the "Back" button
swiperButtonPrev.addEventListener('click', function() {
});

swiperButtonNext.addEventListener('mouseover', function() {
  setBackgroundColor(this, '#547E32');
});

swiperButtonNext.addEventListener('mouseout', function() {
  setBackgroundColor(this, 'rgba(84, 126, 50, 0.5)');
});

// Click event handler for the "Forward" button
swiperButtonNext.addEventListener('click', function() {
});



// FUNCTION TO SCROLL PAGE UP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Adding a click handler for large screens
const scrollToTopButtonLG = document.getElementById("scroll-to-top-lg");
if (scrollToTopButtonLG) { // Checking if a button exists for large screens
  scrollToTopButtonLG.addEventListener("click", scrollToTop);
}

// Adding a click handler for small screens
const scrollToTopButtonSM = document.getElementById("scroll-to-top-sm");
if (scrollToTopButtonSM) { // Checking if a button exists for small screens
  scrollToTopButtonSM.addEventListener("click", scrollToTop);
}


// CALENDAR (feedback form)
flatpickr(".datepicker", {
  clickOpens: true,
  dateFormat: "Y-m-d",
  locale: "pl",
});


// FILE UPLOAD (feedback form)
// Handlers for the desktop version
document.getElementById("file-upload-field-desktop").addEventListener("change", function() {
  var fileName = this.files[0].name;
  document.getElementById('file-name-display-desktop').textContent = fileName ? fileName : "Nie wybrano pliku";
});

document.getElementById("file-upload-button-desktop").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("file-upload-field-desktop").click();
});

// Handlers for the mobile version
document.getElementById("file-upload-field-mobile").addEventListener("change", function() {
  var fileName = this.files[0].name;
  document.getElementById('file-name-display-mobile').textContent = fileName ? fileName : "Nie wybrano pliku";
});

document.getElementById("file-upload-button-mobile").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("file-upload-field-mobile").click();
});



// // FEEDBACK FORM
// let tab = document.querySelector(".tab-form"); // For form on large screens
// let tabMobile = document.querySelector(".tab-form-mobile"); // For form on mobile screens
// let tabHeaderElements = document.querySelectorAll(".tab-header > div");
// let tabBodyElements = document.querySelectorAll(".tab-body > div");
// let tabHeaderElementsMobile = document.querySelectorAll(".tab-header-mobile > div");
// let tabBodyElementsMobile = document.querySelectorAll(".tab-body-mobile > div");

// // Function for switching between shapes and blocks on large screens
// function toggleForms(isMobile, isBlock2) {
//   if (isMobile) {
//     tab.style.display = "none";
//     tabMobile.style.display = "block";
// // If isBlock2 is true, show block 2, otherwise block 1 in the mobile form
//     if (isBlock2) {
//       tabBodyElementsMobile[1].style.display = "block";
//       tabBodyElementsMobile[0].style.display = "none";
//     } else {
//       tabBodyElementsMobile[0].style.display = "block";
//       tabBodyElementsMobile[1].style.display = "none";
//     }
// // Remove the active class from the mobile form headers and add it to the current header
//     tabHeaderElementsMobile[0].classList.remove("active");
//     tabHeaderElementsMobile[1].classList.remove("active");
//     tabHeaderElementsMobile[isBlock2 ? 1 : 0].classList.add("active");
//   } else {
//     tab.style.display = "block";
//     tabMobile.style.display = "none";
//   }
// }
// // Function for switching between blocks on large screens
// function toggleBlocks(isBlock2) {
//   tabBodyElements[1].classList.toggle("active", isBlock2);
//   tabBodyElements[0].classList.toggle("active", !isBlock2);
// // Remove the active class from the large form headers and add it to the current header
//   tabHeaderElements[0].classList.remove("active");
//   tabHeaderElements[1].classList.remove("active");
//   tabHeaderElements[isBlock2 ? 1 : 0].classList.add("active");
// }
// // Function for switching between blocks on mobile screens
// function toggleMobileBlocks(isBlock2) {
//   tabBodyElementsMobile[1].classList.toggle("active", isBlock2);
//   tabBodyElementsMobile[0].classList.toggle("active", !isBlock2);
// }
// toggleForms(window.innerWidth <= 768, false);
// toggleBlocks(false); // Show block 2 in large form by default
// toggleMobileBlocks(false); // Show block 2 in mobile form by default
// // Adding a browser window resize event listener for a large form
// window.addEventListener("resize", function () {
//   toggleForms(window.innerWidth <= 768, false);
//   toggleBlocks(false); // Show block 2 in large form after resizing screen
// });

// // Adding a browser window resize event listener for the mobile form
// window.addEventListener("resize", function () {
//   toggleForms(window.innerWidth <= 768, false);
//   toggleMobileBlocks(false); // Show block 2 in mobile form after resizing screen
// });

// // Adding a click event listener to toggle buttons for a mobile form amd blocks
// tabHeaderElementsMobile[0].addEventListener("click", function () {
//   toggleForms(true, false); // Switch to mobile form and show block 1
//   toggleMobileBlocks(false); // Show block 1 in mobile form
// });

// tabHeaderElementsMobile[1].addEventListener("click", function () {
//   toggleForms(true, true); // Switch to mobile form and show block 2
//   toggleMobileBlocks(true); // Show block 2 in mobile form
// });

// // Adding a click event listener to toggle buttons for a large form
// tabHeaderElements[0].addEventListener("click", function () {
//   toggleBlocks(false); // Show block 1 in large form
// });

// tabHeaderElements[1].addEventListener("click", function () {
//   toggleBlocks(true); // Show block 2 in large form
// });

let tab = document.querySelector(".tab-form"); // For form on large screens
let tabMobile = document.querySelector(".tab-form-mobile"); // For form on mobile screens
let tabHeaderElements = document.querySelectorAll(".tab-header > div");
let tabBodyElements = document.querySelectorAll(".tab-body > div");
let tabHeaderElementsMobile = document.querySelectorAll(".tab-header-mobile > div");
let tabBodyElementsMobile = document.querySelectorAll(".tab-body-mobile > div");

// Function for switching between shapes and blocks on large screens
function toggleForms(isMobile, isBlock2) {
  if (isMobile) {
    tab.style.display = "none";
    tabMobile.style.display = "block";
    if (isBlock2) {
      tabBodyElementsMobile[1].style.display = "block";
      tabBodyElementsMobile[0].style.display = "none";
    } else {
      tabBodyElementsMobile[0].style.display = "block";
      tabBodyElementsMobile[1].style.display = "none";
    }
    tabHeaderElementsMobile[0].classList.remove("active");
    tabHeaderElementsMobile[1].classList.remove("active");
    tabHeaderElementsMobile[isBlock2 ? 1 : 0].classList.add("active");
  } else {
    tab.style.display = "block";
    tabMobile.style.display = "none";
  }
}

// Function for switching between blocks on large screens
function toggleBlocks(isBlock2) {
  tabBodyElements[1].classList.toggle("active", isBlock2);
  tabBodyElements[0].classList.toggle("active", !isBlock2);
  tabHeaderElements[0].classList.remove("active");
  tabHeaderElements[1].classList.remove("active");
  tabHeaderElements[isBlock2 ? 1 : 0].classList.add("active");
}

// Function for switching between blocks on mobile screens
function toggleMobileBlocks(isBlock2) {
  tabBodyElementsMobile[1].classList.toggle("active", isBlock2);
  tabBodyElementsMobile[0].classList.toggle("active", !isBlock2);
}

toggleForms(window.innerWidth <= 768, false);

// Adding a browser window resize event listener for a large form
window.addEventListener("resize", function () {
  toggleForms(window.innerWidth <= 768, false);
});

// Adding click event listeners to toggle buttons for mobile form and blocks
tabHeaderElementsMobile.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleForms(true, index === 1);
    toggleMobileBlocks(index === 1);
  });
});

// Adding click event listeners to toggle buttons for a large form
tabHeaderElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    toggleBlocks(index === 1);
  });
});


// For button on large screens
document.getElementById('largeScreenButton').addEventListener('click', function() {
  const targetElement = document.getElementById('recrutationLarge'); // Replacement with element id on large screens
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('secondSectionButton').addEventListener('click', function() {
  const targetElement = document.getElementById('secondSection'); // Using the id of the second section
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('thirdSectionButton').addEventListener('click', function() {
  const targetElement = document.getElementById('thirdSection'); // Using the id of the third section
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

// For button on small screens
document.querySelector('.button__menu[onclick="window.location.href=\'#recrutationSmall\'"]').addEventListener('click', function() {
  const targetElement = document.getElementById('recrutationSmall'); // Using an existing element ID on small screens
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

function scrollToRecrutationForm() {
  var targetElementId = window.innerWidth <= 768 ? 'recrutationSmall' : 'recrutationLarge';

  const targetElement = document.getElementById(targetElementId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
