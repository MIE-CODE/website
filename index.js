function getCurrentDateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return  time;
}
function getCurrentDay(){
    let now = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfWeek[now.getDay()];
    return dayOfWeek
}

function updateDateTime() {
    let timeDiv = document.getElementById('time');
    let dayDiv = document.getElementById('day');
    dayDiv.textContent = getCurrentDay();
    timeDiv.textContent = getCurrentDateTime();
    setInterval(function() {
        timeDiv.textContent = getCurrentDateTime();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
});
