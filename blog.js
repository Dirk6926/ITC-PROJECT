document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const post = button.closest('.post');
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
