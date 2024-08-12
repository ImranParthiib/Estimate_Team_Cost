// Remove Player From Selection
document.getElementById("remove-button").addEventListener("click", function () {
  const playerList = document.getElementById("player-list");
  if (playerList.childElementCount > 0) {
    playerList.removeChild(playerList.lastChild);
    playerList.removeChild(playerList.lastChild);
  } else {
    alert("No player to remove!");
  }
});

// Add Player to Selection
const buttons = document.querySelectorAll("#select-btn");
const playerList = document.getElementById("player-list");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const parentDiv = button.parentElement;
    const h3Element = parentDiv.querySelector("h3");
    if (playerList.childElementCount < 5) {
      const listItem = document.createElement("li");
      listItem.className = "py-2 border-b";
      listItem.textContent = `${playerList.childElementCount + 1}. ${
        h3Element.innerText
      }`;
      playerList.appendChild(listItem);
    } else {
      alert("You can only select up to 5 players. Remove First!");
    }
  });
});
// Calculate Player Expenses
document.getElementById("calculate-btn").addEventListener("click", function () {
  const playerList = document.getElementById("player-list");
  const totalPlayer = playerList.childElementCount;
  const playerCost = document.getElementById("player-cost").value;
  const totalPlayerExpense = totalPlayer * playerCost;
  const playerExpense = document.getElementById("player-expense");
  if (totalPlayer === 0) {
    alert("Please select a player first!");
  } else {
    playerExpense.innerText = totalPlayerExpense;
  }
});

// Calculate Total Expense of the Team
document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const playerCosts = document.getElementById("player-expense").innerText;
    const managerCost = document.getElementById("manager-cost").value;
    const coachCost = document.getElementById("coach-cost").value;
    const totalTeamExpense =
      parseInt(playerCosts) + parseInt(managerCost) + parseInt(coachCost);
    document.getElementById("total-cost").innerText = totalTeamExpense;
  });
