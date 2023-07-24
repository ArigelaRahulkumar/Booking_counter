document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".navBtn");
    const sections = document.querySelectorAll("section");
  
    // Add click event listeners to navigation buttons
    navButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetSectionId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetSectionId);
  
        if (targetSection) {
          // Hide all sections
          sections.forEach((section) => {
            section.classList.remove("active");
          });
  
          // Show the target section
          targetSection.classList.add("active");
        }
      });
    });
  
    // Scrolling text animation
    const scrollingTextContainer = document.querySelector(".scrolling-text-container");
    const scrollingText = document.querySelector(".scrolling-text");
  
    scrollingText.innerHTML += scrollingText.innerHTML; // Duplicate the text to make it scroll longer
  
    function scrollText() {
      if (scrollingTextContainer.scrollLeft >= scrollingText.scrollWidth / 2) {
        scrollingTextContainer.scrollLeft = 0;
      } else {
        scrollingTextContainer.scrollLeft += 1;
      }
    }
  
    setInterval(scrollText, 30); // Adjust the speed by changing the interval time
  
    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add code to handle form submission here
      // For example, send the form data to a server using AJAX
      console.log("Contact form submitted!");
    });
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add code to handle form submission here
      // For example, authenticate user credentials
      console.log("Login form submitted!");
    });
  
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add code to handle form submission here
      // For example, create a new user account
      console.log("Signup form submitted!");
    });
  });
  