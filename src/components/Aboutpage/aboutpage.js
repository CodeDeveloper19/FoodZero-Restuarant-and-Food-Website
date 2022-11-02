import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Navigation from '../Homepage/navigation';
import HeaderImage from '../../images/Aboutpage/header_image.png';
import TomatoBlack from '../../images/SeasoningsAndFruits/TomatoBlack.svg';
import ChefSeasoning from '../../images/Aboutpage/chef_seasoning.png';

export default function Aboutpage(){
    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
            <Header/>
            <img className='absolute w-full h-full object-cover' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
            <div className='flex flex-col h-fit w-fit z-10 pt-[150px] px-[60px] self-end'>
                <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit w-[400px]'>Who We Are</h1>
                <p className='text-white font-rufina font-bold text-xxl w-[500px]'>The most important thing for us is to give you the comfortable dining experience</p>
            </div>
        </header>
        <Navigation/>
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[100px]'>
            <section className='relative flex flex-row justify-between w-full h-fit px-[60px] py-[100px]'>
                <img className='absolute w-[200px] h-[200px] object-cover' src={TomatoBlack} alt='illustration of a tomato' aria-hidden='true'/>
                <div className='w-[45%] h-full'>

                </div>
                <img className='w-[45%] h-[500px] object-cover' src={ChefSeasoning} alt='image of a cuisine' aria-hidden='true'/>
            </section>
        </main>
        <Footer/>
        </>
    )
}