const blogModal = document.getElementById("blog-modal");
const blogImg = document.getElementById("blog-modal-image");
const blogText = document.getElementById("blog-modal-text");
const blogClose = document.querySelector(".blog-close");

document.querySelectorAll(".blog-post .read-more").forEach(button => {
  button.addEventListener("click", () => {
    const post = button.closest(".blog-post");
    const fullContent = post.querySelector(".full-content");

    const title = fullContent.dataset.title;

    blogImg.src = post.querySelector("img").src;

    blogText.innerHTML = `
      <h2 class="modal-title">${title}</h2>
      ${fullContent.innerHTML}
    `;

    blogModal.style.display = "flex";
  });
});

blogClose.addEventListener("click", () => blogModal.style.display = "none");
blogModal.addEventListener("click", e => {
  if (e.target === blogModal) blogModal.style.display = "none";
});


