// let box = document.querySelector("#box2");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes.forEach(function (grass) {
//   grass.onclick = () => {
//     grass.classList.toggle("boxSelected");
//   };
// });

boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("boxSelected");
  };
});
