const DOMselectors = {
  bgImage: document.querySelector("#bgImageUrl"),
  cardTitle: document.querySelector("#cardTitle"),
  cardDescription: document.querySelector("#cardDescription"),
  button: document.querySelector("button"),
  container: document.querySelector("#container"),
};

function run() {
  DOMselectors.button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("heil");
    addcard();
  });
}

function addcard() {
  const bgImage = DOMselectors.bgImage.value;
  const cardTitle = DOMselectors.cardTitle.value;
  const cardDescription = DOMselectors.cardDescription.value;
  DOMselectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class='card'><h1>${cardTitle}</h1><p>${cardDescription}</p><img src="${bgImage}"></div>`
  );
}

run();
