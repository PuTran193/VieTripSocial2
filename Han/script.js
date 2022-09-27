var image = document.querySelector(".post__tab-image");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery__inner img");

var hideImage = [
  "./assets/images/DaLat1.jpg",
  "./assets/images/DaLat2.jpg",
  "./assets/images/DaLat3.jpg",
];
var number = document.querySelector(".post__tab--count-image");

var currentIndex = 0;
var lastIndex = hideImage.length - 1;
var firstIndex = 0;

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

// image.forEach((item, index) => {
//     item.addEventListener('click', function(){
//         currentIndex = index;
//         gallery.src = hideImage[currentIndex].src;
//         gallery.classList.add('show');
//     })
// })

prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex <= firstIndex) {
    currentIndex = 0;
  }

  image.src = hideImage[currentIndex];
  number.innerHTML = currentIndex + 1 + "/" + hideImage.length;
});

next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= lastIndex) {
    currentIndex = hideImage.length - 1;
  }

  image.src = hideImage[currentIndex];
  number.innerHTML = currentIndex + 1 + "/" + hideImage.length;
});
