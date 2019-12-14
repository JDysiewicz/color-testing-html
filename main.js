function setTime()
{
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,0);
    const minutes = String(now.getMinutes()).padStart(2,0);

    const timer = document.querySelector(".timer");
    timer.innerHTML = `<h1>${hours}:${minutes}</h1>`
}

setInterval(setTime, 1000);

console.log("hey")