const btns =
  document.querySelectorAll("aside>ol>a");
console.log(btns);
let lastBtns;

const whenIClickTheBtn = (e) => {
  console.log("target", e.target);
  console.log("currTarget", e.currentTarget);
  const toggleTarget =
    e.currentTarget.querySelector("li");
  console.log("toggleTarget", toggleTarget);
  toggleTarget.classList.add("pressed");
  lastBtns?.classList.remove("pressed");
  lastBtns = toggleTarget;
};

btns.forEach((eachBtn) => {
  eachBtn.addEventListener(
    "click",
    whenIClickTheBtn
  );
});
