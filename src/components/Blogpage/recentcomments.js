import React from "react";

export default function Recentcomments(props){
    return (
        <>
            <div className="flex flex-row font-lato font-normal text-xxxsm mt-[20px]">
                <p className="text-darkwhite">{props.commentAuthor}</p>
                <p className="font-bold ml-[5px]">{props.comment}</p>
            </div>
        </>
    )
}