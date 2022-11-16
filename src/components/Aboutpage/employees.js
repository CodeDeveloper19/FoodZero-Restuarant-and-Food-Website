import React from 'react';
import { motion } from 'framer-motion';

export default function Employees(props){
    let checker = props.id % 2;
    return(
        <>
            <div className='relative flex maxTablet:!flex-col justify-between w-full h-fit maxTablet:!top-0 mb-[100px] minTablet:mb-0' style={{flexDirection: (!checker) ? 'row-reverse' : 'row', 
            top: (!checker) ? '-200px': 'unset !important'}}>
                <div className='h-fit w-full minTablet:w-[45%]'>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} 
                    className='w-full font-bold text-center font-rufina text-xxxxxl'>{props.position}</motion.h3>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1}} viewport={{ once: true }} 
                    className='font-lato font-normal text-center text-base mt-[10px] w-full'>{props.name}</motion.p>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2}} viewport={{ once: true }}  
                    className='w-full h-[300px] smartPhone:h-[400px] minLaptop:!h-[600px] object-cover mt-[20px]' src={props.imageUrl} alt={`image of the ${props.position}`} aria-hidden='true'/>
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 3}} viewport={{ once: true }} 
                className='flex h-full w-full minTablet:w-[45%]' style={{alignSelf: (!checker) ? 'end' : 'unset', justifyContent: (!checker) ? 'flex-end' : 'flex-start'}}>
                    <p className='font-lato font-normal text-base mt-[20px] minTablet:mt-[100px]' style={{width: (!checker) ? '280px' : '300px', textAlign: (!checker) ? 'right' : 'left'}}>{props.aboutEmployee}</p>
                </motion.div>
            </div>
        </>
    )
}