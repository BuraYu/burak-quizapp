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

const form = document.querySelector(".form");
const buttonsbt = document.querySelector(".btn-submit");
const wrapper = document.querySelector(".wrapper");

// Event listener for the button within the form
buttonsbt.addEventListener("click", (event) => {
  event.preventDefault();

  // Create new elements to be added within the wrapper
  const article = document.createElement("article");
  const button = document.createElement("button");
  button.textContent = "New Button";

  // Append the new elements to the wrapper
  wrapper.appendChild(article);
  article.appendChild(button);
});
