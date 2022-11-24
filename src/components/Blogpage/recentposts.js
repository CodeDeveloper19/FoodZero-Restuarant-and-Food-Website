import React from "react";

export default function Recentposts(props){
    return (
        <>
            <div className="flex flex-row justify-between w-full h-fit mt-[20px]">
                <img className='object-cover w-[60px] h-[60px] mr-[10px]' src={props.imageUrl} alt='image of the article' aria-hidden='true'/>
                <div className="flex flex-col w-full h-fit">
                    <h2 className="font-rufina font-bold text-xxsm">{props.title}</h2>
                    <div className="flex flex-col items-start laptop:items-center laptop:flex-row text-darkwhite font-lato font-normal text-xxxsm w-full h-fit">
                        <p>{props.author}</p>
                        <div className='bg-darkwhite w-[3px] h-[3px] rounded-full mx-[5px] hidden laptop:block'></div>
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}