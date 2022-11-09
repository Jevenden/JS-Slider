const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  bottom.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
dots[0].style.backgroundColor = "white";

const resetBgColor = () => {
  dots.forEach((dot) => {
    dot.style.backgroundColor = "transparent";
  });
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    resetBgColor();
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNumber = index + 1;
    dot.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

const changeColor = () => {
  resetBgColor();
  dots[slideNumber - 1].style.backgroundColor = "white";
};
right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
