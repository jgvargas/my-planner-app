let cal = document.getElementById('cal');

function createCal(currentMonth, totalDays, startDay) {
    
    for (let i = 0; i < 5; i++) {
        let week = document.createElement('div')
        week.classList = "week";

        for (let j = 0; j < 7; j++) {
            let day = document.createElement('div')
            day.classList = "day";
            day.textContent = `${j}`
            week.append(day)
        }
        cal.append(week)
    }  
    console.log(cal)
}

createCal()