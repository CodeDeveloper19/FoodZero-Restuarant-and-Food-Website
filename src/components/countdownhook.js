import {useEffect, useState} from "react";


const Countdown = () => {
    const [wholevalue, setWholeValue] = useState(undefined);
    let chosenDay, chosenMonth, remainingDays, remainingMonths, remainingHours, remainingMinutes, remainingSeconds, chosenHour;

    const checkDateOnline = () => {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6a3b77d7f8984eb4ae1518bc4c8b5e82&ip=192.99.34.64')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.time_zone.current_time.split(" ");
            let dividedDate = currentDate[0].split("-");
            let dd = parseInt(dividedDate[2]);
            let mm = parseInt(dividedDate[1]);

            let dividedTime = currentDate[1].split(".")[0];
            let Time = dividedTime.split(":");
            let h = Time[0];
            let m = Time[1];
            let s = Time[2];
    
            if (dd < 10) {
            dd = '0' + dd;
            };
    
            if (mm < 10) {
            mm = '0' + mm;
            };

            if (localStorage.getItem('date') === null){
                return;
            } else {
                compareDates([dd, mm, h, m, s]);
            };
        })
        .catch(error => {
          console.log(error.message);
        });
    }

    const compareDates = (currentDate) => {
        let chosenDate = localStorage.getItem('date');
        let chosenTime = localStorage.getItem('time');

        chosenDate = chosenDate.split("-");
        chosenDay = parseInt(chosenDate[2]);
        chosenMonth = parseInt(chosenDate[1]);

        chosenTime = chosenTime.split(":");
        chosenHour = parseInt(chosenTime[0]);

        if (chosenDay - currentDate[0] === 0){
            remainingDays = 0;
        } else if ((chosenDay - currentDate[0] === 1) && (chosenHour < currentDate[2])){
            remainingDays = 0;
        } else {
            remainingDays = chosenDay - currentDate[0];
        }

        if (chosenMonth === currentDate[1]){
            remainingMonths = 0;
        } else {
            remainingMonths = chosenMonth - currentDate[1];
        };

        if (chosenHour < currentDate[2]){
            remainingHours = ((currentDate[2] * 60) + parseInt(currentDate[3])) - (chosenHour * 60);
            remainingHours = (24 * 60) - remainingHours;
            remainingMinutes = remainingHours % 60;
            remainingHours = Math.floor(remainingHours/60);
        } else if (chosenHour > currentDate[2]){
            remainingHours = (chosenHour * 60) - ((currentDate[2] * 60) + parseInt(currentDate[3]));
            remainingMinutes = remainingHours % 60;
            remainingHours = Math.floor(remainingHours/60);
        } else {
            remainingHours = 0;
        };
        remainingSeconds = parseInt(currentDate[4]);
        setWholeValue([remainingDays, remainingMonths, remainingHours, remainingMinutes, remainingSeconds, currentDate[0], currentDate[2]]);
    }

    useEffect(() => {
        checkDateOnline();
    }, []);

    return wholevalue;
};


export { Countdown }