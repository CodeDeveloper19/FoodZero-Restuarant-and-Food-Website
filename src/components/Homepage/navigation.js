import React, {useContext} from 'react';
import { NavigationContext } from './homepage';
import navigationbg from '../../images/navigation_background.png'

export default function Navigation(){
    const [[showNavigation]] = useContext(NavigationContext);

    return(
        <>
            <section className='absolute h-full w-full bg-white z-20' style={{display : (showNavigation) ? 'flex' : 'none'}}>
                <img className='w-full h-full' src={navigationbg} alt='image of a flower' aria-hidden='true'/>
            </section>
        </>
    )
}