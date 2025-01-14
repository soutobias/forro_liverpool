document.addEventListener("DOMContentLoaded", () => {
  // Add new array item
  document.addEventListener("click", (event) => {
    console.log("AAAAAAAAAA", event.target);
    if (event.target.classList.contains("add-array-item")) {
      event.preventDefault();
      const targetId = event.target.getAttribute("data-target");
      const container = document.getElementById(targetId);
      const template = container.querySelector(".array-field__template").innerHTML;
      container.insertAdjacentHTML("beforeend", template);
    }
  });

  // Remove array item
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-array-item")) {
      event.preventDefault();
      const item = event.target.closest(".array-field__item");
      if (item) item.remove();
    }
  });
});
