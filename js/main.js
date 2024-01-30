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
        logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Path to main logo
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
      logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Path to main logo
      logoChanged = false;
    }
  });

  // Burger menu state change handler
  burgerCheckbox.addEventListener("change", function () {
    if (burgerCheckbox.checked) {
      // When activating the burger menu, change the logo
      logoImage.src = "images/Logo-2.svg"; // Path to the new logo
      logoChanged = true; // Setting the logo change flag
    } else if (!logoChanged) {
      // When the burger menu is deactivated and if the logo has not been changed, we return the main logo
      logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Path to main logo
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
function toggleItem(index) {
  const contentContainers = document.querySelectorAll('.content__offers');
  const items = document.querySelectorAll('.item');
  const arrows = document.querySelectorAll('.arrow');
  const mainImage = document.getElementById('mainImage');

  for (let i = 0; i < contentContainers.length; i++) {
    const content = contentContainers[i];
    const item = items[i];
    const arrow = arrows[i];

    if ((i + 1) === index) {
      const isOpen = content.classList.contains('active');
      if (isOpen) {
        content.style.maxHeight = '0';
        content.classList.remove('active');
        item.classList.remove('active');
        arrow.classList.remove('active');
        arrow.classList.remove('collapsed');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('active');
        item.classList.add('active');
        arrow.classList.add('active');
        arrow.classList.add('collapsed');
      }
    } else {
      content.style.maxHeight = '0';
      content.classList.remove('active');
      item.classList.remove('active');
      arrow.classList.remove('active');
      arrow.classList.remove('collapsed');
    }
  }

  switch (index) {
    case 1:
      mainImage.src = 'images/Offers section/Offers section - photo-1.jpg';
      break;
    case 2:
      mainImage.src = 'images/Offers section/Offers section - photo-2.jpg';
      break;
    case 3:
      mainImage.src = 'images/Offers section/Offers section - photo-3.jpg';
      break;
    case 4:
      mainImage.src = 'images/Offers section/Offers section - photo-4.jpg';
      break;
    case 5:
      mainImage.src = 'images/Offers section/Offers section - photo-5.jpg';
      break;
  }
}




// ORGANIZATION section
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}




// GALLERY section (slider)
var myswiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
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




// TEAM section 
document.addEventListener('DOMContentLoaded', function () {
  // Getting the “Zobacz więcej” button by ID
  const seeMoreButton = document.getElementById('seeMoreButton');
  // Getting all cards
  const allTeamCards = document.querySelectorAll('[class^="team-card-"]');
  // Hide all cards except the first 3
  allTeamCards.forEach(function (card, index) {
    if (index >= 9) {
      card.style.display = 'none';
    }
  });

  // Adding an event handler to the "Zobacz więcej" button
  seeMoreButton.addEventListener('click', function () {
    // Show other cards
    allTeamCards.forEach(function (card, index) {
      if (index >= 3) {
        card.style.display = 'block';
      }
    });

    // Hide the "Zobacz więcej" button after showing all cards
    seeMoreButton.style.display = 'none';
  });
});




// FEEDBACK FORM
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
// If isBlock2 is true, show block 2, otherwise block 1 in the mobile form
    if (isBlock2) {
      tabBodyElementsMobile[1].style.display = "block";
      tabBodyElementsMobile[0].style.display = "none";
    } else {
      tabBodyElementsMobile[0].style.display = "block";
      tabBodyElementsMobile[1].style.display = "none";
    }
// Remove the active class from the mobile form headers and add it to the current header
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
// Remove the active class from the large form headers and add it to the current header
  tabHeaderElements[0].classList.remove("active");
  tabHeaderElements[1].classList.remove("active");
  tabHeaderElements[isBlock2 ? 1 : 0].classList.add("active");
}
// Function for switching between blocks on mobile screens
function toggleMobileBlocks(isBlock2) {
  tabBodyElementsMobile[1].classList.toggle("active", isBlock2);
  tabBodyElementsMobile[0].classList.toggle("active", !isBlock2);
}
toggleForms(window.innerWidth <= 768, true);
toggleBlocks(true); // Show block 2 in large form by default
toggleMobileBlocks(true); // Show block 2 in mobile form by default
// Adding a browser window resize event listener for a large form
window.addEventListener("resize", function () {
  toggleForms(window.innerWidth <= 768, true);
  toggleBlocks(true); // Show block 2 in large form after resizing screen
});

// Adding a browser window resize event listener for the mobile form
window.addEventListener("resize", function () {
  toggleForms(window.innerWidth <= 768, true);
  toggleMobileBlocks(true); // Show block 2 in mobile form after resizing screen
});

// Adding a click event listener to toggle buttons for a mobile form amd blocks
tabHeaderElementsMobile[0].addEventListener("click", function () {
  toggleForms(true, false); // Switch to mobile form and show block 1
  toggleMobileBlocks(false); // Show block 1 in mobile form
});

tabHeaderElementsMobile[1].addEventListener("click", function () {
  toggleForms(true, true); // Switch to mobile form and show block 2
  toggleMobileBlocks(true); // Show block 2 in mobile form
});

// Adding a click event listener to toggle buttons for a large form
tabHeaderElements[0].addEventListener("click", function () {
  toggleBlocks(false); // Show block 1 in large form
});

tabHeaderElements[1].addEventListener("click", function () {
  toggleBlocks(true); // Show block 2 in large form
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

flatpickr(".datepicker", {
  dateFormat: "Y-m-d",
  locale: "pl",
});

document.getElementById("file-upload-field").addEventListener("change", function () {
  var fileName = this.value.split("\\").pop();
  var button = document.getElementById("file-upload-button");
  button.textContent = fileName ? fileName : "Wybierz plik";
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




// FEEDBACK FORM (JQUERY)
jQuery(document).ready(function () {

  $(".phone").mask("+48 (99) 999-99-99");

jQuery('.send-form').click( function() {
  var form = jQuery(this).closest('form');

  if ( form.valid() ) {
    form.css('opacity','.5');
    var actUrl = form.attr('action');

    jQuery.ajax({
      url: actUrl,
      type: 'post',
      dataType: 'html',
      data: form.serialize(),
      success: function(data) {
        form.html(data);
        form.css('opacity','1');
        //form.find('.status').html('Dziękujemy, formularz został wysłany!');
        //$('#myModal').modal('show') // for bootstrap
      },
      error:	 function() {
        form.find('.status').html('Błąd serwera');
      }
    });
  }
});
});