import React, {} from 'react';
import { motion } from 'framer-motion';

export default function Producelisting(props){
    return(
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: `${props.delayy}` }} viewport={{ once: true }}
            className='h-fit w-full minTablet:w-[30%] flex flex-col items-center mt-[50px] minTablet:mt-0'> 
                <img className='h-[150px] w-[150px]' src={props.imageUrl} alt={props.imagedescription} aria-hidden='true'/> 
                <h2 className='font-rufina font-bold text-center text-xxxl mt-[15px]'>{props.title}</h2>
                <p className='text-center font-lato font-normal text-base mt-[15px] w-3/4'>{props.description}</p>
            </motion.div>
        </>
    )
}