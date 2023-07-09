

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
  button.innerHTML = "#" + tag;
  button.className = "tag-button";
  button.onclick = function() {
    var newTag = prompt("해시태그 수정:", tag);
    if (newTag !== null) {
      button.innerHTML = newTag;
    }
  };

  tagContainer.appendChild(button);
  adjustButtonWidth(button);

  // 버튼 위치 제한
  var lastButton = tagContainer.lastElementChild;
  var leftPosition = lastButton.getBoundingClientRect().left;
  if (leftPosition + lastButton.offsetWidth > 600) {
    tagContainer.style.flexWrap = "wrap";
    button.style.marginTop = "10px";
  }
}


function adjustButtonWidth(button) {
  var tagText = button.innerHTML;
  var tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.whiteSpace = "nowrap";
  tempSpan.innerHTML = tagText;
  document.body.appendChild(tempSpan);

  var width = tempSpan.offsetWidth * 1.4 + 10;
  button.style.width = width + "px";

  document.body.removeChild(tempSpan);
}

document.getElementById("tag-input").addEventListener("keydown", handleKeyDown);

