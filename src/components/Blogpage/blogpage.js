import React, { useContext } from "react";
import Header from "../header";
import Footer from "../footer";
import Navigation from "../Homepage/navigation";
import { NavigationContext } from "../../App";
import HeaderImage from '../../images/Blogpage/HeaderImage.png'
import { Link } from "react-router-dom";
import Postlisting from "../Homepage/postlisting";
import postimage1 from '../../images/postimage1.png';
import postimage2 from '../../images/postimage2.png';
import author1 from '../../images/author1.png';
import author2 from '../../images/author2.png';

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
    },
    {
        id: 'post3',
        imageUrl: postimage2,
        postAuthor: 'Jenifier Lopez',
        authorImage: author2,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2, 
        postTitle: "The Best Style of Dough for Dumplings",
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'post4',
        imageUrl: postimage2,
        postAuthor: 'Theresa Webb',
        authorImage: author2,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2,
        postTitle: "7 Reasons to Start Your Day With Lemon Water",
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'post5',
        imageUrl: postimage2,
        postAuthor: 'Cody Fisher',
        authorImage: author2,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2,
        postTitle: "Three Ideas for Cooking Goat Meat at Home",
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'post6',
        imageUrl: postimage2,
        postAuthor: 'Dianne Russell',
        authorImage: author2,
        postDate: 'October 17,2022',
        postTime: '3:33 pm',
        numberOfComments: 2,
        postTitle: "12 Sparkling Wines We're Loving This Summer",
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
]


export default function Blogpage(){
    const [[showNavigation]] = useContext(NavigationContext);

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
                            return <Postlisting key={postListData.id} {...postListData} />
                        })
                    }  
                </section>
            </main>
            <Footer />
        </>
    )
}