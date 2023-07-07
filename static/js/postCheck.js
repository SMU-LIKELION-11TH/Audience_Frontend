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
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    
    const newCommentText = document.createElement('p');
    newCommentText.textContent = commentInput;
    
    newComment.appendChild(newCommentText);
    
    commentContainer.prepend(newComment);
    
    document.getElementById('comment-input').value = '';
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  const commentContainer = document.querySelector('.commentContainer');
  const commentInput = document.getElementById('comment-input');

  submitButton.addEventListener('click', () => {
    const commentContent = commentInput.value;

    if (commentContent.trim() === '') {
      return; 
    }

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentContent;

    const replyButton = document.createElement('button');
    replyButton.classList.add('replyButton');
    replyButton.textContent = '답글 달기';

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = '수정하기';

    const reportButton = document.createElement('button');
    reportButton.classList.add('reportButton');
    reportButton.textContent = '신고하기';

    commentElement.appendChild(replyButton);
    commentElement.appendChild(editButton);
    commentElement.appendChild(reportButton);
    commentContainer.appendChild(commentElement);

    commentInput.value = '';
  });
});

