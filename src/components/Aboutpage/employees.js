import React from 'react';

export default function Employees(props){
    let checker = props.id % 2;
    return(
        <>
            <div className='relative flex justify-between w-full h-fit' style={{flexDirection: (!checker) ? 'row-reverse' : 'row', 
            top: (!checker) ? '-200px': 'unset'}}>
                <div className='h-fit w-fit'>
                    <h3 className='font-rufina font-bold text-xxxxxl text-center'>{props.position}</h3>
                    <p className='font-lato font-normal text-center text-base mt-[10px]'>{props.name}</p>
                    <img className='w-[560px] h-[600px] object-cover mt-[20px]' src={props.imageUrl} alt={`image of the ${props.position}`} aria-hidden='true'/>
                </div>
                <div className='flex h-full w-[45%]' style={{alignSelf: (!checker) ? 'end' : 'unset', justifyContent: (!checker) ? 'flex-end' : 'flex-start'}}>
                    <p className='font-lato font-normal text-base mt-[100px]' style={{width: (!checker) ? '280px' : '300px', textAlign: (!checker) ? 'right' : 'left'}}>{props.aboutEmployee}</p>
                </div>
            </div>
        </>
    )
}