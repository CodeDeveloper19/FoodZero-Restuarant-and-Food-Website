import React, { useContext, useEffect, useState, createContext } from "react";
import { NavigationContext } from "../../App";
import Header from "../header";
import Navigation from "../Homepage/navigation";
import reservationbg from '../../images/reservationbg.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Countdown } from "../countdownhook";

export default function Mainreservation(){
    const [[showNavigation], [], [reservationDetails, setReservationDetails]] = useContext(NavigationContext);
    const [months, setMonths] = useState("00");
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const values = Countdown();

    useEffect(() => {
        if (values !== undefined){
            setDays(values[0]);
            setMonths(values[1]);
            setHours(values[2]);
            setMinutes(values[3]);
            setSeconds(values[4]);
        }
    }, [values])

    useEffect(() => {
        if (seconds !== "00"){
            if (months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0){
                alert("It's time for your reservation");
                setReservationDetails(null);
                localStorage.clear();
                return;
            }
            const interval = setInterval(() => {
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0){
                    setMonths(months => months - 1);
                    setDays(31);
                }
                if (hours === 0 && minutes === 0 && seconds === 0){
                    setDays(days => days - 1);
                    setHours(24);
                }
                if (minutes === 0 && seconds === 0){
                    setHours(hours => hours - 1);
                    setMinutes(60);
                }
                if (seconds === 0){
                    setMinutes(minutes => minutes - 1);
                    setSeconds(60);
                }
                setSeconds(seconds => seconds - 1);
              }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds]);

    useEffect(() => {
        let reservationdetails;
        let storedfirstname = localStorage.getItem('firstname');

        if (reservationDetails && !storedfirstname){
            reservationdetails = reservationDetails.split("_");
            localStorage.setItem('firstname', reservationdetails[3]);
            localStorage.setItem('lastname', reservationdetails[4]);
            localStorage.setItem('emailaddress', reservationdetails[5]);
            localStorage.setItem('phonenumber', reservationdetails[6]);
            localStorage.setItem('date', reservationdetails[0]);
            localStorage.setItem('time', reservationdetails[1]);
            localStorage.setItem('numberofpersons', reservationdetails[2]);
        }

        if (months < 0 || days < 0 || hours < 0 || minutes < 0 || seconds < 0){
            setReservationDetails(null);
            localStorage.clear();
            setDays("00");
            setMonths("00");
            setHours("00");
            setMinutes("00");
            setSeconds("00");
            return;
        }

        const timer = setTimeout(() => {
            if (localStorage.getItem('date') === null){
                alert("You don't have a reservation with us");
            };
          }, 1000);
          return () => clearTimeout(timer);

    }, [months, days, hours, minutes, seconds]);



    return (
        <>
            <section className='relative bottom-0 z-30 flex flex-col items-center w-full h-fit min-h-screen'>
                <header className='w-full normal:w-[1349px] h-fit flex flex-col pb-[100px]' style={{display : (showNavigation) ? 'none' : 'flex'}}>
                    <Header/>
                </header>
                <Navigation/>
                <img className='absolute top-0 object-cover w-full h-full' src={reservationbg} alt='image of a dinning table' aria-hidden='true'/>
                <div className='absolute top-0 w-full h-full bg-darkgreen/80'></div>
                <main className='z-10 mt-[10px] mb-[50px] px-[50px] w-full max-w-[700px] h-fit flex flex-col items-center' style={{display : (showNavigation) ? 'none' : 'flex'}}> 
                    <h1 className="text-white font-rufina font-bold text-xxxxxxl text-center tracking-[.25em]">COMING SOON</h1>  
                    <hr className="text-white border-dashed border w-full mt-[20px]"></hr>
                    <div className="w-full h-fit flex flex-col phone:flex-row justify-between items-center mt-[20px] mb-[70px] text-center">
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">{months}</p>
                            <p className="font-lato font-normal text-base">Month</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">{days}</p>
                            <p className="font-lato font-normal text-base">Days</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">{hours}</p>
                            <p className="font-lato font-normal text-base">Hours</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">{minutes}</p>
                            <p className="font-lato font-normal text-base">Minutes</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">{seconds}</p>
                            <p className="font-lato font-normal text-base">Second</p>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col minTablet:flex-row justify-between text-white font-rufina font-bold text-xxl">
                        <motion.button className="h-fit min-h-[60px] w-full max-w-[180px] hover:bg-darkwhite px-[10px] border border-white" whileHover={{scale: 1.05}}>
                            <Link to='/menu'>View Menu</Link>
                        </motion.button>
                        <motion.button className="h-fit min-h-[60px] w-full max-w-[300px] hover:bg-darkwhite px-[10px] border border-white mt-[30px] minTablet:mt-0" whileHover={{scale: 1.05}}
                        onClick={() => {
                            localStorage.clear();
                            setReservationDetails(null);
                            setDays("00");
                            setMonths("00");
                            setHours("00");
                            setMinutes("00");
                            setSeconds("00");
                        }}>
                            Cancel Reservation
                        </motion.button>
                    </div>
                </main>
            </section>
        </>
    )
}

export const CountdownContext = createContext();