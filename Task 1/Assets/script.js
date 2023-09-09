const dayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const date = document.getElementById("date");
const UtcTime = document.getElementById("currentUTCTime");

const today = new Date();

const weekDay = today.getDay();
if(weekDay === 1){
    dayOfTheWeek.textContent = "Monday,";
}
else if(weekDay === 2){
    dayOfTheWeek.textContent ="Tuesday,";
}
else if(weekDay === 3){
    dayOfTheWeek.textContent ="Wednesday,";
}
else if(weekDay === 4){
    dayOfTheWeek.textContent ="Thursday,";
}
else if(weekDay === 5){
    dayOfTheWeek.textContent ="Friday,";
}
else if(weekDay === 6){
    dayOfTheWeek.textContent ="Saturday,";
}
else if(weekDay === 7){
    dayOfTheWeek.textContent ="Sunday,";
}

else{
    dayOfTheWeek.textContent ="not a day";
}

const year = today.getUTCFullYear();
const month = today.getUTCMonth() + 1;
const day = today.getUTCDate();
const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();
const seconds = today.getUTCSeconds();


date.textContent = `${day}-${month}-${year}`
 UtcTime.textContent = `${hours}:${minutes}:${seconds}`



