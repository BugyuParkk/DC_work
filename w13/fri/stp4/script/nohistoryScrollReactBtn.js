const btns =
  document.querySelectorAll("aside>ol>a");
const whenBtnIsClicked = (e) => {
  console.log(btnsLinks.get(e.currentTarget));
  const scrollToTaget =
    document.querySelector(link);
  scrollToTaget.scrollIntoView();
};
const btnsLinks = new Map();
btns.forEach((eachBtn) => {
  const link = eachBts.getAttributes("href");
  eachBtn.removeAttribute("href");
  btnsLinks.set(eachBtn, link);
  eachBtn.addEventListener(
    "click",
    whenBtnIsClicked
  );
});

const pages = document.querySelectorAll(
  "main section"
);

const pageButnMap = new Map();

pages.forEach((eachPage, idx) => {
  pageButnMap.set(eachPage, btns[idx]);
});

let lastTarget;
const whenPageInView = (observeredPaged) => {
  observeredPaged.forEach((eachPage) => {
    if (eachPage.isIntersecting) {
      const pairedElem = pageButnMap.get(
        eachPage.target
      );
      const toggleTarget =
        pairedElem.querySelector("li");
      toggleTarget.classList.add("pressed");
      lastTarget?.classList.remove("pressed");
      lastTarget = toggleTarget;
    }
  });
};

const observer = new IntersectionObserver(
  whenPageInView,
  {
    root: null,
    rootMargin: "0px 0px -90% 0px",
    threshold: [0],
  }
);

pages.forEach((eachPage) => {
  observer.observe(eachPage);
});
