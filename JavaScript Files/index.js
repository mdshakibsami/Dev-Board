document.getElementById("discover-something").addEventListener('click',function()
{
    window.location.href="blog.html";
})

document.getElementById("clear-btn").addEventListener("click", function()
{
    document.getElementById("history-list").innerText = "";
})