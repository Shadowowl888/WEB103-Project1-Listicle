const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const headerLogo = document.createElement("img");
headerLogo.src = "/logo.png";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "GridIron Scout";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement("div");
headerRight.className = "header-right";

const headerButton = document.createElement("button");
headerButton.textContent = "Home";

headerButton.addEventListener("click", function handleClick(event) {
  window.location = "/";
});

// Header search bar
const searchForm = document.createElement("form");
searchForm.className = "search-form";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search player...";
searchInput.className = "search-input";
searchInput.name = "playerName";

searchInput.addEventListener("input", function() {
  const playerName = searchInput.value.trim().toLowerCase();
  filterPlayersByName(playerName);  // Call filter function from players.js
});

searchForm.appendChild(searchInput);

headerRight.appendChild(searchForm);
headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);