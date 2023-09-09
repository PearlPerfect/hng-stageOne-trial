const dayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const date = document.getElementById("date");
const UtcTime = document.getElementById("currentUTCTime");

const today = new Date();

const weekDay = today.getDay();
if(weekDay === 1){
    dayOfTheWeek.innerHTML = "Today is: Monday,";
}
else if(weekDay === 2){
    dayOfTheWeek.innerHTML ="Today is: Tuesday,";
}
else if(weekDay === 3){
    dayOfTheWeek.innerHTML ="Today is: Wednesday,";
}
else if(weekDay === 4){
    dayOfTheWeek.innerHTML ="Today is: Thursday,";
}
else if(weekDay === 5){
    dayOfTheWeek.innerHTML ="Today is: Friday,";
}
else if(weekDay === 6){
    dayOfTheWeek.innerHTML ="Today is: Saturday,";
}
else if(weekDay === 7){
    dayOfTheWeek.innerHTML ="Today is: Sunday,";
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


date.innerHTML = `${day}/${month}/${year}`
 UtcTime.innerHTML = `${hours}:${minutes}:${seconds} UTCTime`



