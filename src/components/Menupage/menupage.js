import React, { useState, createContext } from 'react';
import Header from '../header';

export const NavigationContextTwo = createContext();

export default function Menupage(){
    const [showNavigation, setShowNavigation] = useState(false);

    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit flex flex-col bg-darkgreen'>
            <NavigationContextTwo.Provider value={[[showNavigation, setShowNavigation]]}>
                <Header />
            </NavigationContextTwo.Provider>
        </header>
        </>
    )
}