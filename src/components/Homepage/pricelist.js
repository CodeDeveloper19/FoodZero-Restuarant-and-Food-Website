import React from 'react';

export default function Pricelist(props){
    return(
        <>
        <div className='flex flex-row justify-between w-full h-2/5'>
            <div className='flex flex-col w-[600px] h-full'>
                <p className='text-black font-bold font-rufina text-xxxl text-right'>{props.price1}</p>
                <hr className='text-black border-1 border-dashed w-full'/>
                <h3 className='text-black font-bold font-rufina text-xxxxxl w-[310px]'>{props.dish1}</h3>
                <p className='text-black font-normal font-lato text-base'>{props.dish_description1}</p>
            </div>
            <div className='flex flex-col w-[600px] h-full'>
                <p className='text-black font-bold font-rufina text-xxxl text-right'>{props.price2}</p>
                <hr className='text-black border-1 border-dashed w-full'/>
                <h3 className='text-black font-bold font-rufina text-xxxxxl w-[310px]'>{props.dish2}</h3>
                <p className='text-black font-normal font-lato text-base'>{props.dish_description2}</p>
            </div>
        </div>
        </>
    )
}