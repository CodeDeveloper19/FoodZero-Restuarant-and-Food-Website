import React, { useContext } from 'react';
import Header from '../header';
import Footer from '../footer';
import Reservation from '../reservation';
import Menucuisines from './menucuisines';
import Navigation from '../Homepage/navigation';
import HeaderImage from '../../images/Menupage/header_image.png';
import Drinks from '../../images/Menupage/drinks_image.png'; 
import Starters from '../../images/Menupage/starters_image.png'; 
import Mains from '../../images/Menupage/mains_image.png'; 
import BlueberryImage from '../../images/SeasoningsAndFruits/BlueberryBlack.svg';
import { NavigationContext } from '../../App';
import { motion } from 'framer-motion';


const menuCuisineData = [
    {
        id: 'Starters',
        imageUrl: Starters,
        titleDescription: 'Get your meal started with some of our best appetizers',
        price: '$20',
        dish: 'Grilled Okra and Tomatoes',
        dish_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price2: '$18',
        dish2: 'Cucumber Salad',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price3: '$12',
        dish3: ' Basil Pancakes',
        dish_description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 'Mains',
        imageUrl: Mains,
        titleDescription: 'The main dishes of course, cooked to perfection',
        price: '$20',
        dish: 'Deep Sea Snow White Cod Fillet',
        dish_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price2: '$22',
        dish2: 'Steak With Rosemary Butter',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price3: '$20',
        dish3: 'Steaks with Grilled Kimchi',
        dish_description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 'Pastries & Drinks',
        imageUrl: Drinks,
        titleDescription: 'Complement the mouth-watering dishes with a glass of wine or desert',
        price: '$158',
        dish: 'Wine Pairing',
        dish_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price2: '$168',
        dish2: 'Natural Wine Pairing',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price3: '$90',
        dish3: 'Whisky Flyer',
        dish_description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]

export default function Menupage(){
    const [[showNavigation]] = useContext(NavigationContext);
    
    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <Header/>
            <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>
            <motion.div initial={{left: -500 }}  whileInView={{ x: 500 }} transition={{ duration: .5, delay:  1}} viewport={{ once: true }}
            className='relative top-0 bottom-0 my-auto flex flex-col h-fit w-fit z-10 px-[60px] py-[100px]'>
                <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit max-w-[400px] w-full'>View Our New Menu</h1>
                <p className='font-bold text-white font-rufina text-xxl'>The freshest ingredients for you every day</p>
            </motion.div>
        </header>
        <Navigation/>
        <main className='relative overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[80px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <img className='absolute -top-[20px] right-[50px] h-[133px] phone:h-[185px] tablet:h-[250px] w-[140px] phone:w-[180px] tablet:w-[270px]' src={BlueberryImage} alt='illustration of a blueberry' aria-hidden='true'/>
            {
                menuCuisineData.map((menuCuisineData) => {
                    return <Menucuisines key={menuCuisineData.id} {...menuCuisineData}/>
                })
            }
            <Reservation />
        </main>
        <Footer/>
        </>
    )
}