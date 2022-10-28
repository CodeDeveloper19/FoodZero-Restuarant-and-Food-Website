import React from 'react';

export default function Producelisting(props){
    return(
        <>
            <div className='h-full flex flex-col'> 
                <img src={props.imageUrl} alt={props.imagedescription} aria-hidden='true'/> 
            </div>
        </>
    )
}