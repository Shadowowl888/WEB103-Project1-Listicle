const renderPlayers = async () => {
  const response = await fetch("/players");
  const data = await response.json();
  
  const mainContent = document.getElementById("main-content");
  
  if (data) {
    data.map(player => {
      const card = document.createElement("div");
      card.className = "card";
      
      const topContainer = document.createElement("div");
      topContainer.className = "top-container";

      const bottomContainer = document.createElement("div");
      bottomContainer.className = "bottom-container";

      topContainer.style.backgroundImage = `url(${player.image})`

      const name = document.createElement("h3");
      name.textContent = player.name;
      bottomContainer.appendChild(name);

      const team = document.createElement("p");
      team.textContent = "Team: " + player.team
      bottomContainer.appendChild(team);

      const position = document.createElement("p");
      position.textContent = "Position: " + player.position;
      bottomContainer.appendChild(position);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute('role', 'button');
      link.href = `/players/${player.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
    
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Gifts Available 😞";
    mainContent.appendChild(message);
  };
};

const requestedURL = window.location.href.split("/").pop();
if (requestedURL) {
  window.location.href = "../404.html";
} else {
  renderPlayers();
};