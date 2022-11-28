import React, { useContext, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Navigation from "../Homepage/navigation";
import { NavigationContext } from "../../App";
import HeaderImage from '../../images/Blogpage/HeaderImage.png'
import { Link } from "react-router-dom";
import Postlisting from "../Homepage/postlisting";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, signInAnonymously} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


export default function Blogpage(){
    const [[showNavigation]] = useContext(NavigationContext);
    const [postListData, setPostListData] = useState([]);

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
            setPostListData([...info])
        }
    }, [])


    return(
        <>
            <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <Header/>
                <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of the interior of a restaurant' aria-hidden='true'/>
                <div className="top-0 bottom-0 left-0 right-0 z-10 flex flex-col w-full mx-auto my-auto text-white h-fit">
                    <h1 className="w-full font-bold text-center text-white font-rufina text-xxxxxxxxl h-fit">Our Blog</h1>
                    <p className="w-full text-base font-normal text-center text-white font-lato h-fit">Come and learn how we do some of our cooking</p>
                </div>
            </header>
            <Navigation/>
            <main className="w-full normal:w-[1349px] h-fit flex flex-col items-center my-[100px] px-[60px]" style={{display: (showNavigation) ? 'none' : 'flex'}}>
                <nav className="w-full h-fit">
                    <ul className="flex flex-row w-full text-base font-normal h-fit font-lato">
                        <li className="text-darkwhite hover:underline"><Link to='/'>Home</Link></li>
                        <p className="text-darkwhite mx-[5px]">/</p>
                        <li className="text-darkerwhite hover:underline"><Link to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
                <section className="grid justify-between w-full h-fit grid-cols-full laptop:grid-cols-450">
                    {
                        postListData.map((postListData) => {
                            return <Postlisting key={postListData.postTitle} {...postListData} />
                        })
                    }  
                </section>
            </main>
            <Footer />
        </>
    )
}