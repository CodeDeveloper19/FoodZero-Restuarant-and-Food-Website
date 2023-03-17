import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { NavigationContext } from '../../App';
import { motion } from 'framer-motion';
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
import reviewer1 from '../../images/reviewer1.png';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth, signInAnonymously} from "firebase/auth";

const priceListData = [
    {
        id: 'top',
        price1: '$20',
        dish1: 'Deep Sea Snow White Cod Fillet',
        dish_description1: 'No other cod comes close to ours!',
        delayy: 2,
        price2: '$22',
        dish2: 'Steak With Rosemary Butter',
        dish_description2: "Making a great piece of barbecue meat is no beginner's luck",
        delayy2: 2.5
    },
    {
        id: 'bottom',
        price1: '$18',
        dish1: 'Cucumber Salad',
        dish_description1: 'All it takes is a few minutes of marination time to soften and flavour our greens',
        delayy: 2.5,
        price2: '$90',
        dish2: 'Natural Wine Pairing',
        dish_description2: 'Top off or start your meals with our sparkling natural wine',
        delayy2: 3
    }
]

const produceListData = [
    {
        id: 'fish',
        title: 'Premium Quality',
        description: 'We use the freshest and top-quality ingredients and kitchen utensils to make our meals',
        imageUrl: fish,
        imagedescription: 'ilustration of a fish',
        delayy: 0
    },
    {
        id: 'carrot',
        title: 'Seasonal Vegetables',
        description: 'Some greens and vegetables are accessible once in a while but that is an exception at our restaurant',
        imageUrl: carrot,
        imagedescription: 'ilustration of a carrot',
        delayy: .5
    },
    {
        id: 'lemon',
        title: 'Fresh Fruit',
        description: "You won't find the juiciest and sweetest of fruits anywhere else",
        imageUrl: lemon,
        imagedescription: 'ilustration of a lemon',
        delayy: 1
    },
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
        pageNumber: '1/3',
        review: "Oh my God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. I found the ambiance to be very charming. The waitress did an excellent job. They got a new customer for life!"
    },
    {
        id: 'review2',
        reviewAuthor: 'Michael Downson',
        occupation: 'Food Critic',
        reviewerImage: reviewer1,
        pageNumber: '2/3',
        review: "Yumm-o! The entrees are simply to die for. The waiter did an excellent job"
    },
    {
        id: 'review3',
        reviewAuthor: 'Dutch Grimshaw',
        occupation: 'Blogger',
        reviewerImage: reviewer1,
        pageNumber: '3/3',
        review: "Best experience ever! This was one of the best mouth-watering steaks I've had grace my taste buds in a long time. Everything was just so yummy. Try out the huge selection of incredible appetizers. Everything I tried was bursting with flavor. I would eat here every day if I could afford it!"
    },
]

export const WindowSizeContext = createContext();
export const WindowSizeSliderPositionContext = createContext();

