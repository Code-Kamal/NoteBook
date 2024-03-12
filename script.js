// Get all toggle buttons
var toggleButtons = document.querySelectorAll(".toggleButton");

// Add event listener to each toggle button
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var faq__detail = button.nextElementSibling;
    if (
      faq__detail.style.display === "" ||
      faq__detail.style.display === "none"
    ) {
      faq__detail.style.display = "block";
      faq__detail.style.border = "1px solid #4CAF50";
      faq__detail.style.marginTop = "-10px";
      faq__detail.style.borderRadius = "0 0 10px 10px";
    } else {
      faq__detail.style.display = "none";
    }
  });
});
