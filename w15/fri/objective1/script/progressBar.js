const indicator =
  document.querySelector(".indicator");
const progressTaget =
  document.querySelector("main");

const progressBar = () => {
  const progressTagetBCR =
    progressTaget.getBoundingClientRect();
  const progress =
    1 -
    progressTagetBCR.bottom /
      progressTagetBCR.height;

  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText =
      "transform: scaleX(" + progress + ")";
  } else if (progress < 0) {
    indicator.style.cssText =
      "transform: scaleX(0)";
  }
};

document.addEventListener("scroll", progressBar);
