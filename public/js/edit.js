const saveChanges = async (event) => {
  event.preventDefault();

  const post_id = event.target.getAttribute('data-id');
  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  console.log(post_id);
  console.log(title);
  console.log(content);

  if (post_id && title && content) {
    await fetch(`/api/posts/edit/${post_id}`, {
      method: 'PATCH',
      body: JSON.stringify({ post_id, title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.replace('/dashboard');
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', saveChanges);
