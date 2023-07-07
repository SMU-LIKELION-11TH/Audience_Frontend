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



// 신고하기
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
