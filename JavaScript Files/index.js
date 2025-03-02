// Generating Date
const now = new Date();
const date = now.getDate();
const month = getMonthByName(now.getMonth());
const year = now.getFullYear();
const day = getDayName(now.getDay());
const currentDate = month+" "+date+" "+year;

// Set the Date
document.getElementById("current-day").innerText = day;
document.getElementById("current-date").innerText = currentDate;
const dateClassList = document.getElementsByClassName("box-date");
console.log(dateClassList);
for(const date of dateClassList)
{
    date.innerHTML = currentDate;
}

// switching page
document.getElementById("discover-something").addEventListener('click',function()
{
    window.location.href="blog.html";
})


// Clear Button
document.getElementById("clear-btn").addEventListener("click", function()
{
    document.getElementById("history-list").innerText = "";
})


document.getElementById("shop-ease-btn").addEventListener('click',function()
{
    alert();

})