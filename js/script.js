document.addEventListener("DOMContentLoaded", function () {
  const selectButtons = document.querySelectorAll("#select-btn");
  const playerList = document.getElementById("player-list");

  selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const playerName = this.parentElement.querySelector("h3").innerText;

      if (playerList.childElementCount < 5) {
        const listItem = document.createElement("li");
        listItem.className = "py-2 border-b";
        listItem.textContent = `${
          playerList.childElementCount + 1
        }. ${playerName}`;
        playerList.appendChild(listItem);
      } else {
        alert("You can only select up to 5 players.");
      }
    });
  });

  document
    .getElementById("remove-button")
    .addEventListener("click", function () {
      if (playerList.childElementCount > 0) {
        playerList.removeChild(playerList.lastChild);
        playerList.removeChild(playerList.lastChild);
      } else {
        alert("No player to remove!");
      }
    });
});
