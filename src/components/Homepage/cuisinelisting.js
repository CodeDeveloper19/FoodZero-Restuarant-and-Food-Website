import React, { useContext } from 'react';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';
import { motion } from 'framer-motion';
import { WindowSizeContext } from './homepage';
import { Link } from 'react-router-dom';

export default function Cuisinelisting(props){
    const [[windowSize]] = useContext(WindowSizeContext);

    const cuisineAnimationFromTop = {
        whileInView: {y: 450, opacity: 1}
    }

    const cuisineAnimationFromOpacity = {
        whileInView: {opacity: 1}
    }

    return(
        <>
            <motion.div whileInView="whileInView" variants={(windowSize.innerWidth <= 1199) ? cuisineAnimationFromOpacity : cuisineAnimationFromTop} transition={{ duration: 1, delay: `${props.delayy}` }} viewport={{ once: true }} 
            className='opacity-0 laptop:-top-[450px] relative w-full laptop:w-[350px] h-[280px] smartPhone:h-[450px] mt-[100px] laptop:mt-0'>
                <img className='w-full h-full object-cover' src={props.imageUrl} alt='image of a cuisine' aria-hidden='true'/>
                <div className='absolute top-[20px] flex flex-row justify-between w-full px-[20px]'>
                    <h3 className='font-rufina font-bold text-xxxl'>{props.cuisineType}</h3>
                    <Link to='/menu/'><button><img className='w-[30px] h-[30px]' src={rightarrowblack} alt='vector ilustraion of a black right arrow' aria-hidden='true'/></button></Link>
                </div>
            </motion.div>
        </>
    )
}