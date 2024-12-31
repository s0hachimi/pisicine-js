function addWeek(date) {
    
    let daysOfTheWeek = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
    ]

    let startDate = new Date('0001-01-01')
    let dateInput = date
    let day = (dateInput - startDate) / (1000 * 60 * 60 * 24)

    return daysOfTheWeek[day%14];
}


// console.log(addWeek(new Date('0001-01-09')));



function timeTravel(obj) {
    
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)

    return obj.date

}

// console.log(timeTravel({ date: new Date('2020-05-29 23:25:22'),  hour: 21,  minute: 22,  second: 22,}).toString());