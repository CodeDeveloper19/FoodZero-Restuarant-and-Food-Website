import React, { useContext, useEffect, useRef } from 'react';
import HeaderImage from '../../images/Contactpage/header_image.png';
import BlackOrange from '../../images/SeasoningsAndFruits/OrangeBlack.svg';
import MintBlack from '../../images/SeasoningsAndFruits/MintBlack.svg';
import DiningImage from '../../images/Contactpage/dining_image.png';
import RestuarantImage from '../../images/Contactpage/restuarant_image.png';
import Header from '../header';
import Footer from '../footer';
import Navigation from '../Homepage/navigation';
import { NavigationContext } from '../../App';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Setdatehook } from '../setdatehook';

export default function Contactpage(){
    const [[showNavigation], [], [reservationDetails, setReservationDetails]] = useContext(NavigationContext);
    const navigate = useNavigate();
    const time = useRef(null);
    const numberOfPersons = useRef(null);
    const date = useRef(null);
    const telephone = useRef(null);
    const email = useRef(null)
    const firstName = useRef(null);
    const lastName = useRef(null);
    const params = useParams();
    Setdatehook(date);

    useEffect(() => {
        if (params.reservationdetails){
            let reservationdetails = params.reservationdetails.split("_");
            date.current.value = reservationdetails[0];
            time.current.value = reservationdetails[1];
            numberOfPersons.current.value = reservationdetails[2];
        }
    }, []);


    useEffect(() => {
        let storedfirstname = localStorage.getItem('firstname');

        if (reservationDetails && !storedfirstname){
            navigate("/reservation");
        } else if (reservationDetails && storedfirstname){
            alert("You already have a reservation with us")
        }
    }, [reservationDetails])

    const checkIfComplete = (e) => {
        if (reservationDetails === undefined){
            e.preventDefault();
        }
        if (time.current.value && date.current.value && numberOfPersons.current.value && firstName.current.value && lastName.current.value && email.current.value && telephone.current.value){
            setReservationDetails(`${date.current.value}_${time.current.value}_${numberOfPersons.current.value}_${firstName.current.value}_${lastName.current.value}_${email.current.value}_${telephone.current.value}`);
        }
    }

    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display : (showNavigation) ? 'none' : 'flex'}}>
            <Header/>
            <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>
            <div className='relative top-0 bottom-0 my-auto flex flex-col justify-between items-center z-10 pt-[50px] minTablet:pt-[150px] pb-[50px] px-[60px] h-fit w-full overflow-hidden'>
                <motion.div animate={{ x: 1060 }} initial={{ left: -1060 }} transition={{ delay: 1, type: 'spring'}} 
                className='relative flex flex-col self-start w-full h-fit minLaptop:w-2/5'>
                    <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit w-full minLaptop:w-[400px]'>Get in Touch</h1>
                    <p className='font-bold text-white font-rufina text-xxl'>The freshest ingredients for you every day</p>
                </motion.div>
                <motion.div animate={{ x: -570 }} initial={{ right: -570 }} transition={{ delay: 1, type: 'spring'}} 
                className='relative flex flex-col h-fit w-full smartPhone:w-[250px] minLaptop:w-2/5 self-end h-fit mt-[150px] phone:mt-[70px]'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <h2 className='font-bold text-white font-rufina text-xxl'>Open Time</h2>
                        <p className='text-base font-normal text-white font-lato'>Sunday - Friday</p>
                    </div>
                    <hr className='text-white border-1 border-dashed w-full my-[20px]'/>
                    <div className='flex flex-row justify-between w-full h-auto text-base'>
                        <div className='h-full w-[20%]'>
                            <h3 className='font-normal text-white font-lato'>Brunch</h3>
                            <p className='font-normal text-white font-lato'>11:00–12:00</p>
                        </div>
                        <div className='h-full w-[20%]'>
                            <h3 className='font-normal text-white font-lato'>Lunch</h3>
                            <p className='font-normal text-white font-lato'>13:00–17:00</p>
                        </div>
                        <div className='h-full w-[20%]'>
                            <h3 className='font-normal text-white font-lato'>Dinner</h3>
                            <p className='font-normal text-white font-lato'>18:00–20:00</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
        <Navigation/>
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[100px]' style={{display : (showNavigation) ? 'none' : 'flex'}}>
            <section className='relative w-full h-fit px-[60px] pt-[100px]'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: .5 }} viewport={{ once: true }} 
                className='absolute w-[80px] smartPhone:w-[120px] phone:w-[170px] tablet:w-[220px] h-[75px] smartPhone:h-[110px] phone:h-[150px] tablet:h-[200px] object-cover top-[78px] smartPhone:top-[65px] phone:top-[40px] left-[75%] smartPhone:left-[61%] minTablet:left-[40%]' src={BlackOrange} alt='illustration of a orange in black' aria-hidden='true'/>
                <div className='relative z-20 flex flex-col justify-between w-full h-fit minTablet:flex-row'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} 
                    className='w-full smartPhone:w-[80%] minTablet:w-[50%] tablet:w-[45%] h-[180px] smartPhone:h-[200px] phone:h-[300px] tablet:h-[350px] minLaptop:h-[450px] object-cover' src={DiningImage} alt='image of a dining table' aria-hidden='true'/>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} 
                    className='h-fit w-[80%] smartPhone:w-[60%] minTablet:w-[45%] flex justify-center self-end mb-[50px] mt-[100px] minTablet:mt-0'>
                        <p className='font-rufina font-bold text-xxl w-[300px] h-fit'>We can be contacted via email  
                        <a className='text-lightgreen' href="mailto: info@foodzero.com"> info@foodzero.com</a> or telephone on 
                        <a className='text-lightgreen' href="tel:+86852346000"> +86 852 346 000</a></p>
                    </motion.div>
                </div>
            </section>
            <section className='h-fit w-full flex flex-col minTablet:flex-row justify-between items-center px-[60px] mt-[100px] minTablet:mt-[150px] mb-[150px]'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }}
                className='h-full w-full smartPhone:w-[80%] minTablet:w-[45%] tablet:w-[35%] flex flex-col mb-[100px] minTablet:mb-0 self-start minTablet:self-center'>
                    <p className='font-bold font-rufina text-xxl'>We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                    <motion.button whileHover={{ scale: 1.05 }}
                    className='w-[200px] max-w-full h-[60px] border-2 font-rufina font-bold text-xxl mt-[50px] hover:bg-lightwhite'>View in maps</motion.button>
                </motion.div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} 
                className='w-[90%] phone:w-[70%] minTablet:w-[50%] tablet:w-[45%] h-[400px] phone:h-[500px] tablet:h-[650px] object-cover' src={RestuarantImage} alt='image of the restuarant' aria-hidden='true'/>
            </section>       
            <section id='reservation' className='relative h-fit w-full px-[60px] pt-[150px] pb-[100px] bg-lightwhite flex flex-col items-center'>
                <img className='absolute w-[222px] minLaptop:w-[300px] h-[150px] minLaptop:h-[203px] object-cover top-[100px] min:Laptop:top-[60px] left-0 phone:left-[60px] tablet:left-[100px] minLaptop:left-[270px]' src={MintBlack} alt='illustration of a mint leaf in black' aria-hidden='true'/>
                <div className='h-fit'>
                    <h2 className='font-bold font-rufina text-xxxxxxxl'>Make a Reservation</h2>
                    <p className='text-base font-normal font-lato'>Get in touch with restaurant</p>
                </div>
                <form className='w-full h-fit flex flex-col items-center mt-[100px]' onSubmit={(e) => {e.preventDefault()}}>
                    <div className='flex flex-col justify-between w-full text-base font-normal h-fit font-lato phone:flex-row'>
                        <input ref={firstName} type='text' className='w-full phone:w-[48%] h-[50px] outline-0 border px-[20px] bg-lightwhite' placeholder='First Name' aria-label='reservation first name' required>
                        </input>                    
                        <input ref={lastName} type='text' className='w-full phone:w-[48%] h-[50px] outline-0 border px-[20px] bg-lightwhite mt-[30px] phone:mt-0' placeholder='Last Name' aria-label='reservation last name' required>
                        </input>
                    </div>
                    <input ref={email} type='email' className='w-full h-[50px] outline-0 border px-[20px] font-lato font-normal text-base mt-[30px] bg-lightwhite' placeholder='Email' aria-label='reservation email' required>
                    </input>
                    <input ref={telephone} type='tel' className='w-full h-[50px] outline-0 border px-[20px] font-lato font-normal text-base mt-[30px] bg-lightwhite' placeholder='Phone Number' aria-label='reservation phone number' required>
                    </input>
                    <div className='w-full h-fit font-lato font-normal text-base flex flex-col phone:flex-row justify-between mt-[30px]'>
                        <div className='w-full phone:w-[48%] h-[50px] outline-0 border px-[20px] bg-lightwhite'>
                            <input ref={date} type='date' className='w-full h-full bg-lightwhite outline-0' placeholder='First Name' aria-label='reservation first name' required>
                            </input> 
                        </div>       
                        <div className='w-full phone:w-[48%] h-[50px] outline-0 border px-[20px] bg-lightwhite mt-[30px] phone:mt-0'>
                            <select ref={time} className='w-full h-full text-base font-normal outline-none bg-lightwhite font-lato' aria-label='reservation time' required>
                                <option value="">Time for Reservation</option>
                                <option value="08:00am">08:00am</option>
                                <option value="09:00am">09:00am</option>
                                <option value="10:00am">10:00am</option>
                                <option value="11:00am">11:00am</option>
                                <option value="12:00pm">12:00pm</option>
                                <option value="01:00pm">01:00pm</option>
                                <option value="02:00pm">02:00pm</option>
                                <option value="03:00pm">03:00pm</option>
                                <option value="04:00pm">04:00pm</option>
                                <option value="05:00pm">05:00pm</option>
                                <option value="06:00pm">06:00pm</option>
                                <option value="07:00pm">07:00pm</option>
                                <option value="08:00pm">08:00pm</option>
                                <option value="09:00pm">09:00pm</option>
                                <option value="10:00pm">10:00pm</option>
                                <option value="11:00pm">11:00pm</option>
                            </select>
                        </div>            
                    </div>
                    <div className='w-full h-[50px] mt-[30px] mb-[70px] border bg-lightwhite px-[20px]'>
                        <select ref={numberOfPersons} className='w-full h-full text-base font-normal outline-none bg-lightwhite font-lato' aria-label='number of persons' required>
                            <option value="">Number Of Persons</option>
                            <option value="1 person">1 person</option>
                            <option value="2 persons">2 persons</option>
                            <option value="3 persons">3 persons</option>
                            <option value="4 persons">4 persons</option>
                            <option value="5 persons">5 persons</option>
                        </select>
                    </div>
                    <Link
                    onClick={(e) => checkIfComplete(e)}>
                        <motion.button whileHover={{ scale: 1.2 }}
                        className='bg-darkgreen hover:bg-green w-[200px] h-[50px] text-white' type='submit'>BOOK NOW</motion.button>  
                    </Link>
                </form>
            </section>     
        </main>
        <Footer/>
        </>
    )
}