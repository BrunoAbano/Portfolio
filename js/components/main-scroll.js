window.addEventListener('load', function(){
var navLinks = this.document.querySelectorAll('.main-action');
var navLinks1 = this.document.querySelectorAll('.main-button.-main-action');
var sectionSkills = this.document.querySelector('#skills');
var scrollToTop = document.querySelector('.top-btn');
var sectionOneHeight = sectionSkills.offsetHeight;
var scrollPos = window.screenY;

navLinks.forEach(function (target) {
    target.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll.scrollTo(this.getAttribute('href'), 800);
    });
});

navLinks1.forEach(function (target) {
    target.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll.scrollTo(this.getAttribute('href'), 800);
    });
});

scrollToTop.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll.scrollTop(800);
})

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;
    if (scrollPos > sectionOneHeight) {
        scrollToTop.style.opacity = '1';
    } else {
        scrollToTop.style.opacity = '0';
    }
})

})