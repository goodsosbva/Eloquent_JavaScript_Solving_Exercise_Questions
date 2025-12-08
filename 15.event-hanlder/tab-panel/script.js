function asTabs(node) {
  const children = Array.from(node.children);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "tab-buttons";

  children.forEach((child, index) => {
    const tabName = child.getAttribute("data-tabname");
    if (!tabName) return;

    const button = document.createElement("button");
    button.textContent = tabName;
    button.className = "tab-button";

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

      buttonContainer.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      child.style.display = "block";
    });

    buttonContainer.appendChild(button);
  });

  node.insertBefore(buttonContainer, node.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.getElementById("tab-container");
  asTabs(tabContainer);
});
