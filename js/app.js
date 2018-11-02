var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)
console.log(menuBtn[0]);

// Click SMOOTH SCROLL

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});
