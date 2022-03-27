// ganti mode start
var element = document.body;

function ubahWarna(){
    element.classList.toggle("gelap");
        if(element.classList.contains('gelap')){
            localStorage.setItem('tema','gelap');
        }else{
            localStorage.setItem('tema','terang')
        }
}

var tema = localStorage.getItem("tema");
if(tema=='gelap'){
    element.classList.add("gelap");
}

// ganti mode end

// carousel start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}
function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// carousel end