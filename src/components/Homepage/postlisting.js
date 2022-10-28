import React from 'react';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';

export default function Postlisting(props){
    return(
        <>
            <div className='h-fit w-[450px] flex flex-col items-center'>
                <div className='relative h-fit w-full'> 
                    <img className='h-[450px] w-full' src={props.imageUrl} alt={props.imagedescription} aria-hidden='true'/> 
                    <div className='absolute top-[10px] right-[10px] w-[120px] h-[40px] bg-green flex justify-center items-center'>
                        <p className='font-rufina text-white text-xl'>Fashion</p>
                    </div>
                </div>
                <div className='mt-[40px] h-fit w-[400px]'>
                    <div className='flex flex-row justify-between items-center h-fit w-4/5 mb-[15px]'>
                        <img className='h-[50px] w-[50px]' src={props.authorImage} alt='image of the author' aria-hidden='true'/> 
                        <p className='font-lato text-green text-xxxsm'>{props.postAuthor}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full'></div>
                        <p className='font-lato text-green text-xxxsm'>{props.postDate}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full'></div>
                        <p className='font-lato text-green text-xxxsm'>{props.postTime}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full'></div>
                        <p className='font-lato text-green text-xxxsm'>{`${props.numberOfComments} comments`}</p>
                    </div>
                    <h2 className='font-rufina font-bold text-xxxl'>
                        {props.postTitle}
                    </h2>
                    <hr className='text-black border-1 border-dashed w-full'/>
                    <p className='font-lato font-bold text-xsm mt-[10px] mb-[20px]'>{props.postDescription}</p>
                    <button className='w-fit h-fit flex flex-row items-center'>
                        <p className='font-lato text-base font-normal'>Read More</p>
                        <img className='h-[15px] w-[30px] ml-[5px]' src={rightarrowblack} alt='vector ilustraion of a black right arrow' aria-hidden='true'/> 
                    </button>
                </div>
            </div>
        </>
    )
}