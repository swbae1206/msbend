const swiper = new Swiper(".swiper", {
  effect: "fade",
  speed: 3000,
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const video = document.querySelectorAll("video");

video.forEach(function (item) {
  item.volume = 0.1;
})


const videos = document.querySelectorAll(".video")

videos.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = item.dataset.modal
    const modal1 = document.querySelector("."+modal)
    modal1.style.display = "block";
    
    movie = document.querySelector("." + modal + "  video");
    
    movie.play()

  })
});

const closebtns = document.querySelectorAll(".close")
console.log(closebtns);
closebtns.forEach(function (item) {
  item.addEventListener("click", function () {
    item.parentElement.parentElement.parentElement.style.display = "none"

    item.parentElement.nextElementSibling.pause()
    item.parentElement.nextElementSibling.currentTime = 0
  })
})

// const product01 = document.querySelector(".image1")
// const product02 = document.querySelector(".image2")
// const product03 = document.querySelector(".image3")

// product01.addEventListener("click", function () {
//   location.href = "./products01.html"
// })
// product02.addEventListener("click", function () {
//   location.href = "./products02.html"
// })
// product03.addEventListener("click", function () {
//   location.href = "./equipment.html"
// })

