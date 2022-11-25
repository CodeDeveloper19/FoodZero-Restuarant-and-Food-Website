import { useEffect } from 'react';

export function Setdatehook(date) {
    const checkDateOnline = () => {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6a3b77d7f8984eb4ae1518bc4c8b5e82&ip=192.99.34.64')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.time_zone.current_time.split(" ");
            let maxDate;
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
                
            currentDate = yyyy + '-' + mm + '-' + dd;
            maxDate = yyyy + '-' + 12 + '-' + 31
            date.current.setAttribute("min", currentDate);
            date.current.setAttribute("max", maxDate)
        })
        .catch(error => {
          console.log(error.message);
        })
    }

    useEffect(() => {
        checkDateOnline();
    }, [])

  return;
}