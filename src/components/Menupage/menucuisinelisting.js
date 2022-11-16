import React from 'react';
import { motion } from 'framer-motion';

export default function Menucuisineslisting(props){
    return(
        <>
            <motion.div initial={{opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: props.delayy }} viewport={{ once: true }}
            className='flex flex-col w-full h-1/3'>
                <p className='font-bold text-right text-black font-rufina text-xxxl'>{props.price}</p>
                <hr className='w-full text-black border-dashed border-1'/>
                <h3 className='text-black font-bold font-rufina text-xxxxxl w-full minLaptop:w-[400px]'>{props.dish}</h3>
                <p className='text-base font-normal text-black font-lato'>{props.dish_description}</p>
            </motion.div>
        </>
    )
}