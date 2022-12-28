import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Setdatehook } from './setdatehook';

export default function Reservation(){
    const time = useRef(null);
    const numberOfPersons = useRef(null);
    const date = useRef(null);
    const navigate = useNavigate();
    Setdatehook(date);

    const [customURL, setCustomURL] = useState(undefined);

    useEffect(() => {
        if (customURL){
            navigate(`/contact/${customURL}`);
        }
    }, [customURL]);

    const checkIfComplete = (e) => {
        if (customURL === undefined){
            e.preventDefault();
        }
        checkDateOnline();
    }

    const validateDate = (dd, h) => {
        let day =  parseInt(date.current.value.split("-")[2]);
        let hour = parseInt(time.current.value.split(":")[0]);
        let error = undefined;
        if (day === dd && hour <= h){
            error = true;
        };
        if ((time.current.value && date.current.value && numberOfPersons.current.value) && !error){
            setCustomURL(`${date.current.value}_${time.current.value}_${numberOfPersons.current.value}`);
        } else if ((time.current.value && date.current.value && numberOfPersons.current.value) && error){
            alert("The time selected has expired, please change reservation time");
        };
    }

    const checkDateOnline = () => {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6a3b77d7f8984eb4ae1518bc4c8b5e82&ip=192.99.34.64')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.time_zone.current_time.split(" ");
            let dividedDate = currentDate[0].split("-");
            let dd = parseInt(dividedDate[2]);

            let dividedTime = currentDate[1].split(".")[0];
            let Time = dividedTime.split(":");
            let h = parseInt(Time[0]);
    
            if (dd < 10) {
            dd = '0' + dd;
            };
            validateDate(dd, h)
        })
        .catch(error => {
          console.log(error.message);
        });
    }

    return(
        <>
            <section id='reservation' className='flex flex-col items-center w-full h-fit py-[150px] px-[60px] bg-lightwhite'>
                <h2 className='font-rufina font-bold text-xxxxxxxl text-center'>Make a Reservation</h2>
                <p className='font-lato font-normal text-base'>Get in touch with restaurant</p>
                <form className='h-fit w-full flex flex-col items-center' onSubmit={(e) => {e.preventDefault()}}>
                    <div className='mt-[70px] mb-[100px] w-full h-fit flex flex-col tablet:flex-row justify-between'>
                        <div className='h-[50px] w-full tablet:w-1/4 border bg-lightwhite px-[20px] font-lato font-normal text-base'>
                            <input ref={date} className='w-full h-full bg-lightwhite outline-0' type='date' aria-label='reservation date' required></input>
                        </div>
                        <div className='h-[50px] w-full tablet:w-1/4 border bg-lightwhite px-[20px] my-[50px] tablet:my-0'>
                            <select ref={time} className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='reservation time' required>
                                <option value="">Time for Reservation</option>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                                <option value="23:00">23:00</option>
                            </select>
                        </div>
                        <div className='h-[50px] w-full tablet:w-1/4 border bg-lightwhite px-[20px]'>
                            <select ref={numberOfPersons} className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='number of persons' required>
                                <option value="">Number Of Persons</option>
                                <option value="1 person">1 person</option>
                                <option value="2 persons">2 persons</option>
                                <option value="3 persons">3 persons</option>
                                <option value="4 persons">4 persons</option>
                                <option value="5 persons">5 persons</option>
                            </select>
                        </div>
                    </div>
                    <Link
                    onClick={(e) => checkIfComplete(e)}>
                        <motion.button whileHover={{ scale: 1.2 }}
                        className='bg-darkgreen hover:bg-green w-[200px] h-[50px] text-white' type='submit'>BOOK NOW</motion.button>   
                    </Link>  
                </form>
            </section>
        </>
    )
}