import React, { useContext, useEffect, useState } from 'react';
import { WindowSizeSliderPositionContext } from './homepage';
import quote from '../../images/quote.png';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';
import leftarrowblack from '../../images/Icons/leftarrowblack.svg';

export default function Reviewlisting(props){
    const [[setsliderPosition], [nextSlide], [prevSlide]] = useContext(WindowSizeSliderPositionContext);

    // useEffect(() => {
    //     console.log("A")
    //     let repeatMovementOfSlider; 
    //     const initialDelay = setTimeout(() => {
    //         repeatMovementOfSlider = setInterval(() => {
    //             moveSlide();
    //         }, 3000);
    //     }, 1000);
    //     return () => {clearInterval(repeatMovementOfSlider); clearTimeout(initialDelay)};
    // }, [])

    return(
        <>
            <div className='relative py-[100px] px-[120px] h-full w-screen normal:w-[1349px]'>
                <img className='absolute right-[80px] minTablet:right-[160px] w-[90px] h-[70px] minTablet:w-[170px] minTablet:h-[150px]' src={quote} alt='semi-transparent illustration of a double quotation mark' aria-hidden='true'/>
                <q className='font-rufina font-bold text-xxxl w-full laptop:w-[620px]'>{props.review}</q>
                <div className='mt-[50px] w-full h-fit flex flex-col tablet:flex-row items-center phone:items-start'>
                    <div className='flex flex-col phone:flex-row items-center w-fit tablet:w-2/4 h-fit min-h-[100px]'>
                        <img className='w-[100px] h-full' src={props.reviewerImage} alt="reviewers's image" aria-hidden='true'/>
                        <div className='h-fit flex flex-col ml-0 phone:ml-[20px] mt-[10px] phone:mt-0'>
                            <h3 className='font-rufina font-bold text-xxl'>{props.reviewAuthor}</h3>
                            <p className='font-lato font-normal text-xxxsm'>{props.occupation}</p>
                        </div>
                    </div>
                    <div className='w-fit tablet:w-2/4 h-[100px] flex flex-col microPhone:flex-row items-center tablet:justify-end mt-[10px] microPhone:mt-0'>
                        <button
                        onClick={() => {
                            setsliderPosition(prevSlide);
                        }}>
                            <img className='w-[30px] h-[30px]' src={leftarrowblack} alt="left arrow icon" aria-hidden='true'/>
                        </button>
                        <p className='mx-0 microPhone:mx-[20px] smartPhone:mx-[30px] font-rufina font-bold text-xxl'>{props.pageNumber}</p>
                        <button
                        onClick={() => {
                            setsliderPosition(nextSlide);
                        }}>
                            <img className='w-[30px] h-[30px]' src={rightarrowblack} alt="right arrow icon" aria-hidden='true'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}