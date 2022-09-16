let cal = document.getElementById('cal');
let monthDetails = [];

function setMonth() {
    let currentDate = new Date();
    monthDetails.push(currentDate.getDate())
    console.log( monthDetails)
}

function createCal(currentMonth, totalDays, startDay) {
    let dayCounter = 1;    
    for (let i = 0; i < 5; i++) {
        let week = document.createElement('div')
        week.classList = "week";

        for (let j = 0; j < 7; j++) {
            let day = document.createElement('div')
            day.classList = "day";
            day.textContent = `${dayCounter}`
            week.append(day)
            dayCounter++;
        }
        cal.append(week)
    }  
}

setMonth()
createCal()