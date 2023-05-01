const exploreBtn = document.getElementById("explore");
const plantsDiv = Array.from(document.querySelectorAll(".column"));
const plantsText = document.getElementById("text");
const images = document.querySelectorAll("img");
const plantImages = Array.from(document.querySelectorAll(".plants"));

exploreBtn.addEventListener("click", showImages);

function showImages() {
  plantImages.forEach((image) => {
    image.style.display = "inline";
  });
  plantsText.style.display = "none";
  exploreBtn.style.display = "none";
}

function addButtons() {
  plantsDiv.forEach((image) => {
    const button = document.createElement("button");
    button.textContent = "TEST";
    image.appendChild(button);
  });
}

for (let image of plantsDiv) {
  image.addEventListener("click", addButtons);
}
