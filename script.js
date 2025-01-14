const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll("img");

indicators.forEach((element, index) => {
  element.addEventListener("click", () => {
    images[index].scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});

const gallery = document.querySelector(".gallery");

//建立observer,也就是觀察元素是否進入畫面的監視器
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const targetIndex = entry.target.dataset.index;
        if (entry.isIntersecting) {
            indicators[targetIndex].classList.add("active");
        } else {
          indicators[targetIndex].classList.remove("active");
        }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

//利用剛建立的observer監聽所有的image元素
images.forEach((element) => {
    observer.observe(element);
});