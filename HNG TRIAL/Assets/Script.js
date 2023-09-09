
const slackUserName = document.querySelector("[data-testid='slackUserName']");
const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
const myTrack = document.querySelector("[data-testid='myTrack']");
const githubURL = document.querySelector("[data-testid='githubURL']");
const timeInMillisecond = document.getElementById("timeInMillisecond");


const date = new Date();


// slackUserName.addEventListener("mouseover", function(){
//     alert("slackUserName is Imo Emmanuel Udoh")
// });



function DayOfTheWeek(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDayOfTheWeek.innerHTML = `Today is: ${days[date.getDay()]},`; 
}


const year = date.getUTCFullYear();
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();
const today = document.getElementById("date");
today.innerHTML = `${day}/${month}/${year}`

function UTCTime(){
    //const date = new Date();
    // const milliseconds = date.getMilliseconds();
    //const currentTime = date.toISOString().substr(11, 8);
    const date = new Date();
const hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const seconds = date.getUTCSeconds();
const milliseconds = date.getUTCMilliseconds();
const time =`UTC Time: ${hours}:${minutes}:${seconds}:${milliseconds}`;
     currentUTCTime.textContent= time
     
}
DayOfTheWeek();
UTCTime();

 setInterval(UTCTime, 0.001);

 function AUTCTime(){
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
   const millisecond = hours* minutes* seconds *milliseconds
    timeInMillisecond.innerHTML = millisecond
 };
 AUTCTime ();

 setInterval(AUTCTime, 0.001)