import React, { useContext } from "react";
import Header from "../header";
import Footer from "../footer";
import Navigation from "../Homepage/navigation";
import { useParams, Link } from "react-router-dom";
import { NavigationContext } from "../../App";
import HeaderImage from '../../images/Blogpage/Article1/article1headerimage.png';
import cuisine1 from '../../images/Blogpage/Article1/cuisine1.png';
import cuisine2 from '../../images/Blogpage/Article1/cuisine2.png';
import cuisine3 from '../../images/Blogpage/Article1/cuisine3.png';
import { motion } from "framer-motion";
import authorImage from '../../images/author1.png';

export default function Article(){
    const [showNavigation] = useContext(NavigationContext);
    const params = useParams();

    return(
        <>
            <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'flex' : 'none'}}>
                <Header/>
                <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>
                <div className="top-0 bottom-0 left-0 right-0 z-10 flex flex-col mx-auto my-auto text-white h-fit w-fit">
                    <div className='w-[120px] h-[40px] border border-white flex justify-center items-center px-[10px]'>
                        <p className='text-xl text-white font-rufina'>Food</p>
                    </div>
                    <h1 className="font-rufina text-white font-bold text-xxxxxxl mt-[30px] w-[550px]">{params.articletitle}</h1>
                    <motion.div
                    className='flex flex-col phone:flex-row justify-between items-start phone:items-center h-fit w-[350px]'>
                        <img className='h-[70px] w-[70px]' src={authorImage} alt='image of the author' aria-hidden='true'/> 
                        <p className='text-white font-lato text-xxxsm'>Julie Christie</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[5px] phone:mt-0'>October 17,2022</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[5px] phone:mt-0'>3:33 pm</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[5px] phone:mt-0'>3 comments</p>
                    </motion.div>
                </div>
            </header>
            <Navigation/>
            <main className="w-full normal:w-[1349px] h-fit flex flex-row my-[100px] px-[60px]" style={{display: (showNavigation) ? 'flex' : 'none'}}>
                <section className="h-fit w-[70%] flex flex-col">
                    <nav className="w-full h-fit">
                        <ul className="flex flex-row w-full text-base font-normal h-fit font-lato">
                            <li className="text-darkwhite hover:underline"><Link to='/'>Home</Link></li>
                            <p className="text-darkwhite mx-[5px]">/</p>
                            <li className="text-darkwhite hover:underline"><Link to='/blog'>Blog</Link></li>
                            <p className="text-darkwhite mx-[5px]">/</p>
                            <li className="text-darkerwhite hover:underline"><Link to={`/blog/${params.articletitle}`}>{params.articletitle}</Link></li>
                        </ul>
                    </nav>
                    <p className="font-lato font-normal h-fit w-full text-base my-[50px]"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. 
                        Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. 
                        Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                    </p>
                    <div className="grid justify-between w-full grid-rows-40 grid-cols-70 h-fit gap-y-10">
                        <img className="col-start-1 col-end-2 row-start-1 row-end-4" src={cuisine1} alt='image of a cuisine' aria-hidden='true'/> 
                        <img className='col-start-2 col-end-3 row-start-1 row-end-4'  src={cuisine2} alt='image of a cuisine' aria-hidden='true'/> 
                        {/* <img className='col-start-2 col-end-3 row-start-3 row-end-4' src={cuisine3} alt='image of a cuisine' aria-hidden='true'/>  */}
                    </div>
                </section>
                <aside className="h-fit w-[30%] flex flex-col">

                </aside>
            </main>
            <Footer />
        </>
    )
}