// const buttonsbt = document.querySelector(".btn-submit");
// const article = document.createElement("article");
// const button = document.createElement("button");
// const wrapper = document.querySelector("wrapper");

// buttonsbt.addEventListener("click", (event) => {
//   event.defaultPrevented;

//   console.log("hello");

//   wrapper.append(article);
//   article.append(button);
// });

// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//     if (confirm("are you sure you want to leave the page")) {
//         console.log("leaving");
//     } else {
//         console.log("staying");
//         event.preventDefault();
//     }
// });

//const buttonsbt = document.querySelector(".btn-submit");

const form = document.querySelector('[data-js="form"]');
const wrapper = document.querySelector(".wrapper");
const questionTextarea = document.getElementById("question");
const answerTextarea = document.getElementById("answer");
const questionCharCount = document.getElementById("question-char-count");
const answerCharCount = document.getElementById("answer-char-count");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Create HTML content with the form data
  const htmlContent = `

  <div class="flex-container">
      <div class="quiz-item">
        <h2 class="question">${data["question-text"]}</h2>
        <button class="btn-quiz">Show answer</button>
        <p class="show-answer">${data.answer}</p>
        </p>
        <div class="tags">
          <!-- <span class="label success">#HTML</span> -->
          <span class="label info">${data.tags}</span>
          <!-- <span class="label warning">#JS</span> -->
        </div>
        <img class="bookmark-quiz-img" id= 'img-change' src="img/bookmark.png" alt="" onclick="changeImage()"/>
      </div>
    <div>
  `;

  // Insert the HTML content after the wrapper
  wrapper.insertAdjacentHTML("afterend", htmlContent);
});

// Add event listeners for character count
questionTextarea.addEventListener(
  "input",
  updateCharCount.bind(null, questionTextarea, questionCharCount)
);
answerTextarea.addEventListener(
  "input",
  updateCharCount.bind(null, answerTextarea, answerCharCount)
);

// Function to update character count
function updateCharCount(textarea, charCountElement) {
  const maxLength = parseInt(textarea.getAttribute("maxlength"));
  const remainingChars = maxLength - textarea.value.length;
  charCountElement.textContent = `${remainingChars} character${
    remainingChars !== 1 ? "s" : ""
  } remaining`;
}
