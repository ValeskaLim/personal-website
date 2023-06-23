window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar-container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll and add/remove fade-in class
function handleScroll() {
  var elements = document.querySelectorAll('.fade-ins');
  for (var i = 0; i < elements.length; i++) {
      if (isElementInViewport(elements[i])) {
          elements[i].classList.add('fade-ins-visible');
      }
  }
}

// Initial handling on page load
handleScroll();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);