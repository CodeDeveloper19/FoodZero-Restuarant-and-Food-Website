import React from 'react';

export default function Employees(props){
    let checker = props.id % 2;
    return(
        <>
            <div className='relative flex maxTablet:!flex-col justify-between w-full h-fit maxTablet:!top-0 mb-[100px] minTablet:mb-0' style={{flexDirection: (!checker) ? 'row-reverse' : 'row', 
            top: (!checker) ? '-200px': 'unset !important'}}>
                <div className='h-fit w-full minTablet:w-[45%]'>
                    <h3 className='w-full font-bold text-center font-rufina text-xxxxxl'>{props.position}</h3>
                    <p className='font-lato font-normal text-center text-base mt-[10px] w-full'>{props.name}</p>
                    <img className='w-full h-[300px] smartPhone:h-[400px] minLaptop:!h-[600px] object-cover mt-[20px]' src={props.imageUrl} alt={`image of the ${props.position}`} aria-hidden='true'/>
                </div>
                <div className='flex h-full w-full minTablet:w-[45%]' style={{alignSelf: (!checker) ? 'end' : 'unset', justifyContent: (!checker) ? 'flex-end' : 'flex-start'}}>
                    <p className='font-lato font-normal text-base mt-[20px] minTablet:mt-[100px]' style={{width: (!checker) ? '280px' : '300px', textAlign: (!checker) ? 'right' : 'left'}}>{props.aboutEmployee}</p>
                </div>
            </div>
        </>
    )
}