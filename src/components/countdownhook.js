import {useEffect} from "react";

const Countdown = (refs) => {
    const checkDateOnline = () => {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6a3b77d7f8984eb4ae1518bc4c8b5e82&ip=192.99.34.64')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.time_zone.current_time.split(" ");
            let dividedDate = currentDate[0].split("-");
            let dd = parseInt(dividedDate[2])
            let mm = parseInt(dividedDate[1])
            let yyyy = parseInt(dividedDate[0])
    
            if (dd < 10) {
            dd = '0' + dd;
            }
    
            if (mm < 10) {
            mm = '0' + mm;
            } 

            compareDates([mm, dd]);
        })
        .catch(error => {
          console.log(error.message);
        })
    }

    const compareDates = (currentDate) => {
        let chosenDate = localStorage.getItem('date');
        let chosenDay, chosenMonth, remainingDays, remainingMonths;
        let chosenTime = localStorage.getItem('time');

        chosenDate = chosenDate.split("-");
        chosenDay = parseInt(chosenDate[2]);
        chosenMonth = parseInt(chosenDate[1]);

        remainingMonths = chosenMonth - currentDate[0];
        remainingDays = chosenDay - currentDate[1]

        // console.log(chosenMonth)
        // console.log(chosenDay);
        // console.log(remainingDays)
        // console.log(remainingMonths)
        console.log(chosenTime)
    }

    useEffect(() => {
        checkDateOnline();
    }, [])
};

export { Countdown }