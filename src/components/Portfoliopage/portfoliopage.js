import React, { useContext } from "react";
import Header from "../header";
import Navigation from "../Homepage/navigation";
import Footer from "../footer";
import HeaderImage from '../../images/Portfoliopage/header_image.png'
import { NavigationContext } from "../../App";

export default function Portfoliopage(){
    const [[showNavigation]] = useContext(NavigationContext);
    
    return (
        <>
            <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <Header/>
                <img className='absolute w-full h-full object-cover' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
                <h1 className='absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto text-white font-rufina font-bold text-xxxxxxxxl h-fit w-fit z-10'>Our Portfolio</h1>
                <div className='absolute w-fit h-fit flex flex-row items-center rotate-90 bottom-[80px] left-0 right-0 mx-auto'>
                    <p className='text-white font-rufina text-xxxl'>Scroll</p>
                    <hr className='text-white border-dashed w-[120px] ml-[10px]'/>
                </div>
            </header>
            <Navigation/>
            <main style={{display: (showNavigation) ? 'none' : 'flex'}}>

            </main>
            <Footer />
        </>
    )
}