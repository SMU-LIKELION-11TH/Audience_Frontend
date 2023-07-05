let isLiked = false;

function toggleLike() {
  const button = document.querySelector(".goodButton");

  if (isLiked) {
    button.classList.remove("clicked");
  } else {
    button.classList.add("clicked");
  }

  isLiked = !isLiked;
}



let isNotLiked = false;

function toggleNotLike() {
  const button = document.querySelector(".badButton");

  if (isNotLiked) {
    button.classList.remove("clicked");
  } else {
    button.classList.add("clicked");
  }

  isNotLiked = !isNotLiked;
}


// 답글 달기
const replyButton = document.querySelector('.commentOfComment');
const replyForm = document.querySelector('.replyForm');

replyButton.addEventListener('click', () => {
  replyForm.style.display = 'block';
});



// 신고하기 (댓글)

const reportButton = document.querySelector('.commentReport');
const reportMenu = document.querySelector('.reportMenu');

reportButton.addEventListener('click', () => {
  reportMenu.style.display = 'block';
});

const reportSubmitButton = document.getElementById('report-submit');
reportSubmitButton.addEventListener('click', () => {
  const reportReason = document.getElementById('reportReason').value;

  console.log('신고 이유:', reportReason);

  reportMenu.style.display = 'none';
});


// 신고하기 (게시글)
const reportButton2 = document.querySelector('.report');
const reportMenu2 = document.querySelector('.reportMenu2');

reportButton2.addEventListener('click', () => {
  reportMenu2.style.display = 'block';
});

const reportSubmitButton2 = document.getElementById('report-submit2');
reportSubmitButton2.addEventListener('click', () => {
  const reportReason2 = document.getElementById('reportReason2').value;

  console.log('신고 이유:', reportReason2);

  reportMenu2.style.display = 'none';
});




// 댓글 달기
const submitButton = document.getElementById('submit');
const commentContainer = document.querySelector('.commentContainer');

submitButton.addEventListener('click', () => {
  const commentInput = document.getElementById('comment-input').value;
  
  if (commentInput.trim() !== '') {
    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    
    // Create a new comment text element
    const newCommentText = document.createElement('p');
    newCommentText.textContent = commentInput;
    
    // Add the new comment text to the comment element
    newComment.appendChild(newCommentText);
    
    // Add the new comment to the top of the comment container
    commentContainer.prepend(newComment);
    
    // Clear the comment input field
    document.getElementById('comment-input').value = '';
  }
});
