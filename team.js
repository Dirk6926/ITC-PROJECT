const teamModal = document.getElementById("team-modal");
const teamImg = document.getElementById("team-modal-image");
const teamText = document.getElementById("team-modal-text");
const teamClose = document.querySelector(".team-close");

document.querySelectorAll(".team-member .read-more").forEach(button => {
  button.addEventListener("click", () => {
    const m = button.closest(".team-member");

    teamImg.src = m.querySelector("img").src;

    const name = m.dataset.name;
    const role = m.dataset.role;
    const bio = JSON.parse(m.dataset.bio);

    let html = `<h3>${name}</h3><p>${role}</p><ul>`;
    bio.forEach(item => html += `<li>${item}</li>`);
    html += `</ul>`;

    teamText.innerHTML = html;

    teamModal.style.display = "flex";
  });
});

teamClose.addEventListener("click", () => teamModal.style.display = "none");
teamModal.addEventListener("click", e => {
  if (e.target === teamModal) teamModal.style.display = "none";
});


