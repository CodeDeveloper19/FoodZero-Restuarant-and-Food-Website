import React from "react";
import { Link } from "react-router-dom";

export default function Morearticles(props){
    return (
        <>
            <div className="relative h-fit w-[49.9%] min-h-[300px] hover:cursor-pointer flex justify-center items-center">
                <img className='absolute object-cover w-full h-full' src={props.imageUrl} alt='image of the previous article' aria-hidden='true'/> 
                <div className='absolute top-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)]'></div>
                <div className="relative flex flex-col items-center h-fit w-fit max-w-[400px] mx-[30px]">
                    <Link to={`/blog/${props.title}`}>
                        <div className="flex items-center h-fit w-fit mb-[10px]" style={{flexDirection: (props.text === 'PREVIOUS POST') ? 'row' : 'row-reverse'}}>
                            <img className='w-[40px] h-[40px] mr-[20px]' 
                            style={{marginRight: (props.text === 'PREVIOUS POST') ? '20px' : '0px', marginLeft: (props.text === 'PREVIOUS POST') ? '0px' : '20px'}}
                            src={props.arrow} alt='illustration of a left arrow' aria-hidden='true'/>
                            <p className="text-base font-normal text-white font-lato hidden smartPhone:flex">{props.text}</p> 
                        </div>
                    </Link>
                    <p className="font-bold text-center text-white font-rufina text-xxl">{props.title}</p>
                </div>
            </div>
        </>
    )
}