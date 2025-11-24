document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const post = button.closest('.blog-post');
    const fullContent = post.querySelector('.full-content');
    const preview = post.querySelector('.preview');

    if (fullContent.style.display === 'block') {
      fullContent.style.display = 'none';
      preview.style.display = 'block';
      button.textContent = 'Read More';
    } else {
      fullContent.style.display = 'block';
      preview.style.display = 'none';
      button.textContent = 'Show Less';
    }
  });
});
const rings = document.querySelectorAll('.scroll-rings .ring');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      rings.forEach(ring => {
        ring.style.animationPlayState = 'running'; // START animation
      });
      observer.disconnect(); // optional, only trigger once
    }
  });
}, {
  threshold: 0.1
});

// Observe the container, not individual rings
const container = document.querySelector('.scroll-rings');
observer.observe(container);
