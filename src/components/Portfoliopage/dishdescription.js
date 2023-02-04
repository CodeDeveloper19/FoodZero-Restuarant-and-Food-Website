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
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth, signInAnonymously} from "firebase/auth";


export default function Dishdescription(){
    const [[showNavigation]] = useContext(NavigationContext);
    const params = useParams();
    const [images, setImages] = useState([]);
    const [changeDish, setChangeDish] = useState([]);
    const [text, setText] = useState([]);
    const [dishChanged, setDishChanged] = useState(undefined);

    useEffect(() => {
        if (dishChanged === true || dishChanged === undefined){
            console.log(dishChanged)
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
                    let childrenPath = ["images", "text", "changeDishes"];
                    for (let i = 0, z = childrenPath.length; i < z; i++){
                        get(child(dbRef, `/Dishes/All/${params.dishname}/${childrenPath[i]}`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                switch(childrenPath[i]){
                                    case "images":
                                        setImages(snapshot.val());
                                        break;
                                    case "text":
                                        setText(snapshot.val());
                                        break;
                                    case "changeDishes":
                                        setChangeDish(Object.values(snapshot.val()));
                                        break;
                                }
                            }
                        }).catch((error) => {
                            console.log(error)
                        });
                    }
                }
        }
        setDishChanged(false);
        console.log(dishChanged)
    }, [dishChanged]);

    return(
        <>
            <header className="relative w-full h-fit flex justify-center" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <img className='absolute object-cover w-full h-full' src={images[3]} alt='image of our portfolio dish' aria-hidden='true'/>
                <div className='w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
                    <Header/>
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                    className='flex relative top-0 bottom-0 left-0 right-0 z-10 mx-auto minTablet:my-auto my-[100px] font-bold text-white font-rufina text-xxxxxxxl smartPhone:text-xxxxxxxxl h-fit w-fit max-w-[800px] text-center pb-[50px] px-[30px]'>{params.dishname}</motion.h1>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                    className='relative w-fit h-fit flex flex-row items-center rotate-90 bottom-[-20px] left-0 right-0 mx-auto'>
                        <p className='text-white font-rufina text-xxxl'>Scroll</p>
                        <hr className='text-white border-dashed w-[120px] ml-[10px]'/>
                    </motion.div>
                </div>
            </header>
            <Navigation/>
            <main className="relative overflow-hidden w-full h-fit flex flex-col items-center mt-[100px]" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <section className='relative flex flex-col w-full normal:w-[1349px] h-fit px-[100px] tablet:px-[150px] pb-[120px]'>
                    <div className="w-full h-fit flex flex-col-reverse tablet:flex-row justify-between items-start z-10">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }}
                        className='object-cover w-[85px] h-[130px] smartPhone:w-[150px] smartPhone:h-[200px] phone:w-[180px] phone:h-[260px] minTablet:w-[330px] minTablet:h-[380px] tablet:w-[250px] tablet:h-[400px] laptop:w-[350px] laptop:h-[500px]' src={images[0]} alt='image of the portfolio dish 1' aria-hidden='true'/> 
                        <div className="flex flex-col min-h-full h-fit w-full max-w-[350px] ml-[30px] mb-[50px] tablet:mb-0">
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl">Melt in your Mouth</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">{text[0]}</motion.p>
                        </div>
                    </div>
                    <div className="relative top-[-60px] smartPhone:top-[-100px] flex flex-col tablet:flex-row self-end h-fit w-fit">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }}
                        className='object-cover w-[200px] smartPhone:w-[300px] h-[130px] smartPhone:h-[200px] phone:h-[250px] minTablet:w-[450px] minTablet:h-[320px] tablet:w-[320px] tablet:h-[420px] laptop:w-[500px] laptop:h-[600px] ml-[20px] minLaptop:ml-0' src={images[1]} alt='image of the portfolio dish 2' aria-hidden='true'/>
                        <div className="flex flex-col h-fit w-full max-w-[300px] ml-[30px] minLaptop:ml-[50px] mb-0 tablet:mb-[70px] self-end mt-[50px] tablet:mt-0">
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl">The Best Taste</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">{text[1]}</motion.p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full h-fit">
                        <div className="h-fit w-full max-w-[300px]">
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">{text[2]}</motion.p>
                            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }}
                            className="font-rufina font-bold text-xxxl mt-[10px] mb-[5px]">Cooking Suggestions</motion.h2>
                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }} viewport={{ once: true }}
                            className="font-lato font-normal text-base">{text[3]}</motion.p>
                        </div>
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2 }} viewport={{ once: true }} 
                        className='object-cover w-full h-[130px] smartPhone:h-[150px] phone:h-[250px] minTablet:h-[350px] tablet:h-[400px] minLaptop:h-[550px] my-[100px]' src={images[2]} alt='image of the portfolio dish 3' aria-hidden='true'/>
                    </div>
                </section>
                <section className="w-full h-fit flex justify-center bg-lightwhite">
                    <div className='flex flex-row justify-between w-full normal:w-[1349px] h-fit px-[60px] py-[120px] text-center'>
                        <div className="flex flex-col justify-between max-w-[40%]">
                            <div className="flex flex-row h-fit items-center justify-center mb-[20px]">
                                <button className="z-10 w-[20px] h-[20px] tablet:w-[40px] tablet:h-[40px] self-start microPhone:self-end" onClick={() => {
                                    setDishChanged(true);
                                }}>
                                    <Link to={`/about/portfolio/${changeDish[1]}`}><img className='w-full h-full' src={leftArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                                </button>
                                <p className="font-lato font-normal text-sm tablet:text-xxsm ml-[20px] hidden smartPhone:flex">PREVIOUS PAGE</p>
                            </div>
                            <p className="font-rufina font-bold text-base phone:text-xr tablet:text-xxxxl my-auto">{changeDish[1]}</p>
                        </div>
                        <img className='object-cover w-[20px] h-[20px]' src={DotGrid} alt='image of the interior of a restaurant' aria-hidden='true'/>
                        <div className="flex flex-col justify-between max-w-[40%]">
                            <div className="flex flex-row-reverse h-fit items-center justify-center mb-[20px]">
                                <button className="z-10 w-[20px] h-[20px] tablet:w-[40px] tablet:h-[40px] self-start microPhone:self-end" onClick={() => {
                                    setDishChanged(true);
                                }}>
                                    <Link to={`/about/portfolio/${changeDish[0]}`}><img className='w-full h-full' src={rightArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                                </button>
                                <p className="font-lato font-normal text-sm tablet:text-xxsm mr-[20px] hidden smartPhone:flex">NEXT PAGE</p>
                            </div>
                            <p className="font-rufina font-bold text-base phone:text-xr tablet:text-xxxxl my-auto">{changeDish[0]}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}