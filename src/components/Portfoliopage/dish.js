import React from "react";
import rightArrow from '../../images/Icons/Icon_arrow-right.svg';
import { Link } from "react-router-dom";

export default function Dish(props){
    let isInThrees = props.id % 3;
    let isInTwos = props.id % 2;

    return (
        <>
            <div className="w-full h-fit MaxTablet:!flex-col flex justify-between" style={{marginTop: (props.id === 1) ? 'unset' : '50px', flexDirection: (!isInTwos) ? 'row-reverse' : 'row'}}>
                <div className="relative h-fit MaxTablet:!w-full cursor-pointer overflow-hidden" style={{width: (!isInThrees) ? '47.5%' : '72.5%'}}>
                    <img className='w-full h-[500px] tablet:h-[400px] minLaptop:h-[500px] object-cover hover:scale-125 transition duration-3000' src={props.dishImage1} alt='image of a dish or drink' aria-hidden='true'/>
                    <div className="absolute bottom-0 w-full pb-[70px] px-[40px] h-fit flex flex-col microPhone:flex-row justify-between bg-gradient-to-b from-[rgba(35,48,0,0)] to-[rgba(7,7,7,0.68)]">
                        <div className="z-10 flex flex-col w-fit h-fit text-white">
                            <h2 className="font-rufina font-bold text-xxl smartPhone:text-xxxl w-fit max-w-[335px]">{props.dishName1}</h2>
                            <div className="flex flex-col phone:flex-row items-center w-fit h-fit font-lato font-normal text-base mt-[10px]">
                                <h3>{props.dishSubType1}</h3>
                                <div className='bg-white w-[2px] h-[2px] rounded-full my-[5px] phone:my-0 mx-0 phone:mx-[10px]'></div>
                                <h3>{props.dishType1}</h3>
                            </div>
                        </div>
                        <button className="z-10 w-[40px] h-[40px] self-start microPhone:self-end mt-[10px] microPhone:mt-0">
                            <Link to={`/about/portfolio/${props.dishName1}`}><img className='w-full h-full' src={rightArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                        </button>
                    </div>
                </div>

                <div className="relative h-fit MaxTablet:!w-full MaxTablet:mt-[50px] cursor-pointer overflow-hidden" style={{width: (!isInThrees) ? '47.5%' : '22.5%'}}>
                    <img className='w-full h-[500px] tablet:h-[400px] minLaptop:h-[500px] object-cover hover:scale-125 transition duration-3000' src={props.dishImage2} alt='image of a dish or drink' aria-hidden='true'/>
                    <div className="absolute bottom-0 w-full pb-[70px] px-[40px] h-fit flex flex-col microPhone:flex-row justify-between bg-gradient-to-b from-[rgba(35,48,0,0)] to-[rgba(7,7,7,0.68)]">
                        <div className="z-10 flex flex-col w-fit h-fit text-white">
                            <h2 className="font-rufina font-bold text-xxl smartPhone:text-xxxl w-fi max-w-[335px]">{props.dishName2}</h2>
                            <div className="flex flex-col phone:flex-row items-center w-fit h-fit font-lato font-normal text-base mt-[10px]">
                                <h3>{props.dishSubType2}</h3>
                                <div className='bg-white w-[2px] h-[2px] rounded-full my-[5px] phone:my-0 mx-0 phone:mx-[10px]'></div>
                                <h3>{props.dishType2}</h3>
                            </div>
                        </div>
                        <button className="z-10 w-[40px] h-[40px] self-start microPhone:self-end mt-[10px] microPhone:mt-0">
                            <Link to={`/about/portfolio/${props.dishName2}`}><img className='w-full h-full' src={rightArrow} alt='illustration of a right arrow' aria-hidden='true'/></Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}