let postDeleteBtns = document.querySelectorAll('.postDelete');
let postEditBtns = document.querySelectorAll('.postEdit');
let commentDeleteBtns = document.querySelectorAll('.commentDelete');
let commentEditBtns = document.querySelectorAll('.commentEdit');

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (name && content) {
    const response = await fetch(`/api/posts`, {
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

const postDelButtonHandler = async (event) => {
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

const commentDelButtonHandler = async (event) => {
  let id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/comments/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete comment');
  }
};

const postEditButtonHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/edit/post/${id}`, {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace(`/edit/post/${id}`);
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

if (postDeleteBtns) {
  for (let i = 0; i < postDeleteBtns.length; i++) {
    postDeleteBtns[i].addEventListener('click', postDelButtonHandler);
  }
}

if (postEditBtns) {
  for (let i = 0; i < postEditBtns.length; i++) {
    postEditBtns[i].addEventListener('click', postEditButtonHandler);
  }
}

if (commentDeleteBtns) {
  for (let i = 0; i < commentDeleteBtns.length; i++) {
    commentDeleteBtns[i].addEventListener('click', commentDelButtonHandler);
  }
}

// if (commentEditBtns) {
//   commentEditBtn.addEventListener('click', commentEditButtonHandler);
// }

// document
//   .querySelector('#postEdit')
//   .addEventListener('click', editButtonHandler);

// document
//   .querySelector('#commentEdit')
//   .addEventListener('click', editButtonHandler);
