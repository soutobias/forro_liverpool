document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".add-array-item").forEach(function(button) {
    button.addEventListener("click", function() {
      var target = document.querySelector("#" + button.dataset.target);
      var template = target.querySelector(".array-field__template");
      var clone = template.cloneNode(true);
      clone.style.display = "block";

      // Ensure the new field has the correct name attribute
      var input = clone.querySelector("input");
      input.name = input.name.replace("[{]", "[]");

      target.insertBefore(clone, template);
    });
  });

  document.querySelectorAll(".remove-array-item").forEach(function(button) {
    button.addEventListener("click", function() {
      var item = button.closest(".array-field__item");
      item.remove();
    });
  });
});
