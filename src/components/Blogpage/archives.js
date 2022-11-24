import React from "react";

export default function Archives(props){
    return (
        <>
            <div className="flex flex-row justify-between font-lato text-base mt-[20px] font-bold">
                <p>{props.date}</p>
                <p>{props.number}</p>
            </div>
        </>
    )
}