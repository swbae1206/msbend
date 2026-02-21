const scrollElements = document.querySelectorAll(".js-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const element = entry.target;
    const effect = element.getAttribute("data-effect");
    if (entry.isIntersecting) {
      element.classList.add(effect, "scrolled");
    } else {
      element.classList.remove(effect, "scrolled");
    }
  });
});

window.addEventListener("scroll", () => {
  scrollElements.forEach((item) => {
    observer.observe(item);
  });
});
