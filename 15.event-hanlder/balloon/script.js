function solution() {
  const balloon = document.querySelector(".balloon");
  const arrowUp = document.querySelector(".arrowUp");
  const arrowDown = document.querySelector(".arrowDown");

  arrowUp.addEventListener("click", () => {
    const currentSize = parseInt(getComputedStyle(balloon).fontSize);
    balloon.style.fontSize = `${currentSize + 10}px`;
  });
  arrowDown.addEventListener("click", () => {
    const currentSize = parseInt(getComputedStyle(balloon).fontSize);
    balloon.style.fontSize = `${currentSize - 10}px`;
  });
}

document.addEventListener("DOMContentLoaded", solution);
