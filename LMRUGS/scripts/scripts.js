const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const closeBtn = document.getElementById("closeBtn");
const firstImage = document.getElementById("img-one");
const alocasiaImage = document.getElementById("alocasia");
const collectionsBtn = document.getElementById("collections");
const firstDiv = document.getElementById("first-div");

searchIcon.addEventListener("click", showSearchBar);
closeBtn.addEventListener("click", hideSearchBar);
firstImage.addEventListener("mouseenter", changeImage);
firstImage.addEventListener("mouseout", resetImage);
collectionsBtn.addEventListener("click", goToCollectionsPage);
firstDiv.addEventListener("click", showPlantRugs);

function hideSearchBar() {
  closeBtn.style.display = "none";
  searchBar.style.display = "none";
  searchIcon.style.display = "inline";
}

function showSearchBar() {
  searchBar.style.display = "inline";
  closeBtn.style.display = "inline";
  searchIcon.style.display = "none";
}

function changeImage(e) {
  firstImage.style.display = "none";
  alocasiaImage.style.display = "inline";
}

function resetImage() {
  firstImage.style.display = "inline";
  alocasiaImage.style.display = "none";
}

function goToCollectionsPage() {
  window.location.href = "collections.html";
}

function showPlantRugs(e) {
  e.target.location = "home.html";
}
