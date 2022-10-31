import React, { useState, createContext, useEffect } from 'react';
import logo from '../../images/Logo.svg';
import navbutton from '../../images/NaviOpen.svg';
import spice1 from '../../images/Spices/spices1.png';
import spice2 from '../../images/Spices/spices2.png';
import spice3 from '../../images/Spices/spices3.png';
import saltpepper from '../../images/Spices/salt_pepper.png';
import cuisine1 from '../../images/cuisine_homepage.png';
import cuisine2 from '../../images/cuisine2_homepage.png';
import cuisine3 from '../../images/cuisine3_homepage.png';
import cuisine4 from '../../images/cuisine4_homepage.png';
import cuisine5 from '../../images/cuisine5_homepage.png';
import leaves from '../../images/green_leaves.png';
import manseasoning from '../../images/man_seasoning.png'; 
import leaf from '../../images/SeasoningsAndFruits/LeafBlack.svg'; 
import leaf2 from '../../images/SeasoningsAndFruits/LeafBlack2.svg'; 
import Pricelist from './pricelist';
import Producelisting from './producelisting';
import Postlisting from './postlisting';
import Cuisinelisting from './cuisinelisting';
import Reviewlisting from './reviewlisting';
import Footer from '../footer';
import fish from '../../images/Icons/fishdark.svg';
import carrot from '../../images/Icons/carrotdark.svg';
import lemon from '../../images/Icons/lemondark.svg';
import postimage1 from '../../images/postimage1.png';
import postimage2 from '../../images/postimage2.png';
import author1 from '../../images/author1.png';
import author2 from '../../images/author2.png';
import reviewer1 from '../../images/reviewer1.png';

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

const postListData = [
    {
        id: 'post1',
        imageUrl: postimage1,
        postAuthor: 'Julie Christie',
        authorImage: author1,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2,
        postTitle: 'Fruit and vegetables and protection against diseases',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'post2',
        imageUrl: postimage2,
        postAuthor: 'Dianne Russell',
        authorImage: author2,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2,
        postTitle: "Asparagus Spring Salad with Rocket, Goat's Cheese",
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
]

const cuisineListData = [
    {
        id: 'cusine1',
        imageUrl: cuisine3,
        cuisineType: 'Starters'
    },
    {
        id: 'cusine2',
        imageUrl: cuisine4,
        cuisineType: 'Mains'
    }, 
    {
        id: 'cusine3',
        imageUrl: cuisine5,
        cuisineType: 'Soups'
    }
]

const reviewListData = [
    {
        id: 'review1',
        reviewAuthor: 'John Doe',
        occupation: 'Blogger',
        reviewerImage: reviewer1,
        pageNumber: '1/3'
    },
    {
        id: 'review2',
        reviewAuthor: 'Michael Downson',
        occupation: 'Food Critic',
        reviewerImage: reviewer1,
        pageNumber: '2/3'
    },
    {
        id: 'review3',
        reviewAuthor: 'Dutch Grimshaw',
        occupation: 'Blogger',
        reviewerImage: reviewer1,
        pageNumber: '3/3'
    },
]

export const SliderPositionContext = createContext();

export default function Homepage(){
    const [sliderPosition, setSliderPosition] = useState('0px');

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
                <img className='absolute w-[450px] h-[450px] z-10 -bottom-[40px] left-[47px]' src={manseasoning} alt='image of a man seasoning' aria-hidden='true'/>
                <img className='absolute w-[200px] h-[200px] left-[37px]' src={leaf2} alt='skeleton image of a leaf' aria-hidden='true'/>
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
            <section className='w-full h-fit py-[120px] px-[60px] bg-white'>
                <div className='flex flex-row justify-between w-full h-full'>
                    {
                        produceListData.map((produceListData) => {
                            return <Producelisting key={produceListData.id} {...produceListData} />
                        })
                    }   
                </div>
            </section>
            <section className='flex flex-row justify-between w-full h-fit pt-[50px] pb-[70px] px-[60px] bg-white'>
                {
                    postListData.map((postListData) => {
                        return <Postlisting key={postListData.id} {...postListData} />
                    })
                }   
            </section>
            <section className='flex flex-col items-center w-full h-fit py-[150px] px-[60px] bg-lightwhite'>
                <h2 className='font-rufina font-bold text-xxxxxxxl'>Make a Reservation</h2>
                <p className='font-lato font-normal text-base'>Get in touch with restaurant</p>
                <form className='h-fit w-full flex flex-col items-center' onSubmit={(e) => {e.preventDefault()}}>
                    <div className='mt-[70px] mb-[100px] w-full h-[50px] flex flex-row justify-between'>
                        <input className='h-full w-1/4 border bg-lightwhite px-[20px] font-lato font-normal text-base' type='date' aria-label='reservation date' required></input>
                        <div className='h-full w-1/4 border bg-lightwhite px-[20px]'>
                            <select className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='reservation time' required>
                                <option value="">Time for Reservation</option>
                                <option value="08:00am">08:00am</option>
                                <option value="09:00am">09:00am</option>
                                <option value="10:00am">10:00am</option>
                                <option value="11:00am">11:00am</option>
                                <option value="12:00pm">12:00pm</option>
                                <option value="01:00pm">01:00pm</option>
                                <option value="02:00pm">02:00pm</option>
                                <option value="03:00pm">03:00pm</option>
                                <option value="04:00pm">04:00pm</option>
                                <option value="05:00pm">05:00pm</option>
                                <option value="06:00pm">06:00pm</option>
                                <option value="07:00pm">07:00pm</option>
                                <option value="08:00pm">08:00pm</option>
                                <option value="09:00pm">09:00pm</option>
                                <option value="10:00pm">10:00pm</option>
                                <option value="11:00pm">11:00pm</option>
                            </select>
                        </div>
                        <div className='h-full w-1/4 border bg-lightwhite px-[20px]'>
                            <select className='h-full w-full bg-lightwhite outline-none font-lato font-normal text-base' aria-label='number of persons' required>
                                <option value="">Number Of Persons</option>
                                <option value="1 person">1 person</option>
                                <option value="2 persons">2 persoms</option>
                                <option value="3 persons">3 persons</option>
                                <option value="4 persons">4 persons</option>
                                <option value="5 persons">5 persons</option>
                            </select>
                        </div>
                    </div> 
                    <input className='bg-darkgreen w-[200px] h-[50px] text-white' type='submit' value='BOOK NOW'></input>     
                </form>
            </section>
            <section className='flex flex-col items-center w-full h-fit min-h-[500px] py-[60px] px-[60px] bg-white'>
                <h2 className='font-rufina font-bold text-xxxxxxxl text-center w-[365px]'>Calories Energy Balance</h2>
                <p className='font-lato font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='w-full h-[450px] mt-[100px] flex flex-row justify-between'>
                    {
                        cuisineListData.map((cuisineListData) => {
                            return <Cuisinelisting key={cuisineListData.id} {...cuisineListData}/>
                        })
                    }
                </div>
            </section>
            <section className='w-full min-h-[500px] h-fit bg-white overflow-x-hidden'>
                <div className='flex flex-row w-fit h-full bg-white relative' style={{left: sliderPosition}}>
                    <SliderPositionContext.Provider value={[sliderPosition, setSliderPosition]}>
                        {
                            reviewListData.map((reviewListData) => {
                                return <Reviewlisting key={reviewListData.id} {...reviewListData}/>
                            })
                        }
                    </SliderPositionContext.Provider>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}