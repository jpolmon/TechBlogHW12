const newCommentHandler = async (event) => {        
    event.preventDefault();

    const post_id = event.target.getAttribute('data-id');
    const content = document.querySelector('#comment-content').value.trim();
    
    if (content) {
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`)
        } else {
            alert('Failed to create comment');
        }
    }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);