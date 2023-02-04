import React, { useContext, useState, useRef, useEffect } from "react";
import Header from "../header";
import Navigation from "../Homepage/navigation";
import Footer from "../footer";
import HeaderImage from '../../images/Portfoliopage/header_image.png';
import bars from '../../images/Icons/bars-solid.svg';
import { NavigationContext } from "../../App";
import Dishes from "./dishes";
import dish1 from '../../images/Portfoliopage/dish1.png';
import dish2 from '../../images/Portfoliopage/dish2.png';
import dish3 from '../../images/Portfoliopage/dish3.png';
import dish4 from '../../images/Portfoliopage/dish4.png';
import dish5 from '../../images/Portfoliopage/dish5.png';
import dish6 from '../../images/Portfoliopage/dish6.png';
import Typed from 'typed.js';

const dataComponents = [
    {
        id: 'All',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Starter',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Lunch',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Dinner',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Drinks',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Sweets',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
    {
        id: 'Fruits',
        dish1Name: 'Premium Deep Sea Snow White Cod Fillet',
        dish1Type: 'Dinner',
        dish1Subtype: 'Launch',
        dish1Image: dish1,
        dish2Name: 'Option of natural wine available',
        dish2Type: 'Fruits',
        dish2Subtype: 'Drinks',
        dish2Image: dish2,
        dish3Name: 'Best pumpkin for pumpkin soup',
        dish3Type: 'Starters',
        dish3Subtype: 'Launch',
        dish3Image: dish3,
        dish4Name: 'Strip Steak With Rosemary Butter',
        dish4Type: 'Launch',
        dish4Subtype: 'Dinner',
        dish4Image: dish4,
        dish5Name: 'Braised Sliced Abalone, Fish Maw with Premium Seafood',
        dish5Type: 'Starters',
        dish5Subtype: 'Cold Dishes',
        dish5Image: dish5,
        dish6Name: 'Pan Fried Live Prawn with Superior Soy Sauce',
        dish6Type: 'Dinner',
        dish6Subtype: 'Starter',
        dish6Image: dish6,
    },
]

export default function Portfoliopage(){
    const [[showNavigation], [windowSize]] = useContext(NavigationContext);
    const [clickedOnAll, setClickedOnAll] = useState('border-b-2');
    const [clickedOnStarter, setClickedOnStarter] = useState(null);
    const [clickedOnLunch, setClickedOnLunch] = useState(null);
    const [clickedOnDinner, setClickedOnDinner] = useState(null);
    const [clickedOnDrinks, setClickedOnDrinks] = useState(null);
    const [clickedOnSweets, setClickedOnSweets] = useState(null);
    const [clickedOnFruits, setClickedOnFruits] = useState(null);
    const [positionOfContainer, setPositionOfContainer] = useState('0');
    const [collapseNav, setCollapseNav] = useState(false);

    const text = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'Our Portfolio',
            'Our Works',
          ],
          startDelay: 1000,
          typeSpeed: 200,
          backSpeed: 100,
          showCursor: false,
          loop: true
        };
        
        typed.current = new Typed(text.current, options);
        
        return () => {
          typed.current.destroy();
        }
      }, [])

    const resetBorders = () => {
        setClickedOnAll(null);
        setClickedOnFruits(null);
        setClickedOnDinner(null);
        setClickedOnDrinks(null);
        setClickedOnLunch(null);
        setClickedOnStarter(null);
        setClickedOnSweets(null);
    }

    const settingPosition = (num) => {
        if (clickedOnAll || clickedOnStarter || clickedOnLunch || clickedOnDinner || clickedOnDrinks || clickedOnSweets || clickedOnFruits){
            setPositionOfContainer(`${-num}px`)
        }
    }
    
    return (
        <>
            <header className="relative w-full h-fit flex justify-center" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
                <div className='w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
                    <Header/>
                    <h1 ref={text}
                    className='flex relative top-0 bottom-0 left-0 right-0 z-10 mx-auto my-auto font-bold text-white font-rufina text-xxxxxxxl smartPhone:text-xxxxxxxxl h-fit w-fit text-center pb-[50px] px-[30px]'>Our Portfolio</h1>
                    <div className='relative w-fit h-fit flex flex-row items-center rotate-90 bottom-[-20px] left-0 right-0 mx-auto'>
                        <p className='text-white font-rufina text-xxxl'>Scroll</p>
                        <hr className='text-white border-dashed w-[120px] ml-[10px]'/>
                    </div>
                </div>
            </header>
            <Navigation/>
            <main className="relative overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col items-center mt-[100px] mb-[200px]" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <nav className="font-lato font-normal text-xxl w-full minTablet:w-[600px] h-fit px-[60px] minTablet:mx-0 my-[50px]">
                    <button style={{marginBottom: (collapseNav) ? 'unset' : '30px'}} className="w-[20px] h-[20px] flex minTablet:hidden" onClick={() => {(collapseNav) ? setCollapseNav(false) : setCollapseNav(true)}}>
                        <img className='object-cover w-full h-full' src={bars} alt='three bars icon' aria-hidden='true'/>
                    </button>
                    <ul className='minTablet:!flex flex-col minTablet:flex-row justify-between minTablet:min-h-0  min-h-[240px] h-fit w-full' style={{display: (collapseNav) ? 'none' : 'flex'}}>
                        <li><button className={`border-dotted ${clickedOnAll}`} onClick={() => {resetBorders(); setClickedOnAll('border-b-2'); settingPosition(0)}}>All</button></li>
                        <li><button className={`border-dotted ${clickedOnStarter}`} onClick={() => {resetBorders(); setClickedOnStarter('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349) : settingPosition(windowSize.innerWidth)}}>Starter</button></li>
                        <li><button className={`border-dotted ${clickedOnLunch}`} onClick={() => {resetBorders(); setClickedOnLunch('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349*2) : settingPosition(windowSize.innerWidth*2)}}>Lunch</button></li>
                        <li><button className={`border-dotted ${clickedOnDinner}`} onClick={() => {resetBorders(); setClickedOnDinner('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349*3) : settingPosition(windowSize.innerWidth*3)}}>Dinner</button></li>
                        <li><button className={`border-dotted ${clickedOnDrinks}`} onClick={() => {resetBorders(); setClickedOnDrinks('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349*4) : settingPosition(windowSize.innerWidth*4)}}>Drinks</button></li>
                        <li><button className={`border-dotted ${clickedOnSweets}`} onClick={() => {resetBorders(); setClickedOnSweets('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349*5) : settingPosition(windowSize.innerWidth*5)}}>Sweets</button></li>
                        <li><button className={`border-dotted ${clickedOnFruits}`} onClick={() => {resetBorders(); setClickedOnFruits('border-b-2'); (windowSize.innerWidth > 1367) ? settingPosition(1349*6) : settingPosition(windowSize.innerWidth*6)}}>Fruits</button></li>
                    </ul>
                </nav>
                <section className="w-full h-fit">
                    <div id='container' className="relative w-fit flex flex-row h-fit transition-[left] duration-1000" style={{left: positionOfContainer}}>
                        {
                            dataComponents.map((dataComponents) => {
                                return <Dishes key={dataComponents.id} {...dataComponents}/>
                            })
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
