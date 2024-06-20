let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = 9;

function showSlide(n) {
  for (let i = 0; i < 9; i++) {
    slides[i].style.display = "none";
  }
  slideIndex += n;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  
  slides[slideIndex].style.display = "block";
}
function moveSlides(n) {
  showSlide(n);
}

setInterval(() => {
  showSlide(1);
}, 3000);


document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.getElementById('nav-bar');
    const mainCollapse = document.getElementById('main-collapse');

    navToggle.addEventListener('click', () => {
        if (navBar.style.display === 'block') {
            navBar.style.display = 'none';
            mainCollapse.style.marginLeft = '0';
        } else {
            navBar.style.display = 'block';
            mainCollapse.style.marginLeft = '200px';
        }
    });
});

function myFunction() {
    var x = document.getElementById("hide_Div");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};



