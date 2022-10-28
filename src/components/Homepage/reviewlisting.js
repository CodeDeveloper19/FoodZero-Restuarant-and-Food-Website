import React, { useContext } from 'react';
import { SliderPositionContext } from './homepage';
import quote from '../../images/quote.png';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';
import leftarrowblack from '../../images/Icons/leftarrowblack.svg';

export default function Reviewlisting(props){
    // const [[setSliderPosition]] = useContext(SliderPositionContext);

    return(
        <>
            <div className='relative py-[100px] px-[120px] h-full w-screen'>
                <img className='absolute right-[160px] w-[170px] h-[150px]' src={quote} alt='semi-transparent illustration of a double quotation mark' aria-hidden='true'/>
                <h2 className='font-rufina font-bold text-xxxl w-[620px]'>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.</h2>
                <div className='mt-[50px] w-full h-fit flex flex-row'>
                    <div className='flex flex-row items-center w-2/4 h-[100px]'>
                        <img className='w-[100px] h-full' src={props.reviewerImage} alt="reviewers's image" aria-hidden='true'/>
                        <div className='h-fit flex flex-col ml-[20px]'>
                            <h3 className='font-rufina font-bold text-xxl'>{props.reviewAuthor}</h3>
                            <p className='font-lato font-normal text-xxxsm'>{props.occupation}</p>
                        </div>
                    </div>
                    <div className='w-2/4 h-[100px] flex flex-row items-center justify-end'>
                        <button 
                        onClick={() => {
                            alert("A")
                        }}>
                            <img className='w-[30px] h-[30px]' src={leftarrowblack} alt="reviewers's image" aria-hidden='true'/>
                        </button>
                        <p className='mx-[30px] font-rufina font-bold text-xxl'>{props.pageNumber}</p>
                        <button>
                            <img className='w-[30px] h-[30px]' src={rightarrowblack} alt="reviewers's image" aria-hidden='true'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}