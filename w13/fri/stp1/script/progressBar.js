const indicator =
  document.querySelector(".indicator");
const progressTarget =
  document.querySelector("main");

const progressBar = () => {
  const progressTargetBCR =
    progressTarget.getBoundingClientRect();
  const progress =
    1 -
    progressTargetBCR.bottom /
      progressTargetBCR.height;
  console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText =
      "transform: scaleX(" + progress + ")";
  }
};

document.onscroll = () => {
  progressBar();
};
