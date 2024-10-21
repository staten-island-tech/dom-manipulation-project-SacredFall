const DOMselectors = {
  bgImage: document.querySelector("#bgImageUrl"),
  cardTitle: document.querySelector("#cardTitle"),
  cardDescription: document.querySelector("#cardDescription"),
  button: document.querySelector("button"),
  container: document.querySelector("#card-container"),
};

function run() {
  DOMselectors.button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Executed!");
    addcard();
  });
}

function addcard() {
  const bgImage = DOMselectors.bgImage.value;
  const cardTitle = DOMselectors.cardTitle.value;
  const cardDescription = DOMselectors.cardDescription.value;
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class='card'><button class='delete-button'></button><h1>${cardTitle}</h1><p>${cardDescription}</p><img src="${bgImage}"></div>`
  );
}

DOMselectors.container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentNode.remove();
  }
});

const deleteAllCardsButton = document.getElementById("delete-all-cards");
deleteAllCardsButton.addEventListener("click", (event) => {
  event.preventDefault();
  deleteAllCards();
});

function deleteAllCards() {
  DOMselectors.container.innerHTML = "";
}

run();
