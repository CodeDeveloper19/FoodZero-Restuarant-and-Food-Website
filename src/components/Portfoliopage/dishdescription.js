import React, { useContext, useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Navigation from "../Homepage/navigation";
import leftArrow from '../../images/Icons/leftarrowblack.svg';
import rightArrow from '../../images/Icons/rightarrowblack.svg';
import { NavigationContext } from "../../App";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import DotGrid from '../../images/Icons/dot_grid.svg'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, signInAnonymously} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


export default function Dishdescription(){
    const [[showNavigation]] = useContext(NavigationContext);
    const params = useParams();
    const [images, setImages] = useState([]);
    const [changeDish, setChangeDish] = useState([]);

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
                let childrenPath = ["images"];
                for (let i = 0, z = childrenPath.length; i < z; i++){
                    get(child(dbRef, `/Dishes/${params.dishname}/${childrenPath[i]}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            switch(childrenPath[i]){
                                case "images":
                                    setImages(snapshot.val());
                                    break;
                            }
                        }
                    }).catch((error) => {
                        console.log(error)
                    });
                }
            }
    }, []);

    return(
        <>
            <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <Header/>
                <img className='absolute object-cover w-full h-full' src={images[3]} alt='image of the interior of a restaurant' aria-hidden='true'/>
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                className='flex relative top-0 bottom-0 left-0 right-0 z-10 mx-auto minTablet:my-auto my-[100px] font-bold text-white font-rufina text-xxxxxxxl smartPhone:text-xxxxxxxxl h-fit w-fit max-w-[800px] text-center pb-[50px] px-[30px]'>{params.dishname}</motion.h1>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                className='relative w-fit h-fit flex flex-row items-center rotate-90 bottom-[-20px] left-0 right-0 mx-auto'>
                    <p className='text-white font-rufina text-xxxl'>Scroll</p>
                    <hr className='text-white border-dashed w-[120px] ml-[10px]'/>
                </motion.div>
            </header>
            <Navigation/>
            <main className="relative overflow-hidden w-full normal:w-[1349px] h-fit flex flex-col items-center mt-[100px]" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <section className='relative flex flex-col w-full h-fit px-[150px] pb-[120px]'>
                    <div className="w-full h-fit flex flex-row justify-between items-start z-10">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
                        className='object-cover w-[350px] h-[500px]' src={images[0]} alt='image of the portfolio dish 1' aria-hidden='true'/> 
                        <div className="flex flex-col min-h-full h-fit w-full max-w-[350px]">
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl">Melt in your Mouth</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </motion.p>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </motion.p>
                        </div>
                    </div>
                    <div className="relative top-[-100px] flex flex-row self-end h-fit w-fit">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }}
                        className='object-cover w-[500px] h-[600px]' src={images[1]} alt='image of the portfolio dish 2' aria-hidden='true'/>
                        <div className="flex flex-col h-fit w-full max-w-[300px] ml-[50px] mb-[70px] self-end">
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl">The Best Taste</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </motion.p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full h-fit">
                        <div className="h-fit w-full max-w-[300px]">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </motion.p>
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl mt-[10px] mb-[5px]">Cooking Suggestions</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </motion.p>
                        </div>
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }} 
                        className='object-cover w-full h-[550px] my-[100px]' src={images[2]} alt='image of the portfolio dish 3' aria-hidden='true'/>
                    </div>
                </section>
                <section className='flex flex-row items-end justify-between w-full h-fit px-[60px] py-[120px] bg-lightwhite'>
                    <div className="flex flex-col h-fit min-h-full">
                        <div className="flex flex-row h-fit items-center justify-center">
                            <button className="z-10 w-[40px] h-[40px] self-start microPhone:self-end mt-[10px] microPhone:mt-0">
                                <Link to={`/portfolio/`}><img className='w-full h-full' src={leftArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                            </button>
                            <p className="font-lato font-normal text-xxsm ml-[20px]">PREVIOUS PAGE</p>
                        </div>
                        <p className="font-rufina font-bold text-xxxxl">Strip Steak With Rosemary Butter</p>
                    </div>
                    <img className='object-cover w-[20px] h-[20px] mb-[20px]' src={DotGrid} alt='image of the interior of a restaurant' aria-hidden='true'/>
                    <div className="flex flex-col h-fit min-h-full">
                        <div className="flex flex-row-reverse h-fit items-center justify-center">
                            <button className="z-10 w-[40px] h-[40px] self-start microPhone:self-end mt-[10px] microPhone:mt-0">
                                <Link to={`/portfolio/`}><img className='w-full h-full' src={rightArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                            </button>
                            <p className="font-lato font-normal text-xxsm mr-[20px]">NEXT PAGE</p>
                        </div>
                        <p className="font-rufina font-bold text-xxxxl">Option of natural wine available</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}