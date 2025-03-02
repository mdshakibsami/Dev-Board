// Set the Date
const now = new Date();
const day = getDayName(now.getDay());
const currentDate = getCurrentDate();
document.getElementById("current-day").innerText = day;
document.getElementById("current-date").innerText = currentDate;
const dateClassList = document.getElementsByClassName("box-date");
for (const date of dateClassList) {
  date.innerHTML = currentDate;
}

// switching page
document
  .getElementById("discover-something")
  .addEventListener("click", function (event) {
    window.location.href = "blog.html";
  });

// Clear Button
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-list").innerText = "";
});



// Background color Changing button
document.getElementById("bg-color-changer").addEventListener('click',function()
{
    const color = getRandomHexColor();
    document.getElementById('body').style.backgroundColor = color;
    
})
// Six Buttons
let counter = 0;

document.getElementById("btn-1").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-1",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-1").disabled = true;
});

document.getElementById("btn-2").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-2",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-2").disabled = true;
});

document.getElementById("btn-3").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-3",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-3").disabled = true;
});

document.getElementById("btn-4").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-4",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-4").disabled = true;
});

document.getElementById("btn-5").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-5",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-5").disabled = true;
});

document.getElementById("btn-6").addEventListener("click", function () {
  alert();
  const time = getCurrentTime();
  counter++;
  setNotification(
    "title-6",
    "history-list",
    "number-of-task",
    "total-task",
    time,
    counter
  );
  document.getElementById("btn-6").disabled = true;
});
