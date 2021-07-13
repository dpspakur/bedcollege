// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("my_header");
var navbar1 = document.getElementById("my_header1");
var list = document.getElementsByClassName("head_navbar_li_home");
 
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    list.insertAdjacentHTML("beforebegin","<img src='/img/logo-short.png' alt='logo'>");
  } else {
    navbar.classList.remove("sticky");
    // list.removeAttribute("img");
  }
 
}
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       list.insertAdjacentHTML("afterend","<img src='img/logo-short.png' alt='logo'>")
//     } else {
//       list.removeAttribute("img");
//     }
//   }

function toggle(){
  navbar.classList.toggle('responsive')
}
function toggle1(){
  navbar1.classList.toggle('responsive')
}
 