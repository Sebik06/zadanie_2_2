const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})


// pridanie transition
navbarLinks.style.transition = 'transform 2s ease-in-out';
	

// Otvori obrazovu galeriu
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// zavrie obrazkovu galeriu
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// funkcia otvori obrazok
var slideIndex = 1;
showSlides(slideIndex);

// /Posuvanie snímok
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// zobrazi konkretny snimok na zaklede vyberu obrazka
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// funkcia zobrazuje obrazky na stranke 
function showSlides(n) {
  var i;
  // ulozenie snimok do premennej slides
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  // Podmienka kontroluje ci je hodnota vacsia ako pocet snímok ak je tak vrati sa na prvý obrázok
  if (n > slides.length) {slideIndex = 1}
  // ked je hodnota mensia ako 1 tak nas varti na koniec galerie
  if (n < 1) {slideIndex = slides.length}
  // Cyklus ktory nastavuje pre vsetky obrazky display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Cyklus prechadza cez kazdy obrazok a odstrani triedu active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Zobrazenie aktuálneho snímku
  slides[slideIndex-1].style.display = "block";
  // Pridanie bodu active k aktualnemu bodu prezentacie
  dots[slideIndex-1].className += " active";
}