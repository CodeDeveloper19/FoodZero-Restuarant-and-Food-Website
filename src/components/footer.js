import React, { useContext } from 'react';
import { NavigationContext } from '../App';
import twitter from '../images/Icons/Icon_twitter.svg';
import instagram from '../images/Icons/Icon_instagram.svg';
import facebook from '../images/Icons/Icon_facebook.svg';
import youtube from '../images/Icons/Icon_youtube.svg';
import { motion } from 'framer-motion';

export default function Footer(){
    const [[showNavigation]] = useContext(NavigationContext);

    return(
        <>
        <footer className='w-full h-fit bg-darkgreen flex justify-center' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <div className='w-full normal:w-[1349px] h-fit flex flex-col' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                    <div className='w-full h-fit min-h-[280px] py-[50px] tablet:py-0 px-[60px] flex flex-col tablet:flex-row justify-between items-start tablet:items-center border-b border-dashed border-b-white'>
                        <h2 className='text-white font-rufina font-bold text-xxxxxl w-[100px]'>Food Zero</h2>
                        <div className='flex flex-col h-fit w-fit mt-[50px] tablet:mt-0'>
                            <h3 className='text-white font-rufina font-bold text-xxl'>Contact</h3>
                            <p className='text-white font-lato font-normal text-xxxsm mb-[20px] mt-[35px] w-[100px]'>
                                +1+86 852 346 000
                                info@foodzero.com
                            </p>
                            <p className='text-white font-lato font-normal text-xxxsm w-[110px]'>1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                        </div>
                        <div className='flex flex-col w-fit tablet:w-[500px] h-fit min-h-[145px] mt-[30px] tablet:mt-0'>
                            <h3 className='text-white font-rufina font-bold text-xxl'>Never Miss a Recipe</h3>
                            <form className='flex flex-col minTablet:flex-row justify-between w-full h-fit mt-[35px] mb-[10px]' onSubmit={(e) => {e.preventDefault()}}>
                                <input className='w-full minTablet:w-[55%] bg-darkgreen border border-white outline-none text-white font-lato py-[10px] px-[20px]' type='email' placeholder='Email Address' required></input>
                                <motion.button whileHover={{scale: 1.05}}
                                className='w-full minTablet:w-[40%] bg-green hover:bg-lightgreen text-white font-rufina text-xxl mt-[20px] minTablet:mt-0 px-[10px]' type='submit'>
                                    Subscribe
                                </motion.button>
                            </form>
                            <p className='text-white font-normal font-lato text-sm'>Join our subscribers and get best recipe delivered each week!</p>
                        </div>
                    </div>
                    <div className='w-full h-fit min-h-[100px] px-[60px] flex flex-col minTablet:flex-row justify-between pt-[30px] pb-[30px] minTablet:pb-0'>
                        <p className='font-lato font-normal text-base text-white'>© 2022 Zero Inc. All rights Reserved</p>
                        <p className='font-lato font-normal text-base text-white'>Developed with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a className="text-[#007bff]" target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/okoli-akachukwu-6b321b178/'>CodeDeveloper19</a></p>
                        <div className='flex flex-row justify-between h-[20px] w-[70%] microPhone:w-[120px] mr-[50px] mt-[20px] minTablet:mt-0'>
                            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={instagram} alt="instagram logo"/></a>
                            <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={twitter} alt="twitter logo"/></a>
                            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={facebook} alt="facebook logo"/></a>
                            <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={youtube} alt="youtube logo"/></a>
                        </div>
                    </div>
                </div>
        </footer>
        </>
    )
}