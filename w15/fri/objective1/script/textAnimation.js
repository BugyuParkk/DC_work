function textDisplay(element) {
  const textArray = element.innerText.split("");
  const special = [
    "W",
    "e",
    "l",
    "c",
    "o",
    "m",
    "e",
    "E",
    "g",
    "y",
    "p",
    "t",
    "i",
    "a",
    "n",
  ];
  const exception = [
    "\n",
    ".",
    ",",
    ":",
    "!",
    "?",
    "%",
    "*",
  ];
  const randomIntBetween = (min, Max) => {
    return Math.floor(
      Math.random() * (Max - min + 1) + min
    );
  };

  const numArray = [];
  textArray.forEach(() => {
    const num = randomIntBetween(5, 40);
    numArray.push(num);
  });

  let newText;
  let completeCount;
  const timer = setInterval(() => {
    completeCount = 0;
    newText = "";
    numArray.forEach((num, i) => {
      if (
        exception.includes(textArray[i]) ||
        numArray[i] === 0
      ) {
        newText += textArray[i];
        completeCount += 1;
      } else {
        newText +=
          special[numArray[i] % special.length];
        numArray[i] = --num;
      }
    });
    element.innerText = newText;
    console.log(completeCount, numArray.length);
    if (completeCount === numArray.length)
      clearInterval(timer);
  }, 100);
}

const textAnimation = document.querySelector(
  ".textAnimation"
);
textDisplay(textAnimation);
