import React from 'react';

export default function Menucuisineslisting(props){
    return(
        <>
            <div className='flex flex-col w-full h-1/3'>
                <p className='text-black font-bold font-rufina text-xxxl text-right'>{props.price}</p>
                <hr className='text-black border-1 border-dashed w-full'/>
                <h3 className='text-black font-bold font-rufina text-xxxxxl w-[400px]'>{props.dish}</h3>
                <p className='text-black font-normal font-lato text-base'>{props.dish_description}</p>
            </div>
        </>
    )
}