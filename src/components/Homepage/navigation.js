import React, {useContext } from 'react';
import { Link } from "react-router-dom";
import { NavigationContext } from '../../App';
import navigationbg from '../../images/navigation_background.png'
import xicon from '../../images/NaviClose.svg';
import twitter from '../../images/Icons/Icon_twitter.svg';
import instagram from '../../images/Icons/Icon_instagram.svg';
import facebook from '../../images/Icons/Icon_facebook.svg';
import youtube from '../../images/Icons/Icon_youtube.svg';
import { motion } from 'framer-motion';

export default function Navigation(){
    const [[showNavigation, setShowNavigation]] = useContext(NavigationContext);

    return(
        <>
            <section className='relative bottom-0 z-30 flex items-center justify-center w-full h-screen' style={{display : (showNavigation) ? 'flex' : 'none'}}>
                <img className='absolute top-0 object-cover w-full h-full' src={navigationbg} alt='image of a flower' aria-hidden='true'/>
                <div className='absolute top-0 w-full h-full bg-darkgreen/80'></div>
                <button className='absolute mb-[100px] w-[50px] h-[50px] top-[20px] left-[20px]' aria-label='close navigation button' onClick={() => setShowNavigation(false)}>
                    <img className='w-full h-full' src={xicon} alt='image of an x' aria-hidden='true'/>
                </button>
                <div className='z-10 h-fit w-full phone:w-[1000px] flex flex-col phone:flex-row justify-between px-[100px] my-[100px]'>
                    <nav className='w-full phone:w-2/5 h-fit mb-[100px] phone:mb-0'>
                        <ul className='flex flex-col justify-between w-full font-bold text-white uppercase list-disc font-rufina text-xxxxl h-fit'>
                            <motion.li whileHover={{ scale: 1.2, originX: 0}} className='hover:text-lightgreen' onClick={() => setShowNavigation(false)}><Link to='/'>Home</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.2, originX: 0}} className='hover:text-lightgreen mt-[15px]' onClick={() => setShowNavigation(false)}><Link to='/menu'>Menu</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.2, originX: 0}} className='hover:text-lightgreen mt-[15px]' onClick={() => setShowNavigation(false)}><Link to='/blog'>Blogs</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.2, originX: 0}} className='hover:text-lightgreen mt-[15px]' onClick={() => setShowNavigation(false)}><Link to='/about'>About</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.2, originX: 0}} className='hover:text-lightgreen mt-[15px]' onClick={() => setShowNavigation(false)}><Link to='/contact'>Contact</Link></motion.li>
                        </ul>
                    </nav>
                    <div className='w-full phone:w-1/5 h-fit min-h-[180px] self-end flex flex-col justify-between'>
                        <div className='w-full h-fit'>
                            <h2 className='font-bold text-white font-rufina text-xxl'>Contact</h2>
                            <hr className='w-full text-white border-dashed'/>
                        </div>
                        <p className='w-full font-normal text-white font-lato text-xxxsm tablet:w-2/5'>+86 852 346 000 info@foodzero.com</p>
                        <p className='w-full font-normal text-white font-lato text-xxxsm tablet:w-3/5'>1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                        <div className='flex flex-col microPhone:flex-row justify-between h-[20px] w-full microPhone:w-[120px]'>
                            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={instagram} alt="instagram logo"/></a>
                            <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer"><img className='mt-[10px] microPhone:mt-0 w-[20px] h-full' src={twitter} alt="twitter logo"/></a>
                            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><img className='mt-[10px] microPhone:mt-0 w-[20px] h-full' src={facebook} alt="facebook logo"/></a>
                            <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer"><img className='mt-[10px] microPhone:mt-0 w-[20px] h-full' src={youtube} alt="youtube logo"/></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}