import React from "react";

export default function Categories(props){
    return (
        <>
            <div className="flex flex-row justify-between font-lato font-bold text-base mt-[20px]">
                <p>{props.tag}</p>
                <p>{props.number}</p>
            </div>
        </>
    )
}