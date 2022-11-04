import React from 'react';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';

export default function Cuisinelisting(props){
    return(
        <>
            <div className='relative w-full laptop:w-[350px] h-[280px] smartPhone:h-[450px] mt-[100px] laptop:mt-0'>
                <img className='w-full h-full object-cover' src={props.imageUrl} alt='image of a cuisine' aria-hidden='true'/>
                <div className='absolute top-[20px] flex flex-row justify-between w-full px-[20px]'>
                    <h3 className='font-rufina font-bold text-xxxl'>{props.cuisineType}</h3>
                    <button><img className='w-[30px] h-[30px]' src={rightarrowblack} alt='vector ilustraion of a black right arrow' aria-hidden='true'/></button>
                </div>
            </div>
        </>
    )
}