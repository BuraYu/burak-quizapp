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
