import React, { useContext, useState } from "react";
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
import quote from '../../images/quote.png';
import nextArticle from '../../images/Blogpage/Article1/nextArticle.png';
import prevArticle from '../../images/Blogpage/Article1/prevArticle.png';
import rightArrow from '../../images/Icons/Icon_arrow-right.svg';
import leftArrow from '../../images/Icons/Icon_arrow-left.svg';
import Morearticles from "./morearticles";
import Comment from "./comment";
import dummyImage from '../../images/Blogpage/dummyImage.jpg';
import searchIcon from '../../images/Icons/Icon_search_black.svg';
import Categories from "./categories";
import Recentcomments from "./recentcomments";
import Archives from "./archives";
import Recentposts from "./recentposts";
import Tags from "./tags";
import threeBars from '../../images/Icons/bars-solid.svg';
import xicon from '../../images/NaviClose.svg';

const changeArticleData = [
    {
        imageUrl: prevArticle,
        arrow: leftArrow,
        text: 'PREVIOUS POST',
        title: '7 Reasons to Start Your Day With Lemon Water'
    },
    {
        imageUrl: nextArticle,
        arrow: rightArrow,
        text: 'NEXT POST',
        title: "12 Sparkling Wines We're Loving This Summer"
    }
]

const comments = [
    {
        commentAuthor: 'Leslie Alexander',
        commentAuthorImage: dummyImage,
        commentDate: 'March 12, 2022',
        commentTime: '8:08pm',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.'
    },
    {
        commentAuthor: 'Jane Cooper',
        commentAuthorImage: dummyImage,
        commentDate: 'March 22, 2022',
        commentTime: '10:58pm',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.'
    },
    {
        commentAuthor: 'Jenny Wilson',
        commentAuthorImage: dummyImage,
        commentDate: 'August 2, 2022',
        commentTime: '10:58pm',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.'
    }
]

const numOfArticles = [
    {
        tag: 'Fashion',
        number: 16
    },
    {
        tag: 'Food',
        number: 20
    },
    {
        tag: 'Music',
        number: 12
    },
    {
        tag: 'Travel',
        number: 36
    }
]

const recentComments = [
    {
        commentAuthor: 'Jenny Wilson',
        comment: 'Vegan baked oatmeal with fresh berries'
    },
    {
        commentAuthor: 'Ana',
        comment: '50 Foods That Are Super Healthy'
    },
    {
        commentAuthor: 'Camilla',
        comment: 'How Many Carbs Should You Eat for Weight Loss'
    }
]

const archives = [
    {
        date: 'November, 2022',
        number: 15
    },
    {
        date: 'October, 2022',
        number: 2
    },
    {
        date: 'September, 2022',
        number: 10
    },
]

const recentposts = [
    {
        imageUrl: nextArticle,
        title: 'Vegan baked oatmeal with fresh berries',
        author: 'Julie Christie',
        date: 'October 17, 2021'
    },
    {
        imageUrl: nextArticle,
        title: 'Making freshly baked bread for breakfast',
        author: 'Julie Christie',
        date: 'October 12, 2021'
    },
    {
        imageUrl: nextArticle,
        title: "Health benefits of garlic and ginger in one's meals",
        author: 'Julie Christie',
        date: 'October 10, 2021'
    },
    {
        imageUrl: nextArticle,
        title: 'Why you should stop taking cereals for breakfast',
        author: 'Julie Christie',
        date: 'October 09, 2021'
    }
]

const articletag = [
    {
        name: 'Design'
    },
    {
        name: 'Explore'
    },
    {
        name: 'Travel'
    }
]

const tag = [
    {
        name: 'Design'
    },
    {
        name: 'Food'
    },
    {
        name: 'Travel'
    },
    {
        name: 'Explore'
    },
    {
        name: 'Home'
    }
]

