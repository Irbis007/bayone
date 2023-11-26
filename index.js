const headerHamburger = document.querySelectorAll(".header-hamburger");
const headerMenu = document.querySelectorAll(".header-menu");
const headerNav = document.querySelectorAll(".header-nav .item");
const headerNavClose = document.querySelectorAll(".header-menu .close");
const homeTab = document.querySelectorAll(".servises-tab");

// RECENT SLIDER VARS
const recentSliderWrapper = document.querySelector(".recent-slider");
const recentSliderWindow = document.querySelector(".recent__work-list");
const recentSliderItem = document.querySelectorAll(".recent__work-item");
const recentSliderBtnPrev = document.querySelector(".recent__work .btn-prev");
const recentSliderBtnNext = document.querySelector(".recent__work .btn-next");

// TESTIMONIALS SLIDER VARS
const testimonialsSliderWrapper = document.querySelector(".testimonials-slider");
const testimonialsSliderWindow = document.querySelector(".testimonials-list");
const testimonialsSliderItem = document.querySelectorAll(".testimonials-item");
const testimonialsSliderItemAbout = document.querySelectorAll(".about .testimonials-item");
const testimonialsSliderBtnPrev = document.querySelector(".testimonials .btn-prev");
const testimonialsSliderBtnNext = document.querySelector(".testimonials .btn-next");
const testimonialsSliderCount = document.querySelector(".testimonials .slider-count");
const testimonialsSliderCountAbout = document.querySelector(".about.testimonials .slider-count");

// CASE

const caseTab = document.querySelectorAll(".case__challenge-tab");

const caseSlider = document.querySelectorAll(".case-slider");

headerHamburger.forEach((item, i) => {
  item.addEventListener("click", () => {
    headerMenu[i].classList.toggle("active");
  });
});

headerNav.forEach((item) => {
  item.addEventListener("mouseout", () => {
    headerNavHover(headerNav, "mouseout");
  });
  item.addEventListener("mouseover", () => {
    headerNavHover(headerNav, "mouseover");
    item.style.opacity = "1";
  });
});

function headerNavHover(list, event) {
  list.forEach((item) => {
    if (event == "mouseover") {
      item.style.opacity = ".5";
    } else {
      item.style.opacity = "1";
    }
  });
}

headerNavClose.forEach((item, i) => {
  item.addEventListener("click", () => {
    headerMenu[i].classList.toggle("active");
  });
});

homeTab.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveTab(homeTab);
    item.classList.add("active");
  });
});

function removeActiveTab(list) {
  list.forEach((item) => {
    item.classList.remove("active");
  });
}

caseTab.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveTab(caseTab);
    item.classList.add("active");
  });
});

// RECENT SLIDER

let recentSliderItemWidth = recentSliderItem[0] ? recentSliderItem[0].clientWidth : null;
let recentSliderItems = recentSliderItem ? recentSliderItem.length : null;
let recentOffset = 0;
let recentSlideShow;
let windowWidth = window.innerWidth;

if (windowWidth < 520) {
  recentSlideShow = 1;
} else {
  recentSlideShow = 2;
}
if (recentSliderBtnPrev) {
  recentSliderBtnPrev.addEventListener("click", () => {
    if (recentOffset > 0) {
      recentOffset--;
      setStyleForRecentSlider();
      recentSliderBtnPrev.classList.remove("unactive");
      recentSliderBtnNext.classList.remove("unactive");
    } else {
      recentSliderBtnPrev.classList.add("unactive");
    }
  });
}
if (recentSliderBtnNext) {
  recentSliderBtnNext.addEventListener("click", () => {
    if (recentOffset + recentSlideShow < recentSliderItems) {
      recentOffset++;
      setStyleForRecentSlider();
      recentSliderBtnNext.classList.remove("unactive");
      recentSliderBtnPrev.classList.remove("unactive");
    } else {
      recentSliderBtnNext.classList.add("unactive");
    }
  });
}

