import React from 'react';
import logo from '../../images/Logo.svg';
import navbutton from '../../images/NaviOpen.svg';
import spice1 from '../../images/Spices/spices1.png';
import spice2 from '../../images/Spices/spices2.png';
import spice3 from '../../images/Spices/spices3.png';
import saltpepper from '../../images/Spices/salt_pepper.png';
import cuisine1 from '../../images/cuisine_homepage.png';
import cuisine2 from '../../images/cuisine2_homepage.png';
import leaves from '../../images/green_leaves.png';
import manseasoning from '../../images/man_seasoning.png'; 
import leaf from '../../images/SeasoningsAndFruits/LeafBlack.svg'; 
import leaf2 from '../../images/SeasoningsAndFruits/LeafBlack2.svg'; 
import Pricelist from './pricelist';
import Producelisting from './producelisting';
import fish from '../../images/Icons/fishdark.svg';
import carrot from '../../images/Icons/carrotdark.svg';
import lemon from '../../images/Icons/lemondark.svg';

const priceListData = [
    {
        id: 'top',
        price1: '$20',
        dish1: 'Deep Sea Snow White Cod Fillet',
        dish_description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price2: '$22',
        dish2: 'Steak With Rosemary Butter',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'bottom',
        price1: '$18',
        dish1: 'Cucumber Salad',
        dish_description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price2: '$90',
        dish2: 'Natural Wine Pairing',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
]

const produceListData = [
    {
        id: 'fish',
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: fish,
        imagedescription: 'ilustration of a fish'
    },
    {
        id: 'carrot',
        title: 'Seasonal Vegetables',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: carrot,
        imagedescription: 'ilustration of a carrot'
    },
    {
        id: 'lemon',
        title: 'Fresh Fruit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: lemon,
        imagedescription: 'ilustration of a lemon'
    },
]

export default function Homepage(){
    return (
        <>
        <header className='w-full h-[90px] pl-[30px] pr-[60px] pt-[30px] flex flex-row justify-between'>
            <div className='flex flex-row justify-between items-center h-full w-fit'>
                <img className='h-full w-[200px]' src={logo} alt="logo of the FoodZero business" aria-hidden='true'/>
                <button className='w-[50px] h-[50px]'>
                    <img className='w-full h-full' src={navbutton} alt='hamburger icon image' aria-hidden='true'/>
                </button>
            </div>
            <div className='flex flex-row justify-between items-center w-[350px] h-[50px]'>
                <p className='text-white font-inter'>+86 852 346 000</p>
                <button className='text-white font-rufina border border-white w-2/4 h-full'>
                    Reservations
                </button>
            </div>
        </header>
        <main className='overflow-hidden w-full h-fit flex flex-col'>
            <section className='flex flex-row relative w-full h-fit min-h-[500px] mt-[50px] px-[60px]'>
                <div className='flex flex-col justify-between w-[500px] h-[290px] z-10'>
                    <h1 className='text-white font-rufina text-xxxxxxxxl leading-tight'>Healthy Eating is important part of lifestyle</h1>
                    <p className='text-white font-lato text-base w-3/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                </div>
                <div className='absolute w-fit h-fit flex flex-row items-center rotate-90 bottom-[75px] -left-[35px]'>
                    <p className='text-white font-rufina text-xxxl'>Scroll</p>
                    <hr className='text-white border-dashed w-[150px]'/>
                </div>
                <div className='absolute top-[50px] right-[60px] flex flex-col'>
                    <img className='w-[350px] h-[400px]' src={cuisine1} alt='image of a cuisine' aria-hidden='true'/>            
                    <div className='absolute -left-[150px] -bottom-[20px] flex flex-row justify-between w-[350px]'>
                        <img className='w-[100px] h-[95px]' src={spice1} alt='image of a spice' aria-hidden='true'/>
                        <img className='w-[100px] h-[95px]' src={spice2} alt='image of a spice' aria-hidden='true'/>
                        <img className='w-[100px] h-[95px]' src={spice3} alt='image of a spice' aria-hidden='true'/>
                    </div>
                </div>
            </section>
            <section className='flex flex-row justify-between w-full h-fit min-h-[500px] mt-[80px] px-[60px]'>
                <div className='flex flex-col justify-between w-[490px] h-[470px]'>
                    <img className='w-full h-[300px]' src={cuisine2} alt='image of a cuisine' aria-hidden='true'/>
                    <h2 className='text-white font-rufina text-xxxxxl w-[220px]'>
                        Start to plan your diet today
                    </h2>
                    <p className='text-white font-lato text-base w-[250px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </div>
                <div className='flex flex-col justify-between w-[260px] h-[450px]'>
                    <p className='text-white font-lato text-base w-[200px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                    <img className='w-full h-[370px]' src={saltpepper} alt='image of a cuisine' aria-hidden='true'/>
                </div>
            </section>
            <section className='relative flex flex-col justify-between w-full h-fit min-h-[700px] mt-[80px] px-[60px] bg-white'>
                <img className='absolute top-0 right-0 w-[500px] h-[550px]' src={leaves} alt='image of green leaves' aria-hidden='true'/>
                <div className='mt-[100px] w-[235px] h-[100px]'>
                    <h2 className='text-black font-rufina text-xxxxxxxl font-bold'>Our Menu</h2>
                    <p className='text-black font-lato text-base font-normal'>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className='flex flex-col justify-between w-full h-[400px] mt-[50px]'>
                    {
                        priceListData.map((priceListData) => {
                            return <Pricelist key={priceListData.id} {...priceListData}/>
                        })
                    }
                </div>
            </section>
            <section className='relative flex flex-col justify-between w-full h-fit min-h-[500px] pt-[50px] px-[60px] bg-lightwhite'>
                <img className='absolute w-[450px] h-[450px] z-10 -bottom-[40px] left-[80px]' src={manseasoning} alt='image of a man seasoning' aria-hidden='true'/>
                <img className='absolute w-[200px] h-[200px]' src={leaf2} alt='skeleton image of a leaf' aria-hidden='true'/>
                <div className='absolute flex flex-col justify-between w-fit h-fit min-h-[180px] right-[150px]'>
                    <h2 className='font-rufina font-bold text-xxxxxxxl leading-tight w-[250px]'>
                        Excellent cook
                    </h2>
                    <p className='font-lato font-normal text-base w-[290px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                    </p>
                </div>
                <img className='absolute w-[250px] h-[250px] right-[160px] bottom-0' src={leaf} alt='skeleton image of a leaf' aria-hidden='true'/>
            </section>
            <section className='relative flex flex-col justify-between w-full h-fit min-h-[500px] pt-[50px] px-[60px] bg-white'>
                <div className='flex flex-row justify-between w-full h-2/5'>
                    {
                        produceListData.map((produceListData) => {
                            return <Producelisting key={produceListData.id} {...produceListData} />
                        })
                    }   
                </div>
            </section>
        </main>
        <footer>
            
        </footer>
        </>
    )
}