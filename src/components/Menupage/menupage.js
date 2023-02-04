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
        dish_description: 'A great choice if you are a fan of veggies and grills',
        price2: '$18',
        dish2: 'Cucumber Salad',
        dish_description2: 'All it takes is a few minutes of marination time to soften and flavour our greens',
        price3: '$12',
        dish3: ' Basil Pancakes',
        dish_description3: 'A quick and easy to make pancake, perfectly seasoned'
    },
    {
        id: 'Mains',
        imageUrl: Mains,
        titleDescription: 'The main dishes of course, cooked to perfection',
        price: '$20',
        dish: 'Deep Sea Snow White Cod Fillet',
        dish_description: 'No other cod comes close to ours!',
        price2: '$22',
        dish2: 'Steak With Rosemary Butter',
        dish_description2: "Making a great piece of barbecue meat is no beginner's luck",
        price3: '$20',
        dish3: 'Steaks with Grilled Kimchi',
        dish_description3: 'A tangy Korean fermented kimchee that complements a smoky grilled steak, blended with rice wine vinegar'
    },
    {
        id: 'Pastries & Drinks',
        imageUrl: Drinks,
        titleDescription: 'Complement the mouth-watering dishes with a glass of wine or desert',
        price: '$158',
        dish: 'Wine Pairing',
        dish_description: 'Red or white wine to go with our red meats or chicken and fish respectively',
        price2: '$168',
        dish2: 'Natural Wine Pairing',
        dish_description2: 'Top off or start your meals with our sparkling natural wine',
        price3: '$90',
        dish3: 'Whisky Flyer',
        dish_description3: 'A remarkable variation on the classic Aviation cocktail'
    }
]

export default function Menupage(){
    const [[showNavigation]] = useContext(NavigationContext);
    
    return(
        <>
        <header className="relative w-full h-fit flex justify-center" style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>      
            <div className='w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
                <Header/>
                <motion.div initial={{opacity: 0, left: -300 }}  whileInView={{ opacity: 1, x: 300 }} transition={{ duration: .5, delay:  1}} viewport={{ once: true }}
                className='relative top-0 bottom-0 my-auto flex flex-col h-fit w-fit z-10 px-[60px] py-[100px]'>
                    <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit max-w-[400px] w-full'>View Our New Menu</h1>
                    <p className='font-bold text-white font-rufina text-xxl'>The freshest ingredients for you every day</p>
                </motion.div>
            </div>
        </header>
        <Navigation/>
        <main className='relative overflow-hidden w-full h-fit flex flex-col pt-[80px] items-center' style={{display: (showNavigation) ? 'none' : 'flex'}}>
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