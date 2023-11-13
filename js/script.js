const button = document.querySelector(".btn-quiz");
const answer = document.querySelector(".show-answer");
const bookmark = document.getElementById("img-change");

button.addEventListener("click", () => {
  if (answer.style.visibility == "hidden") {
    answer.style.visibility = "visible";
    button.textContent = "Hide answer";
  } else {
    answer.style.visibility = "hidden";
    button.textContent = "Show answer";
  }
});

function changeImage() {
  if (bookmark.src.match("img/bookmark.png")) {
    bookmark.src = "img/not_bookmark.png";
  } else {
    bookmark.src = "img/bookmark.png";
  }
}
