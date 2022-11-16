import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { NavigationContext } from '../../App';
import { motion } from 'framer-motion';
import { Viewportcheckerhook } from '../viewportcheckerhook';
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
import Navigation from './navigation';
import Footer from '../footer';
import Header from '../header';
import Reservation from '../reservation';
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
        delayy: 2,
        price2: '$22',
        dish2: 'Steak With Rosemary Butter',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        delayy2: 2.5
    },
    {
        id: 'bottom',
        price1: '$18',
        dish1: 'Cucumber Salad',
        dish_description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        delayy: 2.5,
        price2: '$90',
        dish2: 'Natural Wine Pairing',
        dish_description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        delayy2: 3
    }
]

const produceListData = [
    {
        id: 'fish',
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: fish,
        imagedescription: 'ilustration of a fish',
        delayy: 0
    },
    {
        id: 'carrot',
        title: 'Seasonal Vegetables',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: carrot,
        imagedescription: 'ilustration of a carrot',
        delayy: .5
    },
    {
        id: 'lemon',
        title: 'Fresh Fruit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu',
        imageUrl: lemon,
        imagedescription: 'ilustration of a lemon',
        delayy: 1
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
        id: 'cuisine1',
        imageUrl: cuisine3,
        cuisineType: 'Starters',
        delayy: 1
    },
    {
        id: 'cuisine2',
        imageUrl: cuisine4,
        cuisineType: 'Mains',
        delayy: 2
    }, 
    {
        id: 'cuisine3',
        imageUrl: cuisine5,
        cuisineType: 'Soups',
        delayy: 3
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

export const WindowSizeContext = createContext();
export const WindowSizeSliderPositionContext = createContext();

export default function Homepage(){
    const [sliderPosition, setsliderPosition] = useState('0px');
    const [nextSlide, setNextSlide] = useState(undefined);
    const [prevSlide, setPrevSlide] = useState(undefined);

    // const [isOnScreen, setIsOnScreen] = useState(false);

    const [[showNavigation], [windowSize]] = useContext(NavigationContext);
    const review = useRef(null);
    // let firstValue = Viewportcheckerhook(review);

    useEffect(() => {
        setsliderPosition('0px');
    }, [windowSize]);

    useEffect(() => {
        console.log("A");
        console.log(nextSlide)
        let repeatMovementOfSlider; 
        const initialDelay = setTimeout(() => {
            repeatMovementOfSlider = setInterval(() => {
                sliderShift();
                if (nextSlide !== undefined) {
                    setsliderPosition(nextSlide);
                }
                console.log(nextSlide)
            }, 1000);
        }, 1000);
        return () => {clearInterval(repeatMovementOfSlider); clearTimeout(initialDelay)};
    }, [sliderPosition])

    // useEffect(() => {
    //     sliderShift();
    // }, [sliderPosition])

    let positionOfSlider = -parseInt(sliderPosition.slice(1, sliderPosition.length - 2));

    const sliderShift = () => {
        if (sliderPosition === '0px') {
            isAtFirstSlide();
            return;
        } else if (sliderPosition === '-2732px') {
            isAtLastSlide();
            return;
        } else {
            isAtOtherSlides();
            return;
        }
    }

    const isAtOtherSlides = () => {
        if (windowSize.innerWidth < 1367){
            setPrevSlide(`${positionOfSlider + windowSize.innerWidth}px`);
            setNextSlide(`${positionOfSlider - windowSize.innerWidth}px`);
        } else {
            setPrevSlide(`${positionOfSlider + 1349}px`);
            setNextSlide(`${positionOfSlider - 1349}px`);
        }
    }

    const isAtLastSlide = () => {
        setNextSlide('0px');
        if (windowSize.innerWidth < 1367){
            setPrevSlide(`${positionOfSlider + windowSize.innerWidth}px`);
        } else {
            setPrevSlide(`${positionOfSlider + 1349}px`);
        }
    }

    const isAtFirstSlide = () => {
        setPrevSlide('0px');
        if (windowSize.innerWidth < 1367){
            setNextSlide(`${-windowSize.innerWidth}px`);
        } else {
            setNextSlide(`${-1349}px`);
        }
    }

    // useEffect(() => {
    //     if (firstValue === true) {
    //         setIsOnScreen(firstValue);
    //     }
    // }, [firstValue])



    return (
        <>
        <header className='relative w-full normal:w-[1349px] h-fit flex flex-col bg-darkgreen' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <Header />
            <div className='flex flex-col relative w-full h-fit min-h-[750px] minTablet:min-h-[500px] mt-[50px] px-[60px]'>
                    <motion.div animate={{ x: 600 }} initial={{ left: -600 }} transition={{ delay: 1, type: 'spring'}} className='relative flex flex-col justify-between w-full minTablet:w-[500px] mb-[70px] minTablet:mb-0 h-fit z-10'>
                        <h1 className='text-white font-rufina text-xxxxxxxl smartPhone:text-xxxxxxxxl leading-tight'>Healthy Eating is important part of lifestyle</h1>
                        <p className='text-white font-lato text-base w-3/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                    </motion.div>
                    <motion.div animate={{ opacity: 1}} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 2}} className='relative minTablet:absolute w-fit h-fit hidden microPhone:flex flex-row items-center rotate-90 -bottom-[85px] smartPhone:-bottom-[115px] minTablet:bottom-[70px] -left-[60px] smartPhone:-left-[90px] minTablet:-left-[30px]'>
                        <p className='text-white font-rufina text-xxxl'>Scroll</p>
                        <hr className='text-white border-dashed w-[60px] smartPhone:w-[120px] ml-[10px]'/>
                    </motion.div>
                    <motion.div animate={{ opacity: 1}} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 3}} className='relative minTablet:absolute minTablet:top-[50px] minTablet:right-[60px] items-end flex flex-col w-full minTablet:w-fit'>
                        <img className='w-[70%] h-[30%] minTablet:w-[350px] minTablet:h-[400px] object-cover' src={cuisine1} alt='image of a cuisine' aria-hidden='true'/>            
                        <div className='absolute -bottom-[15px] smartPhone:-bottom-[20px] minTablet:-bottom-[20px] minTablet:absolute minTablet:-left-[150px] flex flex-row minTablet:justify-between w-full minTablet:w-[350px] mr-[0px]'>
                            <img className='w-[20%] h-[40%] minTablet:w-[100px] minTablet:h-[95px]' src={spice1} alt='image of a spice' aria-hidden='true'/>
                            <img className='w-[20%] h-[40%] minTablet:w-[100px] minTablet:h-[95px] mx-[20px] minTablet:mx-0' src={spice2} alt='image of a spice' aria-hidden='true'/>
                            <img className='w-[20%] h-[40%] minTablet:w-[100px] minTablet:h-[95px]' src={spice3} alt='image of a spice' aria-hidden='true'/>
                        </div>
                    </motion.div>
            </div>
        </header>
            <Navigation />
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col bg-darkgreen' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <section className='flex flex-col tablet:flex-row justify-between w-full h-fit min-h-[500px] mt-[80px] px-[60px]'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} 
                className='flex flex-col justify-between w-full minTablet:w-[490px] h-fit smartPhone:h-[470px]'>
                    <img className='w-full h-[200px] smartPhone:h-[300px] object-cover' src={cuisine2} alt='image of a cuisine' aria-hidden='true'/>
                    <h2 className='text-white font-rufina text-xxxxxl w-full smartPhone:w-[220px]'>
                        Start to plan your diet today
                    </h2>
                    <p className='text-white font-lato text-base w-full smartPhone:w-[250px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} 
                className='flex flex-col justify-between w-[70%] smartPhone:w-[260px] h-fit smartPhone:h-[450px] mt-[100px] tablet:mt-0 self-end tablet:self-center'>
                    <p className='text-white font-lato text-base w-full smartPhone:w-[200px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </p>
                    <img className='w-full h-[300px] smartPhone:h-[370px] object-cover mt-[20px] smartPhone:mt-0' src={saltpepper} alt='image of a cuisine' aria-hidden='true'/>
                </motion.div>
            </section>
            <section className='overflow-hidden relative flex flex-col justify-between w-full h-fit min-h-[700px] mt-[80px] px-[60px] bg-white pb-[150px]'>
                <img className='absolute top-0 right-0 w-[500px] h-[550px]' src={leaves} alt='image of green leaves' aria-hidden='true'/>
                <motion.div initial={{ top: -200 }}  whileInView={{ y: 200 }} transition={{ duration: 2 }} viewport={{ once: true }}
                className='relative mt-[100px] w-full smartPhone:w-[235px] h-fit'>
                    <h2 className='text-black font-rufina text-xxxxxxxl font-bold'>Our Menu</h2>
                    <p className='text-black font-lato text-base font-normal'>This is a section of your menu. Give your section a brief description</p>
                </motion.div>
                <div className='flex flex-col justify-between w-full h-fit laptop:h-[400px] my-[50px]'>
                    {
                        priceListData.map((priceListData) => {
                            return <Pricelist key={priceListData.id} {...priceListData}/>
                        })
                    }
                </div>
            </section>
            <section className='relative flex flex-col minLaptop:flex-row justify-between w-full h-fit min-h-[500px] pt-[50px] px-[60px] bg-lightwhite'>
                <motion.div initial={{ left: -240 }} whileInView={{ x: 240 }} transition={{ duration: 1 }} viewport={{ once: true }}
                className='relative flex flex-col w-full minTablet:w-fit h-fit'>
                    <img className='relative w-full minTablet:w-[450px] h:-[200px] microPhone:h-[250px] smartPhone:h-[300px] phone:h-[450px] z-10 -bottom-[40px] left-[47px] object-cover' src={manseasoning} alt='image of a man seasoning' aria-hidden='true'/>
                    <img className='absolute w-[100px] microPhone:w-[150px] smartPhone:w-[200px] h-[100px] microPhone:h-[150px] smartPhone:h-[200px] left-[40px] phone:left-[37px]' src={leaf2} alt='skeleton image of a leaf' aria-hidden='true'/>
                </motion.div>
                <motion.div initial={{ right: -250 }} whileInView={{ x: -250 }} transition={{ duration: 1}} viewport={{ once: true }}
                className='relative flex flex-col items-end justify-between w-full smartPhone:w-fit h-fit mr-[100px] mt-[100px] minLaptop:mt-0'>
                    <h2 className='font-rufina font-bold text-xxxxxxxl leading-tight w-full smartPhone:w-[250px] mr-0 smartPhone:mr-[40px]'>
                        Excellent cook
                    </h2>
                    <p className='font-lato font-normal text-base w-full smartPhone:w-[290px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                    </p>
                    <img className='w-[150px] microPhone:w-[200px] smartPhone:w-[250px] h-[150px] microPhone:h-[200px] smartPhone:h-[250px] mt-[20px] ml-0 smartPhone:ml-[70px]' src={leaf} alt='skeleton image of a leaf' aria-hidden='true'/>
                </motion.div>
            </section>
            <section className='w-full h-fit py-[120px] px-[60px] bg-white'>
                <div className='flex flex-col minTablet:flex-row justify-between w-full h-fit'>
                    {
                        produceListData.map((produceListData) => {
                            return <Producelisting key={produceListData.id} {...produceListData} />
                        })
                    }   
                </div>
            </section>
            <section className='flex flex-col laptop:flex-row justify-between items-center w-full h-fit pt-[50px] pb-[150px] px-[60px] bg-white'>
                {
                    postListData.map((postListData) => {
                        return <Postlisting key={postListData.id} {...postListData} />
                    })
                }   
            </section>
            <Reservation />
            <section className='flex flex-col items-center w-full h-fit min-h-[500px] py-[60px] px-[60px] bg-white'>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} viewport={{ once: true }}  
                className='font-rufina font-bold text-xxxxxxxl text-center w-full smartPhone:w-[365px]'>
                    Calories Energy Balance
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} viewport={{ once: true }}  
                className='font-lato font-normal text-base text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.p>
                <div className='overflow-hidden w-full h-fit laptop:mt-[100px] flex flex-col laptop:flex-row justify-between'>
                    <WindowSizeContext.Provider value={[[windowSize]]}>
                        {
                            cuisineListData.map((cuisineListData) => {
                                return <Cuisinelisting key={cuisineListData.id} {...cuisineListData}/>
                            })
                        }
                    </WindowSizeContext.Provider>
                </div>
            </section>
            <section className='w-full min-h-[500px] h-fit bg-white overflow-x-hidden'>
                <motion.div ref={review} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                className='flex flex-row w-fit h-full bg-white relative transition-[left] duration-1000' style={{left: sliderPosition}}>
                    <WindowSizeSliderPositionContext.Provider value={[[setsliderPosition], [nextSlide], [prevSlide]]}>
                            {
                                reviewListData.map((reviewListData) => {
                                    return <Reviewlisting key={reviewListData.id} {...reviewListData}/>
                                })
                            }
                        </WindowSizeSliderPositionContext.Provider>
                </motion.div>
            </section>
        </main>
        <Footer />
        </>
    )
}