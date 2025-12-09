function asTabs(node) {
  const children = Array.from(node.children).filter((child) =>
    child.getAttribute("data-tabname")
  );

  const buttonContainer = node.querySelector(".tab-buttons");
  const buttons = Array.from(buttonContainer.querySelectorAll(".tab-button"));

  children.forEach((child, index) => {
    const button = buttons[index];

    if (!button) return;

    if (index === 0) {
      button.classList.add("active");
      child.style.display = "block";
    } else {
      child.style.display = "none";
    }

    button.addEventListener("click", () => {
      children.forEach((c) => {
        c.style.display = "none";
      });

      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      child.style.display = "block";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.getElementById("tab-container");
  asTabs(tabContainer);
});
