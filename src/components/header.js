import React, { useContext } from 'react';
import { NavigationContext } from './Homepage/homepage';
import { NavigationContextTwo } from './Menupage/menupage';
import logo from '../images/Logo.svg';
import navbutton from '../images/NaviOpen.svg';

export default function Header(){
    const [[showNavigation, setShowNavigation]] = useContext(NavigationContext);

    return(
        <>
            <div className='w-full h-[90px] pl-[30px] pr-[60px] pt-[30px] flex flex-row justify-between' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <div className='flex flex-row justify-between items-center h-full w-fit'>
                    <img className='h-full w-[200px]' src={logo} alt="logo of the FoodZero business" aria-hidden='true'/>
                    <button className='w-[50px] h-[50px]' onClick={
                        () => {
                            setShowNavigation(true);
                        }
                    }>
                        <img className='w-full h-full' src={navbutton} alt='hamburger icon image' aria-hidden='true'/>
                    </button>
                </div>
                <div className='flex flex-row justify-between items-center w-[350px] h-[50px]'>
                    <p className='text-white font-inter'>+86 852 346 000</p>
                    <button className='text-white font-rufina border border-white w-2/4 h-full'>
                        <a href='#reservation'>Reservations</a>
                    </button>
                </div>
            </div>
        </>
    )
}