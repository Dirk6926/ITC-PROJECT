document.addEventListener("DOMContentLoaded", function() {

  const modal = document.getElementById("blog-modal");
  const modalImg = document.getElementById("modal-image");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");

  // All your "Read More" buttons
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach(button => {
    button.addEventListener("click", function() {

      const post = button.closest(".blog-post");

      const imgSrc = post.querySelector("img").src;
      const fullText = post.querySelector(".full-content").innerHTML;

      modalImg.src = imgSrc;
      modalText.innerHTML = fullText;

      modal.style.display = "flex";
    });
  });

  // Close the modal when X is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the box
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
