import React, { useContext, useState, useEffect, createContext, useRef} from "react";
import Header from "../header";
import Footer from "../footer";
import Navigation from "../Homepage/navigation";
import { useParams, Link } from "react-router-dom";
import { NavigationContext } from "../../App";
import { motion } from "framer-motion";
import quote from '../../images/quote.png';
import Morearticles from "./morearticles";
import Comment from "./comment";
import searchIcon from '../../images/Icons/Icon_search_black.svg';
import Categories from "./categories";
import Recentcomments from "./recentcomments";
import Archives from "./archives";
import Recentposts from "./recentposts";
import Tags from "./tags";
import SearchResults from "./searchresult";
import threeBars from '../../images/Icons/bars-solid.svg';
import xicon from '../../images/NaviClose.svg';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, update } from "firebase/database";
import { getAuth, signInAnonymously} from "firebase/auth";

export default function Article(){
    const [showNavigation] = useContext(NavigationContext);
    const params = useParams();
    const email = useRef(null);
    const name = useRef(null);
    const comment = useRef(null);
    const website = useRef(null);
    const searchBox = useRef(null);
    const [callData, setCallData] = useState(false);
    const [showAside, setShowAside] = useState(false);
    const [articleTitle, setArticleTitle] = useState([]);
    const [articleImages, setArticleImages] = useState([]);
    const [authorDetails, setAuthorDetails] = useState([]);
    const [changeArticleData, setChangeArticleData] = useState([]);
    const [articleText, setArticleText] = useState([]);
    const [archives, setArchives] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [articleTags, setArticleTags] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [recentComments, setRecentComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComments, setNewComments] = useState(undefined);
    const [newRecentComments, setNewRecentComments] = useState(undefined);
    const [allArticles, setAllArticles] = useState([]);
    const [articles, setArticles] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [userSearch, setUserSearch] = useState(null);

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
        
        initializeApp(firebaseConfig);
        
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
            let childrenPath = ["articleTitle", "articleImages", "authorDetails", "changeArticleData", "articleText", "articleTags", "recentComments", "comments"];
            let parentPath = ["Archives", "Categories", "AllTags", "RecentPosts"]
            for (let i = 0, z = childrenPath.length; i < z; i++){
                get(child(dbRef, `/AllArticles/${params.articletitle}/${childrenPath[i]}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        switch(childrenPath[i]){
                            case "articleTitle":
                                setArticleTitle(Object.values(snapshot.val()));
                                break;
                            case "articleImages":
                                setArticleImages(Object.values(snapshot.val()));
                                break;
                            case "authorDetails":
                                setAuthorDetails(Object.values(snapshot.val()));
                                break;
                            case "changeArticleData":
                                setChangeArticleData(Object.values(snapshot.val()));
                                break;
                            case "articleText":
                                setArticleText(Object.values(snapshot.val()));
                                break;
                            case "articleTags":
                                setArticleTags(snapshot.val());
                                break;
                            case "recentComments":
                                setRecentComments(snapshot.val());
                                break;
                            case "comments":
                                setComments(snapshot.val());
                                break;
                        }
                    }
                }).catch((error) => {
                    console.log(error)
                });
            }
            for (let i = 0, z = parentPath.length; i < z; i++){
                get(child(dbRef, `/${parentPath[i]}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        switch(parentPath[i]){
                            case "Archives":
                                setArchives(snapshot.val());
                                break;
                            case "Categories":
                                setCategories(snapshot.val());
                                break;
                            case "AllTags":
                                setTags(snapshot.val());
                                break;
                            case "RecentPosts":
                                setRecentPosts(snapshot.val());
                                break;
                        }
                    }
                }).catch((error) => {
                    console.log(error)
                });
            }
            get(child(dbRef, `/AllArticles`)).then((snapshot) => {
                if (snapshot.exists()) {
                    let tempdata = [];
                    setArticles(Object.keys(snapshot.val()));
                    for (let i = 0, z = Object.keys(snapshot.val()).length; i < z; i++){
                        tempdata.push(
                            {
                                "title": `${Object.keys(snapshot.val())[i]}`,
                                "hide": undefined
                            }
                        )
                    }
                    setAllArticles(tempdata);
                }
            }).catch((error) => {
                console.log(error)
            });
            setCallData(false)
        }
    }, [callData]);

    useEffect(() => {
        if(newComments !== undefined){
            updateDatabaseComments();
        }
    }, [newComments]);

    useEffect(() => {
        if(newRecentComments !== undefined){
            updateDatabaseRecentComments()
        }
    }, [newRecentComments]);

    useEffect(() => {
        if(isSearching === false){
            searchBox.current.value = '';
        }
    }, [isSearching]);

    useEffect(() => {
        if (userSearch !== null && articles !== null && allArticles !== null){
            for (let i = 0; i < articles.length; i++){
                if (articles[i].toLowerCase().includes(userSearch) || userSearch === ''){
                    allArticles[i].hide = true;
                } else {
                    allArticles[i].hide = false;
                }
            }
        }
    }, [userSearch, articles, allArticles]);
    
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (searchBox.current && !searchBox.current.contains(event.target) && isSearching === true) {
            const timer = setTimeout(() => {
                setIsSearching(false);
              }, 100);
              return () => clearTimeout(timer); 
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [searchBox, isSearching, userSearch]);
      
    const createNewComment = (time, currentDate) => {
        setNewComments([
            ...comments,
            {
                "comment": comment.current.value,
                "commentAuthor": comment.current.value,
                "commentAuthorImage": "https://github.com/CodeDeveloper19/Images/blob/main/FoodZero/AuthorImages/blank-profile-picture-973460_640.png?raw=true",
                "commentDate": currentDate,
                "commentTime": time
            }
        ]);
        setComments([
            ...comments,
            {
                "comment": comment.current.value,
                "commentAuthor": name.current.value,
                "commentAuthorImage": "https://github.com/CodeDeveloper19/Images/blob/main/FoodZero/AuthorImages/blank-profile-picture-973460_640.png?raw=true",
                "commentDate": currentDate,
                "commentTime": time
            }
        ])
    };

    const createNewRecentComment = () => {
        if (recentComments.length < 3){
            setNewRecentComments([
                ...recentComments,
                {
                    "comment": comment.current.value,
                    "commentAuthor": name.current.value
                }
            ]);
            setRecentComments([
                ...recentComments,
                {
                    "comment": comment.current.value,
                    "commentAuthor": name.current.value
                }
            ])
        } else {
            recentComments.shift();
            setNewRecentComments([
                ...recentComments,
                {
                    "comment": comment.current.value,
                    "commentAuthor": name.current.value
                }
            ]);
            setRecentComments([
                ...recentComments,
                {
                    "comment": comment.current.value,
                    "commentAuthor": name.current.value
                }
            ])
        }
    };

    const updateDatabaseComments = () => {
        const db = getDatabase();
        const updates = {};
        updates['/AllArticles/' + params.articletitle + '/comments'] = comments;
        return update(ref(db), updates);
    };

    const updateDatabaseRecentComments = () => {
        const db = getDatabase();
        const updates = {};
        updates['/AllArticles/' + params.articletitle + '/recentComments'] = newRecentComments;
        return update(ref(db), updates);
    };

    const checkIfComplete = () => {
        if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email.current.value)){
            checkDateAndTimeOnline();
        } else {
            alert("You have entered an invalid email address!");
        }
    }

    const checkDateAndTimeOnline = () => {
        fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6a3b77d7f8984eb4ae1518bc4c8b5e82&ip=192.99.34.64')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.time_zone.current_time.split(" ")[0];
            let preTime = data.time_zone.current_time.split(" ")[1];
            preTime = preTime.split(":");
            let time = convertTimeFormat(preTime);
            createNewComment(time, currentDate);
            createNewRecentComment();
            updateNumberOfComments();
        })
        .catch(error => {
          console.log(error.message);
        })
    };

    const updateNumberOfComments = () => {
        console.log("A")
        const db = getDatabase();
        const updates = {};
        updates['/ListofArticles/' + params.articletitle + '/numberOfComments'] = comments.length + 1;
        console.log("B")
        return update(ref(db), updates);
    }

    const convertTimeFormat = (preTime) => {
        let hour = parseInt(preTime[0]) % 12;
        let amPm = parseInt(preTime[0]) / 12;
        if (amPm > 1){
            amPm = 'pm'
        } else if (amPm === 1){
            hour = 12;
            amPm = 'pm';
        } else {
            amPm = 'am'
        }
        return `${hour}:${preTime[1]}${amPm}`
    };

    const searching = (event) => {
        let input;
        input = event.target.value.toLowerCase();
        setUserSearch(input);
    }

    return(
        <>
            <header className="relative w-full h-fit flex justify-center" style={{display: (showNavigation[0]) ? 'none' : 'flex'}}>
                <img className='absolute object-cover w-full h-full' src={articleImages[3]} alt='image of a cuisine' aria-hidden='true'/>
                <div className='w-full normal:w-[1349px] h-fit min-h-[657px] flex flex-col pb-[100px]'>
                    <Header/>
                    <div className="top-0 bottom-0 left-0 right-0 z-10 flex flex-col mx-[50px] minTablet:mx-auto my-[100px] minTablet:my-auto text-white h-fit w-fit">
                        <div className='w-[120px] h-[40px] border border-white flex justify-center items-center px-[10px] minTablet:ml-0 ml-[10px]'>
                            <p className='text-xl text-white font-rufina'>{articleTitle[2]}</p>
                        </div>
                        <h1 className="font-rufina text-white font-bold text-xxxxxxl mt-[30px] mb-[10px] w-full max-w-[550px]">{params.articletitle}</h1>
                        <motion.div
                        className='flex flex-col phone:flex-row justify-between items-start phone:items-center h-fit w-full max-w-fit'>
                            <img className='h-[70px] w-[70px] rounded-full object-cover' src={articleTitle[0]} alt='image of the author' aria-hidden='true'/> 
                            <p className='text-white font-lato text-xxxsm mt-[7px] phone:mt-0 ml-[10px]'>{articleTitle[1]}</p>
                            <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                            <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0 ml-[10px]'>{articleTitle[4]}</p>
                            <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                            <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0 ml-[10px]'>{articleTitle[5]}</p>
                            <div className='bg-white w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                            <p className='font-lato text-white text-xxxsm mt-[7px] phone:mt-0 ml-[10px]'>{`${comments.length} comments`}</p>
                        </motion.div>
                    </div>
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
                    {articleText[0]}
                    </p>
                    <div className="grid justify-between w-full h-[150px] smartPhone:h-[200px] phone:h-[300px] minTablet:h-[400px] minLaptop:h-[500px] grid-cols-60">
                        <div className="col-start-1 col-end-2 row-start-1 row-end-5 h-[150px] smartPhone:h-[200px] phone:h-[300px] minTablet:h-[400px] minLaptop:h-[500px]">
                            <img className="w-full h-full object-cover" src={articleImages[0]} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                        <div className="col-start-2 col-end-3 row-start-1 row-end-3 h-[65px] smartPhone:h-[80px] phone:h-[130px] minTablet:h-[180px] minLaptop:h-[230px]">
                            <img className='w-full h-full object-cover'  src={articleImages[1]} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-5 h-[65px] smartPhone:h-[80px] phone:h-[130px] minTablet:h-[180px] minLaptop:h-[230px] self-end">
                            <img className='w-full h-full object-cover' src={articleImages[2]} alt='image of a cuisine' aria-hidden='true'/> 
                        </div>
                    </div>
                    <p className="font-lato font-normal h-fit w-full max-w-[650px] text-base my-[50px]">
                        {articleText[1]}
                    </p>
                    <div className="relative w-full h-fit min-h-[100px] py-[100px] flex justify-center">
                        <img className='absolute right-[80px] minTablet:right-[0px] w-[90px] h-[70px] minTablet:w-[170px] minTablet:h-[150px]' src={quote} alt='semi-transparent illustration of a double quotation mark' aria-hidden='true'/>
                        <p className="font-bold font-lato text-xr italic text-green w-full max-w-[700px]"><q>{articleText[3]}</q></p>
                    </div>
                    <p className="font-lato font-normal h-fit w-full text-base mt-[50px] mb-[100px]">
                        {articleText[2]}
                    </p>
                    <div className="flex flex-col smartPhone:flex-row items-start smartPhone:items-end w-full h-fit">
                        <h2 className="font-bold font-rufina text-xxl mr-[10px]">Tags:</h2>
                        <div className="flex flex-row flex-wrap w-full h-fit">
                            {
                                articleTags.map((articleTags) => {
                                    return <Tags key={articleTags.name} {...articleTags}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col phone:flex-row w-full h-fit my-[30px] items-center">
                        <img className='h-[150px] w-[150px] rounded-full self-start object-cover' src={authorDetails[0]} alt='image of the author' aria-hidden='true'/> 
                        <div className="flex flex-col w-fit h-fit px-0 phone:px-[30px] mt-[20px] phone:mt-0">
                            <h3 className="font-bold font-rufina text-xxl">
                                {authorDetails[2]}
                            </h3>
                            <p className="text-base font-normal font-lato mt-[10px]">
                                {authorDetails[1]}
                            </p>
                        </div>
                    </div>
                </section>
                <aside className="absolute tablet:relative right-0 bg-lightwhite tablet:bg-white h-fit w-[100%] tablet:w-[25%] hidden tablet:!flex flex-col !pl-[30px] tablet:!pl-[50px] !pr-[30px] tablet:!pr-0"
                style={{display: (showAside) ? 'flex' : 'none', padding: (showAside) ? '100px 0px' : '0px 0px'}}>
                    <button className='absolute mb-[100px] w-[40px] h-[40px] top-[20px] left-[20px] flex tablet:hidden' aria-label='close navigation button' onClick={() => setShowAside(false)}>
                        <img className='w-full h-full' src={xicon} alt='image of an x' aria-hidden='true'/>
                    </button>
                    <form className="relative w-full max-w-[257px] h-fit border-b flex flex-row items-center self-end" onSubmit={(e) => {e.preventDefault()}}>
                        <input ref={searchBox} type="search" id="searcharticle" name="searcharticle" className="w-full h-[30px] outline-none font-lato font-normal text-base bg-lightwhite tablet:bg-white" autoComplete="off" placeholder="Search....." onKeyDown={() => {setIsSearching(true)}} onChange={searching}/>
                        <ul className="absolute w-full h-[300px] bg-lightwhite border-slate border-[1px] rounded-md top-[28px] overflow-y-scroll pt-[10px] px-[15px] font-normal font-lato text-base flex-col" style={{display: (isSearching) ? 'flex' : 'none'}}>
                        <SearchLinkContext.Provider value={[[setCallData]]}>
                            {
                                allArticles.map((allArticles) => {
                                    return <SearchResults key={allArticles.title} {...allArticles}/>
                                })
                            }
                        </SearchLinkContext.Provider>
                        </ul>
                        <button className="w-[15px] h-[15px]" aria-label="search button" aria-expanded='false'>
                            <img className='w-full h-full' src={searchIcon} alt='search icon' aria-hidden='true'/>
                        </button>
                    </form>
                    <div className="w-full h-fit my-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Categories</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px]'/>
                        {
                            categories.map((categories) => {
                                return <Categories key={categories.tag} {...categories}/>
                            })
                        }
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Recent Comments</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px]'/>
                        {
                            recentComments.map((recentComments, index) => {
                                return <Recentcomments key={index} {...recentComments}/>
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
                        <CallDataContext.Provider value={[setCallData]}>
                            {
                                recentPosts.map((recentPosts) => {
                                    return <Recentposts key={recentPosts.title} {...recentPosts}/>
                                })
                            }
                        </CallDataContext.Provider>
                    </div>
                    <div className="w-full h-fit mb-[100px]">
                        <h2 className="font-rufina font-bold text-xxl">Tags</h2>
                        <hr className='text-black border-dotted border-2 w-full mt-[5px] mb-[5px]'/>
                        <div className="flex flex-row flex-wrap w-full h-fit">
                            {
                                tags.map((tags) => {
                                    return <Tags key={tags.name} {...tags}/>
                                })
                            }
                        </div>
                    </div>
                </aside>
            </main>
            <section className="flex flex-row justify-between w-full normal:w-[1349px] h-fit bg-lightwhite mb-[100px]" style={{display: (showNavigation[0]) ? 'none' : 'flex'}}>
                <CallDataContext.Provider value={[setCallData]}>
                    {
                        changeArticleData.map((changeArticleData) => {
                            return <Morearticles key={changeArticleData.arrow} {...changeArticleData}/>
                        })
                    }
                </CallDataContext.Provider>
            </section>
            <section className="flex justify-center w-full normal:w-[1349px] h-fit mb-[180px]" style={{display: (showNavigation[0]) ? 'none' : 'flex'}}>
                <div className="h-fit flex-col w-full max-w-[900px] mx-[50px]">
                    <h2 className="w-full font-bold text-center h-fit font-rufina text-xxxl">{`${comments.length} comments`}</h2>
                    <div className="flex flex-col w-full h-fit pb-[100px] pt-[70px]">
                        {
                            comments.map((comments, index) => {
                                return <Comment key={index} {...comments}/>
                            })
                        }
                    </div>
                    <hr className='border-dashed w-full mb-[100px]'/>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <h2 className="w-full font-bold text-center h-fit font-rufina text-xxl mb-[100px]">Leave a Reply</h2>
                        <label htmlFor="comment" className="font-lato font-bold text-base">Comment*</label>
                        <textarea ref={comment} id="comment" className="w-full h-[200px] border outline-0 mt-[20px] mb-[50px] p-[10px]" required></textarea>
                        <label htmlFor="name" className="font-lato font-bold text-base">Name*</label>
                        <input ref={name} type='text' id="name" className="w-full h-[50px] border mt-[20px] mb-[50px] p-[10px] outline-0" required></input>
                        <label htmlFor="e-mail" className="font-lato font-bold text-base">Email*</label>
                        <input ref={email} type='email' id="e-mail" className="w-full h-[50px] border mt-[20px] mb-[50px] p-[10px] outline-0" required></input>
                        <label htmlFor="website" className="font-lato font-bold text-base">Website</label>
                        <input ref={website} type='text' id="website" className="w-full h-[50px] border mt-[20px] mb-[70px] p-[10px] outline-0"></input>
                        <motion.button whileHover={{ scale: 1.05 }}
                        className='hover:bg-darkwhite border px-[10px] w-full max-w-[200px] min-h-[50px] h-fit font-rufina font-bold text-xxl' type='submit'
                        onClick={() => checkIfComplete()}>
                            Post Comment
                        </motion.button>  
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
export const CallDataContext = createContext();
export const SearchLinkContext = createContext();