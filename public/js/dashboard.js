const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (name && content) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({ name, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
};

const editButtonHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    res.render('edit', {
      ...user,
      logged_in: true
    });

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
}


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#edit')
  .addEventListener('click', editButtonHandler);

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);
