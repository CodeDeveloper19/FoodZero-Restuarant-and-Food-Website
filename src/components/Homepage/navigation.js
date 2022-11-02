import React, {useContext, useState} from 'react';
import { NavigationContext } from '../../App';
import navigationbg from '../../images/navigation_background.png'
import xicon from '../../images/NaviClose.svg';
import twitter from '../../images/Icons/Icon_twitter.svg';
import instagram from '../../images/Icons/Icon_instagram.svg';
import facebook from '../../images/Icons/Icon_facebook.svg';
import youtube from '../../images/Icons/Icon_youtube.svg';

export default function Navigation(){
    const [[showNavigation, setShowNavigation]] = useContext(NavigationContext);

    const [showBlog, setShowBlog] = useState(false);

    return(
        <>
            <section className='absolute h-screen w-full flex justify-center items-center bottom-0 z-30' style={{display : (showNavigation) ? 'flex' : 'none'}}>
                <img className='object-cover absolute w-full h-full' src={navigationbg} alt='image of a flower' aria-hidden='true'/>
                <div className='absolute w-full h-full bg-darkgreen/80'></div>
                <button className='absolute w-[50px] h-[50px] top-[20px] left-[20px]' aria-label='close navigation button' onClick={() => setShowNavigation(false)}>
                    <img className='w-full h-full' src={xicon} alt='image of an x' aria-hidden='true'/>
                </button>
                <div className='z-10 h-fit w-[1000px] flex flex-row justify-between mx-[100px]'>
                    <nav className='w-2/5 h-fit'>
                        <ul className='list-disc text-white font-rufina font-bold text-xxxxl w-full uppercase h-fit flex flex-col justify-between'>
                            <li className='hover:text-lightgreen'><a href="/">Home</a></li>
                            <li className='hover:text-lightgreen mt-[15px]'><a href="/menu">Menu</a></li>
                            <li className='hover:text-lightgreen mt-[15px]'><button onClick={() => (showBlog) ? setShowBlog(false) : setShowBlog(true)}>BLOGS</button></li>
                            <div className='h-[65px] flex flex-col' style={{display: (showBlog) ? 'flex' : 'none', height: (showBlog) ? 'fit-content' : '0px'}}>
                                <p className='hover:text-lightgreen font-normal text-base'><a href="/blog/1_column">1 Column</a></p>
                                <p className='hover:text-lightgreen font-normal text-base'><a href="/blog/2_column">2 Column</a></p>
                                <p className='hover:text-lightgreen font-normal text-base'><a href="/blog/sidebar_post">Sidebar Post</a></p>
                            </div>
                            <li className='hover:text-lightgreen mt-[15px]'><a href="/about">About</a></li>
                            <li className='hover:text-lightgreen mt-[15px]'><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className='w-1/5 h-fit min-h-[180px] self-end flex flex-col justify-between'>
                        <div className='w-full h-fit'>
                            <h2 className='font-rufina font-bold text-xxl text-white'>Contact</h2>
                            <hr className='text-white border-dashed w-full'/>
                        </div>
                        <p className='font-lato text-white font-normal text-xxxsm w-2/5'>+86 852 346 000 info@foodzero.com</p>
                        <p className='font-lato text-white font-normal text-xxxsm w-3/5'>1959 Sepulveda Blvd. Culver City, CA, 90230</p>
                        <div className='flex flex-row justify-between h-[20px] w-[120px]'>
                            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={instagram} alt="instagram logo"/></a>
                            <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={twitter} alt="twitter logo"/></a>
                            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={facebook} alt="facebook logo"/></a>
                            <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer"><img className='w-[20px] h-full' src={youtube} alt="youtube logo"/></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}