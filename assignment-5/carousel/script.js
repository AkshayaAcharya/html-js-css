const slider = document.querySelector(".slider");
const apiKey = "lRl4xWQdhn86l1i2xpDuom91C7PPUadOhvqNT5b87uInrvsGHTwRrzvG";
const btnLeft = document.querySelector(".slide__btn--left");
const btnRight = document.querySelector(".slide__btn--right");
const dotContainer = document.querySelector(".dots");
let currentSlide = 0;
let slides;
let maxLength;
const fetchImages = async function () {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=cars`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: apiKey, //use the apikey you have generated
        },
      }
    );
    const data = await response.json();
    const photos = await data.photos;
    return photos;
  } catch (err) {
    console.log(err);
  }
};

const photos = fetchImages()
  .then((photos) => createSlideImages(photos))
  .catch((err) => console.log(err));

const createSlideImages = function (photos) {
  console.log(photos);
  console.log(photos.length);
  photos.forEach((photo, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    const img = document.createElement("img");
    img.src = `${photo.src.large}`;
    slide.appendChild(img);
    slider.insertAdjacentElement("afterbegin", slide);
  });
  slides = document.querySelectorAll(".slide");
  console.log(slides.length);
  maxLength = slides.length;
  createDots();
  goToSlide(currentSlide);
  activateDot(currentSlide);
  setInterval(() => nextSlide(), 5000);
};

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide='${i}'></button>`
    );
  });
};

const activateDot = (slide) => {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
// make all sides in 1 row with
//  percentage of transform property
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const prevSlide = () => {
  if (currentSlide === 0) currentSlide = maxLength - 1;
  else currentSlide--;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};
const nextSlide = () => {
  if (currentSlide === maxLength - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

dotContainer.addEventListener("click", function (e) {
  const { slide } =
    e.target.classList.contains("dots__dot") && e.target.dataset;
  currentSlide = slide;
  goToSlide(slide);
  activateDot(slide);
});
