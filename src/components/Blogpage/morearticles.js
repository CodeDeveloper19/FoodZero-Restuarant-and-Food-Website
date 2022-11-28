import React, { useContext } from "react";
import { CallDataContext } from "./article";
import { Link, useParams } from "react-router-dom";

export default function Morearticles(props){
    const [setCallData] = useContext(CallDataContext);
    let params = useParams();

    const checkIfValid = (e) => {
        if (params.articletitle === props.title){
            e.preventDefault();
        } else {
            setCallData(true)
        }
    }

    return (
        <>
            <div className="relative h-fit w-[49.9%] min-h-[300px] hover:cursor-pointer flex justify-center items-center">
                <img className='absolute object-cover w-full h-full' src={props.imageUrl} alt='image of the previous article' aria-hidden='true'/> 
                <div style={{backgroundImage: (params.articletitle === props.title) ? 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.8))' : 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))'}}
                className='absolute top-0 w-full h-full'></div>
                <div className="relative flex flex-col items-center h-fit w-fit max-w-[400px] mx-[30px]">
                    <Link to={`/blog/${props.title}`}
                    onClick={
                        (e) => checkIfValid(e)
                    }>
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