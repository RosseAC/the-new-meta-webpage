document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments');

    // Load existing comments from localStorage
    const existingComments = JSON.parse(localStorage.getItem('comments')) || [];
    existingComments.forEach(comment => {
        commentsContainer.appendChild(createCommentElement(comment.name, comment.text));
    });

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const commentText = document.getElementById('comment').value;

        const newComment = createCommentElement(name, commentText);

        commentsContainer.appendChild(newComment);

        const newComments = [...existingComments, { name, text: commentText }];
        localStorage.setItem('comments', JSON.stringify(newComments));

        commentForm.reset();
    });

    function createCommentElement(name, text) {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${name}:</strong> ${text}`;
        return commentElement;
    }
});
