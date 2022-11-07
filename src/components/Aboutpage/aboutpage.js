import React, { useState, useEffect, useRef, useContext } from 'react';
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

const employeesData = [
    {
        id: 1,
        position: 'Restuarant Manager',
        name: 'Carson Hugn',
        aboutEmployee: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl.',
        imageUrl: Manager
    },
    {
        id: 2,
        position: 'Executive Chef',
        name: 'Jane Cooper',
        aboutEmployee: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.',
        imageUrl: ExecutiveChef
    }
]

export default function Aboutpage(){
    const [play, setPlay] = useState(false);
    const videoPlayer = useRef(null);

    const [[showNavigation]] = useContext(NavigationContext);

    useEffect(() => {
        if (play){
            videoPlayer.current.play();
        } else {
            videoPlayer.current.pause();
        }
    }, [play])

    return(
        <>
        <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <Header/>
            <img className='absolute w-full h-full object-cover' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
            <div className='absolute top-0 bottom-0 my-auto flex flex-col h-fit w-fit z-10 px-[60px] self-end'>
                <h1 className='text-white font-rufina font-bold text-xxxxxxxxl h-fit w-[400px]'>Who We Are</h1>
                <p className='text-white font-rufina font-bold text-xxl w-[500px]'>The most important thing for us is to give you the comfortable dining experience</p>
                <button className='w-[200px] h-[60px] border-2 border-white text-white font-rufina font-bold text-xxl mt-[20px] hover:bg-darkwhite'><a href='/portfolio'>Our Portfolio</a></button>
            </div>
        </header>
        <Navigation/>
        <main className='overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col pt-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
            <section className='relative flex flex-row justify-between items-center w-full h-fit px-[60px] py-[100px]'>
                <img className='absolute top-0 left-[38%]  w-[200px] h-[170px] object-cover' src={TomatoBlack} alt='illustration of a tomato' aria-hidden='true'/>
                <div className='w-[40%] h-fit flex flex-col'>
                    <h2 className='font-rufina font-bold text-xxxxxxxl'>Our Story</h2>
                    <p className='font-normal font-lato text-base w-[360px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
                </div>
                <img className='w-[50%] h-[400px] object-cover' src={ChefSeasoning} alt='image of a cuisine' aria-hidden='true'/>
            </section>
            <section className='relative flex flex-col w-full h-fit px-[60px] pt-[100px]'>
                {
                    employeesData.map((employeesData) => {
                        return <Employees key={employeesData.id} {...employeesData}/>
                    })
                }
            </section>
            <section className='relative w-full h-[500px] flex justify-center items-center'>
                <div className='absolute w-full h-full bg-darkgreen/70'></div>
                <video ref={videoPlayer} className='w-full h-full object-cover' loop>
                    <source src={ManCooking} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className='absolute h-fit text-center text-white'>
                    <h2 className='font-rufina font-bold text-xxxxxxxl'>It looks delicious</h2>
                    <p className='font-lato font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='w-[100px] h-[100px] mt-[50px]' onClick={() => {(play) ? setPlay(false) : setPlay(true)}}>
                        <img className='w-full h-full' src={(play) ? PauseButton : PlayButton} alt='play/pause button icon' aria-hidden='true'/>
                    </button>
                </div>
            </section>
            <section className='relative w-full h-fit px-[60px] py-[150px]'>
                <img className='absolute w-[400px] h-[319px] top-0 -right-[60px]' src={RosemaryRight} alt='illustration of a rosemary leaf' aria-hidden='true'/>
                <h2 className='font-rufina text-center font-bold text-xxxxxxxl'>Sophisticated Process</h2>
                <div className='flex flex-row items-center justify-between w-full h-fit mt-[150px] mb-[50px]'>
                    <img className='w-[45%] h-[400px] object-cover' src={ManSlicing} alt='image of a man slicing' aria-hidden='true'/>
                    <div className='flex flex-col w-[45%] h-full'>
                        <h3 className='font-rufina font-bold text-xxxxxxl'>01.Slice</h3>
                        <p className='font-lato font-normal text-base text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center h-fit w-full'>
                    <div className='flex flex-col-reverse w-[400px] h-fit mt-[50px] mb-[50px] mx-[70px]'>
                        <img className='w-[400px] h-[328px] object-cover' src={GrilledMeat} alt='image of a man slicing' aria-hidden='true'/>
                        <div className='flex flex-col h-full mb-[30px]'>
                            <h3 className='font-rufina font-bold text-xxxxxxl'>03.Bake</h3>
                            <p className='font-lato font-normal text-base text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-[45%] h-fit mb-[50px]'>
                        <img className='w-[400px] h-[328px] object-cover' src={SeasonedMeat} alt='image of a man slicing' aria-hidden='true'/>
                        <div className='flex flex-col h-full mt-[30px]'>
                            <h3 className='font-rufina font-bold text-xxxxxxl'>02.Pickled</h3>
                            <p className='font-lato font-normal text-base text-left w-[230px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.</p>
                        </div>
                    </div>
                </div>
                <img className='absolute w-[300px] h-[165px] bottom-0 -left-[60px]' src={RosemaryLeft} alt='illustration of a rosemary leaf' aria-hidden='true'/>
            </section>
            <Reservation />
        </main>
        <Footer/>
        </>
    )
}