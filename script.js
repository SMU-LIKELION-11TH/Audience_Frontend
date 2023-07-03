// 사각형; 게시글 데이터 (예시)
var posts = [
    {
      title: "첫 번째 게시글 제목",
      content: "내용",
      views: 100
    },
    {
      title: "두 번째 게시글 제목",
      content: "20자 이상의 게시글입니다. 20자 이상의 게시글입니다. 20자 이상의 게시글입니다.",
      views: 90
    },
    {
        title: "세 번째 게시글 제목",
        content: "내용",
        views: 80
    },
    {
        title: "네 번째 게시글 제목",
        content: "내용",
        views: 60
    },
    {
        title: "다섯 번째 게시글 제목",
        content: "내용",
        views: 50
    }
  ];
  
  function truncateContentName(content) {
    if (content.length > 20) {
      return content.slice(0, 20) + "...";
    } else {
      return content;
    }
  }

  
  function showPosts() {
    var postList = document.getElementById("postList");
    postList.innerHTML = ""; 
  
    // 조회수 기준 내림차순 정렬
    posts.sort(function(a, b) {
      return b.views - a.views;
    });
  
    for (var i = 0; i < 5 && i < posts.length; i++) {
      var post = posts[i];
      var postElement = document.createElement("div");
      postElement.classList.add("post");
  
      var contentElement = document.createElement("h3");
      contentElement.classList.add("post-content");
      contentElement.textContent = truncateContentName(post.content);

      var titleElement = document.createElement("h3");
      titleElement.classList.add("post-title");
      titleElement.textContent = post.title;
  
      var viewsElement = document.createElement("p");
      viewsElement.classList.add("post-views");
      viewsElement.textContent = "조회수: " + post.views;
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(viewsElement);
  
      postList.appendChild(postElement);
    }
  }
  
  // 검색 기능 ---> ajax,,,
  function searchPosts(target){

    var word = target.value;
    var encodeWord = encodeURI(word);
    console.log(word);
    console.log(encodeWord);
    
    // Ajax
    $.ajax({
       type : 'GET',
       dataType : 'json',
       url : "url" + word,
       error : function(err) {
          console.log("실행중 오류가 발생하였습니다.");
       },
       success : function(data) {

          console.log("data확인 : " + data);
          console.log("결과 갯수 : " + data.dataSearch.content.length);
          console.log("첫번째 결과 : " + data.dataSearch.content[0]);
          $("#schoolList").empty();
          var checkWord = $("#word").val(); //검색어 입력값
          console.log(data.dataSearch.content.length);
             }
          })
    }


/*
// 검색 결과
function displaySearchResults(searchResults, searchText) {
  var searchResultHeading = document.getElementById("searchResultHeading");
  var searchResultsDiv = document.getElementById("searchResults");

  searchResultsDiv.innerHTML = ""; 

  if (searchResults.length > 0) {
    searchResultHeading.textContent = '"' + searchText + '"에 대한 검색결과';
    searchResultHeading.style.display = "block"; 

    for (var i = 0; i < searchResults.length; i++) {
      var result = searchResults[i];
      var resultDiv = document.createElement("div");
      resultDiv.classList.add("searchResult");

      var titleElement = document.createElement("h3");
      titleElement.textContent = result.title;

      var contentElement = document.createElement("p");
      contentElement.textContent = result.content;

      resultDiv.appendChild(titleElement);
      resultDiv.appendChild(contentElement);

      searchResultsDiv.appendChild(resultDiv);
    }
  } else {
    searchResultHeading.textContent = "검색 결과가 없습니다.";
    searchResultHeading.style.display = "block"; 
  }
}

displaySearchResults(searchResults, searchText);
*/


// 실시간으로 새로운 게시글을 받아와 화면에 추가
function listenForNewPosts() {
    setInterval(function() {
      var newPost = {
        title: "새로운 게시글 " + (posts.length + 1),
        content: "내용",
        views: Math.floor(Math.random() * 100)
      };
  
      posts.unshift(newPost); 
  
      addNewPost(newPost); 
  
      if (posts.length > 5) {
        var postList = document.getElementById("newPostContainer");
        postList.removeChild(postList.lastChild);
      }
    }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    showPosts(posts);
    searchPosts();
    listenForNewPosts();
  });
  


// 줄; 게시글 데이터 (예시)
var linePosts = [
  {
    lineTitle: "첫 번째 게시글",
    lineCompany: "회사명",
    lineViews: 100
  },
  {
    lineTitle: "두 번째 게시글",
    lineCompany: "회사명",
    lineViews: 50
  },
  {
    lineTitle: "세 번째 게시글",
    lineCompany: "회사명",
    lineViews: 70
  },
  {
    lineTitle: "네 번째 게시글",
    lineCompany: "회사명",
    lineViews: 55
  },
  {
    lineTitle: "다섯 번째 게시글",
    lineCompany: "회사명",
    lineViews: 60
  }
];


function lineShowPosts() {
  var linePostList = document.getElementById("linePostList");
  linePostList.innerHTML = ""; 

  for (var i = 0; i < 5 && i < linePosts.length; i++) {
    var linePost = linePosts[i];
    var linePostElement = document.createElement("div");
    linePostElement.classList.add("linePost");

    var lineCompanyElement = document.createElement("h2");
    lineCompanyElement.classList.add("linePost-company");
    lineCompanyElement.textContent = "[" + linePost.lineCompany + "]";

    var lineTitleElement = document.createElement("h2");
    lineTitleElement.classList.add("linePost-title");
    lineTitleElement.textContent = linePost.lineTitle;

    var lineViewsElement = document.createElement("p");
    lineViewsElement.classList.add("linePost-views");
    lineViewsElement.textContent = "조회수: " + linePost.lineViews;

    linePostElement.appendChild(lineCompanyElement);
    linePostElement.appendChild(lineTitleElement);
    linePostElement.appendChild(lineViewsElement);
  
    linePostList.appendChild(linePostElement);
  }
}


document.addEventListener("DOMContentLoaded", lineShowPosts);
