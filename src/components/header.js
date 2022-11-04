import React, { useContext } from 'react';
import { NavigationContext } from '../App';
import logo from '../images/Logo.svg';
import navbutton from '../images/NaviOpen.svg';

export default function Header(){
    const [[showNavigation, setShowNavigation]] = useContext(NavigationContext);

    return(
        <>
            <div className='w-full h-fit minTablet:h-[90px] pl-[30px] pr-[60px] pt-[30px] flex flex-col minTablet:flex-row justify-between z-10' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <div className='flex flex-row items-center h-full w-fit'>
                    <img className='h-full w-[200px] hidden smartPhone:flex' src={logo} alt="logo of the FoodZero business" aria-hidden='true'/>
                    <button className='w-[50px] h-[50px] ml-[20px] smartPhone:ml-[10px] minTablet:ml-0' onClick={
                        () => {
                            setShowNavigation(true);
                        }
                    }>
                        <img className='w-full h-full' src={navbutton} alt='hamburger icon image' aria-hidden='true'/>
                    </button>
                </div>
                <div className='flex flex-row justify-between items-center w-full microPhone:w-fit tablet:w-[350px] h-[50px] mt-[30px] ml-[30px] minTablet:mt-0 minTablet:ml-0'>
                    <p className='text-white font-inter hidden tablet:flex'>+86 852 346 000</p>
                    <button className='text-white font-rufina border border-white w-full microPhone:w-[175px] h-full hover:bg-darkwhite'>
                        <a href='#reservation'>Reservations</a>
                    </button>
                </div>
            </div>
        </>
    )
}