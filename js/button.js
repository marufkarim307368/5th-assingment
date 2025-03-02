let taskAssigned = 6;
let total = 23;

const buttons = document.querySelectorAll(".btnCompleted");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("🎉 Congratulations!");

    // taskAssigned ও total আপডেট করা
    taskAssigned--;
    document.getElementById("taskAssigned").innerText = taskAssigned;

    total++;
    document.getElementById("total").innerText = total;

    // Button disable করা
    button.disabled = true;

    // 6 বার ক্লিকের পর "All tasks are completed!" alert দেখানো
    const disabledButtons = document.querySelectorAll(".btnCompleted:disabled");

    if (disabledButtons.length === 6) {
      alert("✅ All tasks are completed!");
    }
  });
});

// date and time

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
