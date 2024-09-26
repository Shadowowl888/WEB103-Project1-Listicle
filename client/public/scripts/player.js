const renderPlayer = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/players");
  const data = await response.json();

  const playerContent = document.getElementById("player-content");
  let player;
  
  if (data) {
    player = data.find(player => player.id === requestedID);
    document.getElementById("image").src = player.image;
    document.getElementById("name").textContent = player.name;
    document.getElementById("submittedBy").textContent = "Submitted by: " + player.submittedBy;
    document.getElementById("team").textContent = "Team: " + player.team;
    document.getElementById("position").textContent = "Position: " + player.position;
    document.getElementById("description").textContent = player.description;
    document.title = `Fantasy Footballers - ${player.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Gifts Available 😞";
    giftContent.appendChild(message);
  };
};
  
renderPlayer();