function setStyleForRecentSlider() {
  recentSliderWindow.style.transform = `translateX(-${
    (recentSliderItemWidth + 30) * recentOffset
  }px)`;
}

let mainContainer = document.querySelector("body");
let triggerBlock = document.querySelector(".case-slider");

let isHorizontalScrolling = false;

let scrollPosition = 0;
window.addEventListener("wheel", function (e) {
  if (triggerBlock) {
    if (
      this.window.scrollY + 100 >= triggerBlock.offsetTop &&
      triggerBlock.clientWidth != triggerBlock.scrollWidth - triggerBlock.scrollLeft &&
      e.deltaY > 0 &&
      this.window.scrollY <= triggerBlock.clientHeight + triggerBlock.offsetTop - 90
    ) {
      mainContainer.style.overflow = "hidden";
      if (e.deltaY > 0) {
        scrollPosition += 40;
      } else {
        scrollPosition -= 40;
      }
      triggerBlock.scrollLeft = scrollPosition;
    } else if (
      e.deltaY < 0 &&
      this.window.scrollY + 100 <= triggerBlock.offsetTop &&
      triggerBlock.scrollLeft != 0
    ) {
      mainContainer.style.overflow = "hidden";
      if (e.deltaY > 0) {
        scrollPosition += 40;
      } else {
        scrollPosition -= 40;
      }
      triggerBlock.scrollLeft = scrollPosition;
    } else {
      mainContainer.style.overflow = "auto";
    }
  }
});

// TESTIMONIALS SLIDER

const images = document.querySelectorAll(".slider .slider-line li");
const sliderLine = document.querySelector(".slider .slider-line");
let count = 0;
let width;

let testimonialsSliderItems = testimonialsSliderItem.length;

if (testimonialsSliderCount) {
  testimonialsSliderCount.textContent = `${count + 1}/${testimonialsSliderItems}`;
}

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  testimonialsSliderCount.textContent = `${count + 1}/${testimonialsSliderItems}`;
  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  testimonialsSliderCount.textContent = `${count + 1}/${testimonialsSliderItems}`;
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
// TESTIMONIALS SLIDER


if (document.querySelector(".about .slider")) {
  const imagesAbout = document.querySelectorAll(".about .slider .slider-line li");
  const sliderLineAbout = document.querySelector(".about .slider .slider-line");
  let countAbout = 0;
  let widthAbout;

  let testimonialsSliderItemsAbout = testimonialsSliderItemAbout.length;

  if (testimonialsSliderCountAbout) {
    testimonialsSliderCountAbout.textContent = `${count + 1}/${testimonialsSliderItemsAbout}`;
  }

  function initAbout() {
    widthAbout = document.querySelector(".about .slider").offsetWidth;
    sliderLineAbout.style.width = widthAbout * imagesAbout.length + "px";
    imagesAbout.forEach((item) => {
      item.style.width = widthAbout + "px";
      item.style.height = "auto";
    });
    rollSliderAbout();
  }

  initAbout();
  window.addEventListener("resize", initAbout);

  document.querySelector(".about .slider-next").addEventListener("click", function () {
    countAbout++;
    if (countAbout >= imagesAbout.length) {
      countAbout = 0;
    }
    testimonialsSliderCountAbout.textContent = `${count + 1}/${testimonialsSliderItemsAbout}`;
    rollSliderAbout();
  });

  document.querySelector(".about .slider-prev").addEventListener("click", function () {
    countAbout--;
    if (countAbout < 0) {
      countAbout = imagesAbout.length - 1;
    }
    testimonialsSliderCountAbout.textContent = `${count + 1}/${testimonialsSliderItemsAbout}`;
    rollSliderAbout();
  });

  function rollSliderAbout() {
    sliderLineAbout.style.transform = "translate(-" + countAbout * widthAbout + "px)";
  }
}
