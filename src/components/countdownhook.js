import {useState, useEffect} from "react";

const Countdown = (chosenDate) => {
    const [chosennDate, setChosenDate] = useState(undefined);

    useEffect(() => {
        setChosenDate(chosenDate)
        console.log(chosennDate)
    }, [chosennDate])
};

export { Countdown }