function getInnerTextById(id) {
  const value = document.getElementById(id).innerHTML;
  return value;
}

function getMonthByName(n) {
  switch (n) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function getDayName(n) {
  switch (n) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function getInnerValueById(id) {
  const value = document.getElementById(id).innerText;
  return value;
}
function getInnerValueByIdAsInteger(id) {
  const value = document.getElementById(id).innerText;
  valueInt = parseInt(value);
  return valueInt;
}


function setNotification(titleId, historyDivId, numberOfTaskId, totalTaskId,time) {
  const title = getInnerValueById(titleId);
  const message = "You have Complete The Task " + title + " at " + time;
  console.log(message);

  const historyDiv = document.getElementById(historyDivId);

  let div = document.createElement("div");
  div.innerHTML = `<p
              class="bg-[#F4F7FF] mt-2 py-2 px-4 border border-blue-500 rounded-lg text-justify"
            >
            ${message}
          </p>
    `;
  historyDiv.appendChild(div);

  let taskAssign = getInnerValueByIdAsInteger(numberOfTaskId);
  taskAssign -= 1;
  document.getElementById("number-of-task").innerText = taskAssign;

  let totalTask = getInnerValueByIdAsInteger(totalTaskId);
  totalTask += 1;
  document.getElementById("total-task").innerText = totalTask;

  if (counter == 6) {
    alert("Congratulations!, You have completed all the task.");
  }
}
