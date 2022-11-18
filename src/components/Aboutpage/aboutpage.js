import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';
import Employees from './employees';
import Reservation from '../reservation';
import Navigation from '../Homepage/navigation';
import HeaderImage from '../../images/Aboutpage/header_image.png';
import TomatoBlack from '../../images/SeasoningsAndFruits/TomatoBlack.svg';
import ChefSeasoning from '../../images/Aboutpage/chef_seasoning.png';
import Manager from '../../images/Aboutpage/manager.png';
import ExecutiveChef from '../../images/Aboutpage/executive_chef.png';
import ManCooking from '../../images/Aboutpage/man_cooking.mp4';
import PlayButton from '../../images/Aboutpage/play_button.png';
import PauseButton from '../../images/Aboutpage/pause_button.png';
import ManSlicing from '../../images/Aboutpage/man_slicing.png';
import GrilledMeat from '../../images/Aboutpage/grilling_meat.png';
import SeasonedMeat from '../../images/Aboutpage/seasoned_meat.png';
import RosemaryRight from '../../images/../images/SeasoningsAndFruits/rosemary_right.svg';
import RosemaryLeft from '../../images/../images/SeasoningsAndFruits/rosemary_left.svg';
import { NavigationContext } from '../../App';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const employeesData = [
    {
        id: 1,
        position: 'Restuarant Manager',
        name: 'Carson Hugn',
        aboutEmployee: 'Started his journey with us five years ago as the manager of our great establishment where he oversees our growth and success.',
        imageUrl: Manager
    },
    {
        id: 2,
        position: 'Executive Chef',
        name: 'Alex Cooper',
        aboutEmployee: 'The founder and master chef of FoodZero. He has over twenty years of expereince in the culinary and cooking industry.',
        imageUrl: ExecutiveChef
    }
]