export default function Article(){
    const [showNavigation] = useContext(NavigationContext);
    const params = useParams();
    const [showAside, setShowAside] = useState(false);

    return(
        <>
            <header className='relative w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]' style={{display: (showNavigation[0]) ? 'none' : 'flex'}}>
                <Header/>
                <img className='absolute object-cover w-full h-full' src={HeaderImage} alt='image of a cuisine' aria-hidden='true'/>
                <div className="top-0 bottom-0 left-0 right-0 z-10 flex flex-col mx-[50px] minTablet:mx-auto my-[100px] minTablet:my-auto text-white h-fit w-fit">
                    <div className='w-[120px] h-[40px] border border-white flex justify-center items-center px-[10px] minTablet:ml-0 ml-[10px]'>
                        <p className='text-xl text-white font-rufina'>Food</p>
                    </div>
                    <h1 className="font-rufina text-white font-bold text-xxxxxxl mt-[30px] mb-[10px] w-full max-w-[550px]">{params.articletitle}</h1>
                    <motion.div
                    className='flex flex-col phone:flex-row justify-between items-start phone:items-center h-fit w-full max-w-[350px]'>
                        <img className='h-[70px] w-[70px]' src={authorImage} alt='image of the author' aria-hidden='true'/> 
                        <p className='text-white font-lato text-xxxsm mt-[7px] phone:mt-0'>Julie Christie</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0'>October 17,2022</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0'>3:33 pm</p>
                        <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex'></div>
                        <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0'>3 comments</p>
                    </motion.div>
                </div>
            </header>
            <Navigation/>
            <main className="relative w-full normal:w-[1349px] h-fit min-h-[1700px] flex flex-row px-[60px] tablet:!my-[100px]" style={{display: (showNavigation[0]) ? 'none' : 'flex', 
            margin: (showAside) ? '0px 0px' : '100px 0px'}}>
                <section className="h-fit w-full tablet:w-[75%] tablet:!flex flex-col" style={{display: (showAside) ? 'none' : 'flex'}}>
                    <nav className="w-full h-fit flex flex-row">
                        <ul className="flex flex-row w-full text-base font-normal h-fit font-lato">
                            <li className="text-darkwhite hover:underline"><Link to='/'>Home</Link></li>
                            <p className="text-darkwhite mx-[5px]">/</p>
                            <li className="text-darkwhite hover:underline"><Link to='/blog'>Blog</Link></li>
                            <p className="text-darkwhite mx-[5px]">/</p>
                            <li className="text-darkerwhite hover:underline"><Link to={`/blog/${params.articletitle}`}>{params.articletitle}</Link></li>
                        </ul>
                        <button className="flex tablet:hidden w-[20px] h-[20px] ml-[30px]" aria-expanded='true'
                        onClick={() => {
                            setShowAside(true);
                        }}>
                            <img className='h-full w-full' src={threeBars} alt='three horizontal bars icon' aria-hidden='true'/> 
                        </button>
                    </nav>
                    <p className="font-lato font-normal h-fit w-full text-base my-[50px]"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. 
                        Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                        Convallis pellentesque quis fringilla sagittis. 
                        Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                    </p>
                    <div className="grid justify-between w-full h-fit grid-cols-60">
                        <div className="col-start-1 col-end-2 row-start-1 row-end-5">
                            <img className="w-full h-full object-cover" src={cuisine1} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                        <div className="col-start-2 col-end-3 row-start-1 row-end-3 mb-[20px]">
                            <img className='w-full h-full object-cover'  src={cuisine2} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-5 mt-[20px]">
                            <img className='w-full h-full object-cover' src={cuisine3} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                    </div>
                    <p className="font-lato font-normal h-fit w-full max-w-[650px] text-base my-[50px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. 
                        urpis egestas ultricies purus auctor tincidunt lacus nunc. 
                        Convallis pellentesque quis fringilla sagittis. 
                        Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div className="relative w-full h-fit min-h-[100px] py-[100px] flex justify-center">
                        <img className='absolute right-[80px] minTablet:right-[0px] w-[90px] h-[70px] minTablet:w-[170px] minTablet:h-[150px]' src={quote} alt='semi-transparent illustration of a double quotation mark' aria-hidden='true'/>
                        <p className="font-bold font-lato text-xr italic text-green w-full max-w-[700px]"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</q></p>
                    </div>
                    <p className="font-lato font-normal h-fit w-full text-base mt-[50px] mb-[100px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                        Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                        Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus lorem id penatibus imperdiet. 
                    </p>
                    <div className="flex flex-col smartPhone:flex-row items-start smartPhone:items-end w-full h-fit">
                        <h2 className="font-bold font-rufina text-xxl mr-[10px]">Tags:</h2>
                        <div className="flex flex-row flex-wrap w-full h-fit">
                            {
                                articletag.map((articletag) => {
                                    return <Tags key={articletag.name} {...articletag}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col phone:flex-row w-full h-fit my-[30px] items-center">
                        <img className='h-[150px] w-[150px] self-start object-cover' src={authorImage} alt='image of the author' aria-hidden='true'/> 
                        <div className="flex flex-col w-full h-fit px-0 phone:px-[30px] mt-[20px] phone:mt-0">
                            <h3 className="font-bold font-rufina text-xxl">
                                Julie Christie
                            </h3>
                            <p className="text-base font-normal font-lato mt-[10px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
                            </p>
                        </div>
                    </div>
                </section>
                <aside className="absolute tablet:relative right-0 bg-lightwhite tablet:bg-white h-fit w-[100%] tablet:w-[25%] hidden tablet:!flex flex-col !pl-[30px] tablet:!pl-[50px] !pr-[30px] tablet:!pr-0"
                style={{display: (showAside) ? 'flex' : 'none', padding: (showAside) ? '100px 0px' : '0px 0px'}}>
                    <button className='absolute mb-[100px] w-[40px] h-[40px] top-[20px] left-[20px] flex tablet:hidden' aria-label='close navigation button' onClick={() => setShowAside(false)}>
                        <img className='w-full h-full' src={xicon} alt='image of an x' aria-hidden='true'/>
                    </button>
                    <form className="w-full max-w-[257px] h-fit border-b flex flex-row items-center self-end" onSubmit={(e) => {e.preventDefault()}}>
                        <input type="search" id="searcharticle" name="searcharticle" className="w-full h-[30px] outline-none font-lato font-normal text-base bg-lightwhite tablet:bg-white" placeholder="Search....."/>
                        <button className="w-[15px] h-[15px]" aria-label="search button" aria-expanded='false'>
                            <img className='w-full h-full' src={searchIcon} alt='search icon' aria-hidden='true'/>
                        </button>
                    </form>
                    <div className="w-full h-fit my-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Categories</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px]'/>
                        {
                            numOfArticles.map((numOfArticles) => {
                                return <Categories key={numOfArticles.tag} {...numOfArticles}/>
                            })
                        }
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Recent Comments</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px]'/>
                        {
                            recentComments.map((recentComments) => {
                                return <Recentcomments key={recentComments.commentAuthor} {...recentComments}/>
                            })
                        }
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Archives</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px]'/>
                        {
                            archives.map((archives) => {
                                return <Archives key={archives.date} {...archives}/>
                            })
                        }
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Recently Posted</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px] mb-[30px]'/>
                        {
                            recentposts.map((recentposts) => {
                                return <Recentposts key={recentposts.title} {...recentposts}/>
                            })
                        }
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Tags</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px] mb-[5px]'/>
                        <div className="flex flex-row flex-wrap w-full h-fit">
                            {
                                tag.map((tag) => {
                                    return <Tags key={tag.name} {...tag}/>
                                })
                            }
                        </div>
                    </div>
                </aside>
            </main>
            <section className="flex flex-row justify-between w-full normal:w-[1349px] h-fit bg-lightwhite mb-[100px]">
                    {
                        changeArticleData.map((changeArticleData) => {
                            return <Morearticles key={changeArticleData.arrow} {...changeArticleData}/>
                        })
                    }
            </section>
            <section className="flex justify-center w-full normal:w-[1349px] h-fit mb-[180px]">
                <div className="h-fit flex-col w-full max-w-[900px] mx-[50px]">
                    <h2 className="w-full font-bold text-center h-fit font-rufina text-xxxl">5 Comments</h2>
                    <div className="flex flex-col w-full h-fit pb-[100px] pt-[70px]">
                        {
                            comments.map((comments) => {
                                return <Comment key={comments.commentAuthor} {...comments}/>
                            })
                        }
                    </div>
                    <hr className='border-dashed w-full mb-[100px]'/>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <h2 className="w-full font-bold text-center h-fit font-rufina text-xxl mb-[100px]">Leave a Reply</h2>
                        <label htmlFor="comment" className="font-lato font-bold text-base">Comment</label>
                        <textarea id="comment" className="w-full h-[200px] border outline-0 mt-[20px] mb-[50px] p-[10px]"></textarea>
                        <label htmlFor="name" className="font-lato font-bold text-base">Name*</label>
                        <input type='text' id="name" className="w-full h-[50px] border mt-[20px] mb-[50px] p-[10px] outline-0"></input>
                        <label htmlFor="e-mail" className="font-lato font-bold text-base">Email*</label>
                        <input type='email' id="e-mail" className="w-full h-[50px] border mt-[20px] mb-[50px] p-[10px] outline-0"></input>
                        <label htmlFor="website" className="font-lato font-bold text-base">Website</label>
                        <input type='text' id="website" className="w-full h-[50px] border mt-[20px] mb-[70px] p-[10px] outline-0"></input>
                        <motion.button whileHover={{ scale: 1.05 }}
                        className='hover:bg-darkwhite border px-[10px] w-full max-w-[200px] min-h-[50px] h-fit font-rufina font-bold text-xxl' type='submit'>Post Comment</motion.button>  
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}