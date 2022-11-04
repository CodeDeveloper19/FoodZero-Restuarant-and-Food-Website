import React from 'react';
import HeaderImage from '../../images/Contactpage/header_image.png';
import BlackOrange from '../../images/SeasoningsAndFruits/OrangeBlack.svg';
import MintBlack from '../../images/SeasoningsAndFruits/MintBlack.svg';
import DiningImage from '../../images/Contactpage/dining_image.png';
import RestuarantImage from '../../images/Contactpage/restuarant_image.png';
import Header from '../header';
import Footer from '../footer';
import Navigation from '../Homepage/navigation';

export default function Contactpage(){
    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
            <Header/>
            <img className='absolute w-full h-full object-cover' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>
            <div className='absolute top-0 bottom-0 my-auto flex flex-row justify-between items-center z-10 px-[60px] h-fit min-h-[450px] w-full'>
                <div className='flex flex-col h-fit w-2/5'>
                    <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit w-[400px]'>Get in Touch</h1>
                    <p className='text-white font-rufina font-bold text-xxl'>The freshest ingredients for you every day</p>
                </div>
                <div className='flex flex-col h-fit w-2/5 self-end h-fit'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className='font-rufina text-white font-bold text-xxl'>Open Time</h2>
                        <p className='font-lato text-white font-normal text-base'>Sunday - Friday</p>
                    </div>
                    <hr className='text-white border-1 border-dashed w-full my-[20px]'/>
                    <div className='flex flex-row justify-between h-auto w-full'>
                        <div className='h-full w-[15%]'>
                            <h3 className='font-lato font-normal text-white text-base'>Brunch</h3>
                            <p className='font-lato font-normal text-white text-base'>11:00–12:00</p>
                        </div>
                        <div className='h-full w-[15%]'>
                            <h3 className='font-lato font-normal text-white text-base'>Lunch</h3>
                            <p className='font-lato font-normal text-white text-base'>13:00–17:00</p>
                        </div>
                        <div className='h-full w-[15%]'>
                            <h3 className='font-lato font-normal text-white text-base'>Dinner</h3>
                            <p className='font-lato font-normal text-white text-base'>18:00–20:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Navigation/>
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[100px]'>
            <section className='relative w-full h-fit px-[60px] pt-[100px]'>
                <img className='absolute w-[220px] h-[200px] object-cover top-[40px] left-[40%]' src={BlackOrange} alt='illustration of a orange in black' aria-hidden='true'/>
                <div className='relative w-full h-fit z-20 flex flex-row justify-between'>
                    <img className='w-[45%] h-[450px] object-cover' src={DiningImage} alt='image of a dining table' aria-hidden='true'/>
                    <div className='h-fit w-[45%] flex justify-center self-end mb-[50px]'>
                        <p className='font-rufina font-bold text-xxl w-[300px] h-fit'>We can be contacted via email  
                        <a className='text-lightgreen' href="mailto: info@foodzero.com"> info@foodzero.com</a> or telephone on 
                        <a className='text-lightgreen' href="tel:+86852346000"> +86 852 346 000</a></p>
                    </div>
                </div>
            </section>
            <section className='h-fit w-full flex flex-row justify-between items-center px-[60px] my-[150px]'>
                <div className='h-full w-[45%] flex flex-col'>
                    <p className='font-rufina font-bold text-xxl'>We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                    <button className='w-[200px] h-[60px] border-2 font-rufina font-bold text-xxl mt-[50px] hover:bg-lightwhite'>View in maps</button>
                </div>
                <img className='w-[45%] h-[650px] object-cover' src={RestuarantImage} alt='image of the restuarant' aria-hidden='true'/>
            </section>       
            <section id='reservation' className='relative h-fit w-full px-[60px] pt-[150px] pb-[100px] bg-lightwhite flex flex-col items-center'>
                <img className='absolute w-[300px] h-[203px] object-cover top-[60px] left-[270px]' src={MintBlack} alt='illustration of a mint leaf in black' aria-hidden='true'/>
                <div className='h-fit'>
                    <h2 className='font-rufina font-bold text-xxxxxxxl'>Make a Reservation</h2>
                    <p className='font-lato font-normal text-base'>Get in touch with restaurant</p>
                </div>
                <form className='w-full h-fit flex flex-col items-center mt-[100px]' onSubmit={(e) => {e.preventDefault()}}>
                    <div className='w-full h-[50px] font-lato font-normal text-base flex flex-row justify-between'>
                        <input type='text' className='w-[48%] h-full outline-0 border px-[20px] bg-lightwhite' placeholder='First Name' aria-label='reservation first name' required>
                        </input>                    
                        <input type='text' className='w-[48%] h-full outline-0 border px-[20px] bg-lightwhite' placeholder='Last Name' aria-label='reservation last name' required>
                        </input>
                    </div>
                    <input type='email' className='w-full h-[50px] outline-0 border px-[20px] font-lato font-normal text-base mt-[30px] bg-lightwhite' placeholder='Email' aria-label='reservation email' required>
                    </input>
                    <input type='tel' className='w-full h-[50px] outline-0 border px-[20px] font-lato font-normal text-base mt-[30px] bg-lightwhite' placeholder='Phone Number' aria-label='reservation phone number' required>
                    </input>
                    <div className='w-full h-[50px] font-lato font-normal text-base flex flex-row justify-between mt-[30px]'>
                        <input type='date' className='w-[48%] h-full outline-0 border px-[20px] bg-lightwhite' placeholder='First Name' aria-label='reservation first name' required>
                        </input>        
                        <div className='w-[48%] h-full outline-0 border px-[20px] bg-lightwhite'>
                            <select className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='reservation time' required>
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
                        <select className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='number of persons' required>
                            <option value="">Number Of Persons</option>
                            <option value="1 person">1 person</option>
                            <option value="2 persons">2 persons</option>
                            <option value="3 persons">3 persons</option>
                            <option value="4 persons">4 persons</option>
                            <option value="5 persons">5 persons</option>
                        </select>
                    </div>
                    <button className='bg-darkgreen hover:bg-green w-[200px] h-[50px] text-white' type='submit'>BOOK NOW</button>   
                </form>
            </section>     
        </main>
        <Footer/>
        </>
    )
}