export default function Aboutpage(){
    const [play, setPlay] = useState(undefined);
    const videoPlayer = useRef(null);

    const text = useRef(null);
    const typed = useRef(null);
    const text2 = useRef(null);
    const typed2 = useRef(null);

    const [[showNavigation]] = useContext(NavigationContext);

    useEffect(() => {
        if (play || play === undefined){
            videoPlayer.current.play();
        } else {
            videoPlayer.current.pause();
        } 
    }, [play]);

    useEffect(() => {
        const options = {
            strings: [
            'Who We Are',
          ],
          typeSpeed: 200,
          showCursor: false,
          loop: false
        };
        
        typed.current = new Typed(text.current, options);

        const options2 = {
            strings: [
            'Our Story',
          ],
          typeSpeed: 200,
          backSpeed: 200,
          showCursor: false,
          loop: true
        };
        
        typed2.current = new Typed(text2.current, options2);
        
        return () => {
          typed.current.destroy();
          typed2.current.destroy();
        }
      }, [])

    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <Header/>
            <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
            <div className='relative top-0 bottom-0 my-auto flex flex-col h-fit w-fit z-10 py-[100px] px-[60px] self-end'>
                <h1 ref={text} className='text-white font-rufina font-bold text-xxxxxxxxl h-fit w-full minTablet:w-[400px]'>Who We Are</h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }} 
                className='text-white font-rufina font-bold text-xxl w-full minTablet:w-[500px]'>
                    The most important thing for us is to give you the comfortable dining experience you deserve
                </motion.p>
                <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }} 
                className='hover:!scale-105 w-full microPhone:w-[200px] px-[20px] h-fit min-h-[60px] border-2 border-white text-white font-rufina font-bold text-xxl mt-[20px] hover:bg-darkwhite'>
                    <Link to='/about/portfolio'>Our Portfolio</Link>
                </motion.button>
            </div>
        </header>
        <Navigation/>
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <section className='relative flex flex-col minTablet:flex-row justify-between items-center w-full h-fit px-[60px] py-[100px]'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5}} viewport={{ once: true }} 
                className='absolute top-[50px] phone:top-0 left-[50%] phone:left-[38%] w-[101px] phone:w-[150px] tablet:w-[200px] h-[85px] phone:h-[128px] tablet:h-[170px] object-cover' src={TomatoBlack} alt='illustration of a tomato' aria-hidden='true'/>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2}} viewport={{ once: true }} 
                className='w-full minTablet:w-[40%] h-fit flex flex-col'>
                    <h2 ref={text2} className='font-bold font-rufina text-xxxxxxxl'></h2>
                    <p className='font-normal font-lato text-base w-full minLaptop:w-[360px]'>We started as a one man business where our founder, Alex, served the best European and African cuisines from his little kitchen. Ten years down the line, FoodZero has grown to become one of the best restaurants in Canada with over fifty employees.</p>
                </motion.div>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1}} viewport={{ once: true }} 
                className='w-full minTablet:w-[50%] h-[200px] smartPhone:h-[250px] phone:h-[300px] laptop:h-[400px] object-cover mt-[100px] minTablet:mt-0' src={ChefSeasoning} alt='image of a cuisine' aria-hidden='true'/>
            </section>
            <section className='relative flex flex-col w-full h-fit px-[60px] pt-[100px] pb-[100px] tablet:pb-0'>
                {
                    employeesData.map((employeesData) => {
                        return <Employees key={employeesData.id} {...employeesData}/>
                    })
                }
            </section>
            <section className='relative w-full h-[500px] flex justify-center items-center'>
                <div className='absolute w-full h-full bg-darkgreen/70'></div>
                <video ref={videoPlayer} className='object-cover w-full h-full' loop autoPlay muted>
                    <source src={ManCooking} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className='absolute text-center text-white h-fit'>
                    <h2 className='font-bold font-rufina text-xxxxxxxl'>It looks delicious</h2>
                    <p className='text-base font-normal font-lato'>Who wouldn't want a taste of class?</p>
                    <button className='w-[100px] h-[100px] mt-[50px]' onClick={() => {(play || play === undefined) ? setPlay(false) : setPlay(true)}}>
                        <img className='w-full h-full' src={(play || play === undefined) ? PauseButton : PlayButton} alt='play/pause button icon' aria-hidden='true'/>
                    </button>
                </div>
            </section>
            <section className='relative w-full h-fit px-[60px] py-[150px] overflow-hidden'>
                <img className='absolute w-[251px] tablet:w-[400px] h-[200px] tablet:h-[319px] top-0 -right-[60px]' src={RosemaryRight} alt='illustration of a rosemary leaf' aria-hidden='true'/>
                <motion.h2 initial={{ top: -220 }} whileInView={{ y: 220 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
                className='relative font-bold text-center font-rufina text-xxxxxl smartPhone:text-xxxxxxxl'>Sophisticated Process</motion.h2>
                <div className='flex flex-col minTablet:flex-row items-center justify-between w-full h-fit mt-[150px] mb-[50px]'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                    className='w-full minTablet:w-[50%] tablet:w-[45%] h-[250px] smartPhone:h-[300px] tablet:h-[400px] object-cover' src={ManSlicing} alt='image of a man slicing' aria-hidden='true'/>
                    <div className='flex flex-col w-full minTablet:w-[45%] h-full mt-[30px] minTablet:mt-0'>
                        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                        className='font-bold font-rufina text-xxxxl smartPhone:text-xxxxxxl'>01.Slice</motion.h3>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }}
                        className='text-base font-normal text-left font-lato'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. 
                        </motion.p>
                    </div>
                </div>
                <div className='flex flex-col-reverse items-center justify-between w-full minTablet:flex-row h-fit'>
                    <div className='flex flex-col-reverse w-full minTablet:w-[400px] h-fit mt-0 minTablet:mt-[50px] mb-[50px] mx-[40px] tablet:mx-[70px]'>
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 3.5 }} viewport={{ once: true }}
                        className='w-full h-[178px] smartPhone:h-[228px] tablet:h-[328px] object-cover' src={GrilledMeat} alt='image of a man slicing' aria-hidden='true'/>
                        <div className='flex flex-col h-full mb-[30px]'>
                            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2.5 }} viewport={{ once: true }}
                            className='font-bold font-rufina text-xxxxl smartPhone:text-xxxxxxl'>
                                03.Bake
                            </motion.h3>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 3 }} viewport={{ once: true }}
                            className='text-base font-normal text-left font-lato'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
                            </motion.p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-full minTablet:w-[45%] h-fit mb-[50px]'>
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                        className='w-full minTablet:w-[400px] h-[178px] smartPhone:h-[228px] tablet:h-[328px] object-cover' src={SeasonedMeat} alt='image of a man slicing' aria-hidden='true'/>
                        <div className='flex flex-col h-full mt-[30px]'>
                            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className='font-bold font-rufina text-xxxxl smartPhone:text-xxxxxxl'>
                                02.Pickled
                            </motion.h3>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }}
                            className='font-lato font-normal text-base text-left w-full minTablet:w-[230px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                            </motion.p>
                        </div>
                    </div>
                </div>
                <img className='absolute w-[182px] tablet:w-[300px] h-[100px] tablet:h-[165px] bottom-0 -left-[60px]' src={RosemaryLeft} alt='illustration of a rosemary leaf' aria-hidden='true'/>
            </section>
            <Reservation />
        </main>
        <Footer/>
        </>
    )
}