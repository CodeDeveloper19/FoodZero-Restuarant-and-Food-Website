import React from "react";

export default function Comment(props){
    return (
        <>
            <div className="flex flex-row w-full h-fit mt-[30px]">
                <img className='h-[50px] w-[50px] rounded-full' src={props.commentAuthorImage} alt="comment author's image" aria-hidden='true'/>
                <div className="flex flex-col w-full h-fit mx-[20px]">
                    <p className="w-full text-base font-bold font-lato">{props.commentAuthor}</p>
                    <p className="text-base font-normal font-lato text-darkwhite my-[5px]">{`${props.commentDate}, ${props.commentTime}`}</p>
                    <p className="text-base font-normal font-lato">{props.comment}</p>
                </div>
                <button className="text-base font-bold font-lato h-fit">Reply</button>
            </div>
        </>
    )
}