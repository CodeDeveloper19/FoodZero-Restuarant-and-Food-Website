import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../App";
import Header from "../header";
import Navigation from "../Homepage/navigation";
import reservationbg from '../../images/reservationbg.png';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Countdown } from "../countdownhook";

export default function Mainreservation(){
    const [[showNavigation], [], [reservationDetails]] = useContext(NavigationContext);

    // const dummy = Countdown(`${}_${time}`);

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
    }, []);



    return (
        <>
            <section className='relative bottom-0 z-30 flex flex-col items-center w-full h-screen'>
                <header className='w-full normal:w-[1349px] h-fit flex flex-col pb-[100px]' style={{display : (showNavigation) ? 'none' : 'flex'}}>
                    <Header/>
                </header>
                <Navigation/>
                <img className='absolute top-0 object-cover w-full h-full' src={reservationbg} alt='image of a dinning table' aria-hidden='true'/>
                <div className='absolute top-0 w-full h-full bg-darkgreen/80'></div>
                <main className='z-10 mt-[10px] px-[50px] w-full max-w-[700px] h-fit flex flex-col items-center' style={{display : (showNavigation) ? 'none' : 'flex'}}> 
                    <h1 className="text-white font-rufina font-bold text-xxxxxxl text-center tracking-[.25em]">COMING SOON</h1>  
                    <hr className="text-white border-dashed border w-full mt-[20px]"></hr>
                    <div className="w-full h-fit flex flex-col phone:flex-row justify-between items-center mt-[20px] mb-[70px]">
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">02</p>
                            <p className="font-lato font-normal text-base text-center">Month</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">02</p>
                            <p className="font-lato font-normal text-base text-center">Days</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">02</p>
                            <p className="font-lato font-normal text-base text-center">Hours</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">02</p>
                            <p className="font-lato font-normal text-base text-center">Minutes</p>
                        </div>
                        <div className="w-fit h-fit text-white">
                            <p className="font-bold font-rufina text-xxxxxxl">02</p>
                            <p className="font-lato font-normal text-base text-center">Second</p>
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col minTablet:flex-row justify-between text-white font-rufina font-bold text-xxl">
                        <motion.button className="h-fit min-h-[60px] w-full max-w-[180px] hover:bg-darkwhite px-[10px] border border-white" whileHover={{scale: 1.05}}>
                            <Link to='/menu'>View Menu</Link>
                        </motion.button>
                        <motion.button className="h-fit min-h-[60px] w-full max-w-[300px] hover:bg-darkwhite px-[10px] border border-white mt-[30px] minTablet:mt-0" whileHover={{scale: 1.05}}
                        onClick={() => {
                            localStorage.clear();
                        }}>
                            Cancel Reservation
                        </motion.button>
                    </div>
                </main>
            </section>
        </>
    )
}