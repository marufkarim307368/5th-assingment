let taskAssigned = 6;
let total = 23;

const buttons = document.querySelectorAll(".btnCompleted");
const activityList = document.getElementById("activityList");
const clearActivityBtn = document.getElementById("clearActivity");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const taskName = button.closest("nav").querySelector("h1").innerText;
    const currentTime = getCurrentTime();

    alert("You completed a tasks");

    taskAssigned--;
    document.getElementById("taskAssigned").innerText = taskAssigned;

    total++;
    document.getElementById("total").innerText = total;

    button.disabled = true;

    const listItem = document.createElement("li");
    listItem.innerHTML = `✅ <b>${taskName}</b> completed a tasks at <i>${currentTime}</i>`;
    activityList.appendChild(listItem);

    const disabledButtons = document.querySelectorAll(".btnCompleted:disabled");
    if (disabledButtons.length === 6) {
      alert("✅ All tasks are completed!");
    }
  });
});

clearActivityBtn.addEventListener("click", function () {
  activityList.innerHTML = "";

  buttons.forEach((button) => {
    button.disabled = false;
  });

  taskAssigned = 6;
  total = 23;
  document.getElementById("taskAssigned").innerText = taskAssigned;
  document.getElementById("total").innerText = total;
});

function getCurrentTime() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Dhaka",
  });
}

const d = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const bstTime = d.toLocaleString("en-GB", {
  timeZone: "Asia/Dhaka",
  ...options,
});

document.getElementById("dateTime").innerHTML = bstTime;

document.getElementById("image").addEventListener("click", function () {
  const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightpink",
    "lightyellow",
    "lightgray",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

document.getElementById("discoverBox").addEventListener("click", function () {
  window.location.href = "main.html";
});
