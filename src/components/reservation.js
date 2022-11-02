import React from 'react';

export default function Reservation(){
    return(
        <>
            <section id='reservation' className='flex flex-col items-center w-full h-fit py-[150px] px-[60px] bg-lightwhite'>
                <h2 className='font-rufina font-bold text-xxxxxxxl'>Make a Reservation</h2>
                <p className='font-lato font-normal text-base'>Get in touch with restaurant</p>
                <form className='h-fit w-full flex flex-col items-center' onSubmit={(e) => {e.preventDefault()}}>
                    <div className='mt-[70px] mb-[100px] w-full h-[50px] flex flex-row justify-between'>
                        <input className='h-full w-1/4 border bg-lightwhite px-[20px] font-lato font-normal text-base' type='date' aria-label='reservation date' required></input>
                        <div className='h-full w-1/4 border bg-lightwhite px-[20px]'>
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
                        <div className='h-full w-1/4 border bg-lightwhite px-[20px]'>
                            <select className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='number of persons' required>
                                <option value="">Number Of Persons</option>
                                <option value="1 person">1 person</option>
                                <option value="2 persons">2 persons</option>
                                <option value="3 persons">3 persons</option>
                                <option value="4 persons">4 persons</option>
                                <option value="5 persons">5 persons</option>
                            </select>
                        </div>
                    </div> 
                    <button className='bg-darkgreen hover:bg-green w-[200px] h-[50px] text-white' type='submit'>BOOK NOW</button>     
                </form>
            </section>
        </>
    )
}