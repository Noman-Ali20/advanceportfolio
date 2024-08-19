// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//Pop Up 
document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.getElementById('chatButton');
  const contactPopup = document.getElementById('contactPopup');
  const closeButton = document.querySelector('.close-button');

  // Show the popup when the button is clicked
  chatButton.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
  });

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    contactPopup.style.display = 'none';
  });

  // Close the popup when the user clicks outside of the popup content
  window.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
      contactPopup.style.display = 'none';
    }
  });
});
document.getElementById('hireMeButton').addEventListener('click', function() {
  document.getElementById('chatButton').click();
});

//pop up for view more
function showPopup() {
  document.getElementById('viewmore').style.display = 'block';
}
function appPopup() {
  document.getElementById('viewmore1').style.display = 'block';
}
function backEndPopup() {
  document.getElementById('viewmore2').style.display = 'block';
}
function closePopup() {
  document.getElementById('viewmore').style.display = 'none';
  document.getElementById('viewmore1').style.display = 'none';
  document.getElementById('viewmore2').style.display = 'none';
}

