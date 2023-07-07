function openNewWindow() {
    window.open("companyname.html", "새 창", "width=400,height=300");
  }

  function receiveValue(value) {
    // 기존 창에서 전달된 값을 처리하는 로직을 작성합니다.
    console.log("기존 창에서 전달된 값:", value);
  }
// 버튼 요소 가져오기
var button1 = document.getElementsByClassName('intern_btn');

// 각 버튼에 대해 이벤트 핸들러 추가
for (var i = 0; i < button1.length; i++) {
  button1[i].addEventListener('click', function() {
    // 현재 클릭된 버튼의 클래스를 변경하여 활성화 상태를 표시
    this.classList.toggle('active');
  });
}

// 버튼 요소 가져오기
var button2 = document.getElementsByClassName('permanent_btn');

// 각 버튼에 대해 이벤트 핸들러 추가
for (var i = 0; i < button2.length; i++) {
  button2[i].addEventListener('click', function() {
    // 현재 클릭된 버튼의 클래스를 변경하여 활성화 상태를 표시
    this.classList.toggle('active');
  });
}

// 버튼 요소 가져오기
var button3 = document.getElementsByClassName('temporary_btn');

// 각 버튼에 대해 이벤트 핸들러 추가
for (var i = 0; i < button3.length; i++) {
  button3[i].addEventListener('click', function() {
    // 현재 클릭된 버튼의 클래스를 변경하여 활성화 상태를 표시
    this.classList.toggle('active');
  });
}

var stars = document.getElementsByClassName('star');

// 각 별점 요소에 대해 이벤트 핸들러 추가
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    setRating(value);
  });
}

function setRating(value) {
  // 모든 별점 요소의 활성화 상태 제거
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove('active');
  }

  // 선택된 별점 요소와 그 이전 별점 요소들에 활성화 상태 추가
  for (var i = 0; i < value; i++) {
    stars[i].classList.add('active');
  }
}


var fileInput = document.getElementById('upload-input');
var previewContainer = document.getElementById('preview-container');
var previewImage = document.createElement('img');
previewImage.id = 'preview-image';

fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    var imageUrl = event.target.result;
    previewImage.src = imageUrl;
    previewContainer.appendChild(previewImage);
  };

  reader.readAsDataURL(file);
});

var tagContainer = document.getElementById("tag-container");
var inputContainer = document.getElementById("input-container");
var maxTags = 5; // 최대 태그 개수

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTag();
  }
}

function addTag() {
  var input = document.getElementById("tag-input");
  var tagText = input.value.trim();
  if (tagText !== "") {
    var tags = tagText.split("#").filter(Boolean);

    tags.forEach(function(tag) {
      if (tagContainer.childElementCount < maxTags) {
        createTagButton(tag);
      }
    });

    input.value = "";
  }
}

function createTagButton(tag) {
  var button = document.createElement("button");
  button.innerHTML = "#"+tag;
  button.className = "tag-button";
  button.onclick = function() {
    var newTag = prompt("해시태그 수정:", tag);
    if (newTag !== null) {
      button.innerHTML = newTag;
    }
  };

  tagContainer.appendChild(button);
}

document.getElementById("tag-input").addEventListener("keydown", handleKeyDown);
