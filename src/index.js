//1.) fetch the dog image
fetch("http://localhost:3000/images/1")
  .then((res) => res.json())
  .then((data) => renderContent(data));

//2.) variables  by selecting element  
let renderTitle = document.getElementById("card-title");
let renderImage = document.getElementById("card-image");
let renderLikes = document.querySelector(".likes-section");
let renderlikeBtn = document.getElementById("like-count");
let renderComment = document.getElementById("comments-list");
let inputForm = document.getElementById("comment");
let likeBtn = document.getElementById("like-button");

//3.) rendering the title, image, and likes 
function renderContent(data) {
  renderTitle.innerText = data.title;
  renderImage.src = data.image;
  renderlikeBtn.innerHTML = data.likes;
}

//4.) etch request for the comments list
fetch("http://localhost:3000/comments")
  .then((res) => res.json())
  .then((data) => renderComments(data));

//5.) rendering all the comments and updating
function renderComments(data){
  renderComment.innerHMTL = data.content;
  for (const item of data) {
    let newComment = document.createElement("li");
    newComment.innerText = item.content;
    renderComment.append(newComment);
  }
}

//6.) variable for the form 
mainForm = document.getElementById("comment-form");

//7.) event listener for form  submittion
mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  newLi.innerText = comment.value;
  renderComment.append(newLi);
  event.target.reset();
});

//8.) variable for the like count field
let num = 0;

//9.) event listener for the hear & counts likes
likeBtn.addEventListener("click", function(){
  num = num + 1;
  renderlikeBtn.innerText = num + " likes";
});