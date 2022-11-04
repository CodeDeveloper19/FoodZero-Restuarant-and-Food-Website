import React from 'react';

export default function Producelisting(props){
    return(
        <>
            <div className='h-fit w-full minTablet:w-[30%] flex flex-col items-center mt-[50px] minTablet:mt-0'> 
                <img className='h-[150px] w-[150px]' src={props.imageUrl} alt={props.imagedescription} aria-hidden='true'/> 
                <h2 className='font-rufina font-bold text-center text-xxxl mt-[15px]'>{props.title}</h2>
                <p className='text-center font-lato font-normal text-base mt-[15px] w-3/4'>{props.description}</p>
            </div>
        </>
    )
}