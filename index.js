var typed = new Typed(".aniText", {
    strings:["a Software Engineer", "a Student", "Your Best Decision"],
    typeSpeed:100,
    backSpeed:70,
    backDelay: 1100,
    loop: true
});

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("about-img");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3500); 
}