export default function Homepage(){
    const [sliderPosition, setSliderPosition] = useState('0px');
    const [postListData, setPostListData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBQdDX4ns83jUlnl9c_S2x13tFDCRdaFgs",
            authDomain: "food-zero-restaurant.firebaseapp.com",
            databaseURL: "https://food-zero-restaurant-default-rtdb.firebaseio.com",
            projectId: "food-zero-restaurant",
            storageBucket: "food-zero-restaurant.appspot.com",
            messagingSenderId: "433094515434",
            appId: "1:433094515434:web:68a5ef8b2d4600d38c1593",
            measurementId: "G-PH4Z3MYKGQ"
        };
        
        const app = initializeApp(firebaseConfig);
        
        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                retrieveAndOutputDatabase();
            })
            .catch((error) => {
                console.log(error.message);
            });
        
        const retrieveAndOutputDatabase = () => {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `/ListofArticles`)).then((snapshot) => {
                if (snapshot.exists()) {
                    populatePostListData(snapshot.val());
                }
            }).catch((error) => {
                console.log(error)
            });
        }
    
        const populatePostListData = (data) => {
            let info = Object.values(data);
            setPostListData([info[0], info[1]])
        }
    }, [])

    const [[showNavigation], [windowSize]] = useContext(NavigationContext);
    const review = useRef(null);

    useEffect(() => {
        setSliderPosition('0px');
    }, [windowSize]);

    useEffect(() => {
        let repeatMovementOfSlider = setInterval(() => {
            if (currentSlide < 3){
                setCurrentSlide(currentSlide => currentSlide + 1);
            } else if (currentSlide === 3){
                setCurrentSlide(1)
            }
        }, 3000);
        return () => {clearInterval(repeatMovementOfSlider)};
    }, [currentSlide])

    return (
        <>
        <header className='relative w-full h-fit flex justify-center bg-darkgreen' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <div className='relative w-full normal:w-[1349px] h-fit flex flex-col'>
                <Header />
                <div className='flex flex-col relative w-full h-fit min-h-[750px] minTablet:min-h-[500px] mt-[50px] px-[60px]'>
                        <motion.div animate={{ x: 600 }} initial={{ left: -600 }} transition={{ delay: 1, type: 'spring'}} className='relative flex flex-col justify-between w-full minTablet:w-[500px] mb-[70px] minTablet:mb-0 h-fit z-10'>
                            <h1 className='leading-tight text-white font-rufina text-xxxxxxxl smartPhone:text-xxxxxxxxl'>Healthy Eating is important part of lifestyle</h1>
                            <p className='w-3/5 text-base text-white font-lato'>By taking healthy meals, fruits and vegetables that are full of nutrients, we reduce the chances of diseases</p>
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
            </div>
        </header>
            <Navigation />
        <main className='overflow-hidden w-full h-fit flex flex-col items-center bg-darkgreen' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <section className='flex flex-col tablet:flex-row justify-between w-full normal:w-[1349px] h-fit min-h-[500px] my-[80px] px-[60px]'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} 
                    className='flex flex-col justify-between w-full minTablet:w-[490px] h-fit smartPhone:h-[470px]'>
                        <img className='w-full h-[200px] smartPhone:h-[300px] object-cover' src={cuisine2} alt='image of a cuisine' aria-hidden='true'/>
                        <h2 className='text-white font-rufina text-xxxxxl w-full smartPhone:w-[220px]'>
                            Start to plan your diet today
                        </h2>
                        <p className='text-white font-lato text-base w-full smartPhone:w-[250px]'>
                            Our menus are well-designed to help you eat healthy
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} 
                    className='flex flex-col justify-between w-[70%] smartPhone:w-[260px] h-fit smartPhone:h-[450px] mt-[100px] tablet:mt-0 self-end tablet:self-center'>
                        <p className='text-white font-lato text-base w-full smartPhone:w-[200px]'>
                            Get that peppery taste and tanginess in our meals made with specially curated spices and pepper
                        </p>
                        <img className='w-full h-[300px] smartPhone:h-[370px] object-cover mt-[20px] smartPhone:mt-0' src={saltpepper} alt='image of a cuisine' aria-hidden='true'/>
                    </motion.div>
                </section>
                <section className='overflow-hidden relative w-full h-fit min-h-[700px] bg-white flex justify-center'>
                    <div className='relative flex flex-col justify-between w-full normal:w-[1349px] h-fit px-[60px] pb-[150px]'>
                        <img className='absolute top-0 right-0 w-[500px] h-[550px]' src={leaves} alt='image of green leaves' aria-hidden='true'/>
                        <motion.div initial={{ top: -200 }}  whileInView={{ y: 200 }} transition={{ duration: 2 }} viewport={{ once: true }}
                        className='relative mt-[100px] w-full smartPhone:w-[235px] h-fit'>
                            <h2 className='font-bold text-black font-rufina text-xxxxxxxl'>Our Menu</h2>
                            <p className='text-base font-normal text-black font-lato'>Designed by only the best dieticians and master chefs one can find</p>
                        </motion.div>
                        <div className='flex flex-col justify-between w-full h-fit laptop:h-[400px] my-[50px]'>
                            {
                                priceListData.map((priceListData) => {
                                    return <Pricelist key={priceListData.id} {...priceListData}/>
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className='relative flex justify-center w-full h-fit min-h-[500px] bg-lightwhite'>
                    <div className='flex flex-col minLaptop:flex-row justify-between w-full normal:w-[1349px] h-fit pt-[50px] px-[60px]'>
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
                                Cooking is an art where every meal or dish made has a story to tell about the way of life of the people it represents. 
                            </p>
                            <img className='w-[150px] microPhone:w-[200px] smartPhone:w-[250px] h-[150px] microPhone:h-[200px] smartPhone:h-[250px] mt-[20px] ml-0 smartPhone:ml-[70px]' src={leaf} alt='skeleton image of a leaf' aria-hidden='true'/>
                        </motion.div>
                    </div>
                </section>
                <section className='w-full h-fit bg-white flex justify-center'>
                    <div className='w-full normal:w-[1349px] h-fit py-[120px] px-[60px]'>
                        <div className='flex flex-col justify-between w-full minTablet:flex-row h-fit'>
                            {
                                produceListData.map((produceListData) => {
                                    return <Producelisting key={produceListData.id} {...produceListData} />
                                })
                            }   
                        </div>
                    </div>
                </section>
                <section className='w-full h-fit flex justify-center bg-white'>
                    <div className='grid justify-between w-full normal:w-[1349px] h-fit grid-cols-full laptop:grid-cols-450 pt-[50px] pb-[150px] px-[60px]'>
                        {
                            postListData.map((postListData) => {
                                return <Postlisting key={postListData.imageUrl} {...postListData} />
                            })
                        }   
                    </div>
                </section>
                <Reservation />
                <section className='w-full h-fit flex justify-center bg-white'>
                    <div className='flex flex-col items-center w-full normal:w-[1349px] h-fit min-h-[500px] py-[60px] px-[60px]'>
                        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} viewport={{ once: true }}  
                        className='font-rufina font-bold text-xxxxxxxl text-center w-full smartPhone:w-[365px]'>
                            Calories Energy Balance
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} viewport={{ once: true }}  
                        className='text-base font-normal text-center font-lato'>
                            We get the energy to perfom our daily tasks through nutritious meals
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
                    </div>
                </section>
                <section className='w-full h-fit flex justify-center bg-white'>
                    <div className='w-full normal:w-[1349px] min-h-[500px] h-fit overflow-x-hidden'>
                        <motion.div ref={review} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                        className='flex flex-row w-fit h-full bg-white relative transition-[left] duration-1000' style={{left: sliderPosition}}>
                            <WindowSizeSliderPositionContext.Provider value={[[setSliderPosition], [currentSlide, setCurrentSlide]]}>
                                    {
                                        reviewListData.map((reviewListData) => {
                                            return <Reviewlisting key={reviewListData.id} {...reviewListData}/>
                                        })
                                    }
                                </WindowSizeSliderPositionContext.Provider>
                        </motion.div>
                    </div>
                </section>
        </main>
        <Footer />
        </>
    )
}