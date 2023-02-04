import React from 'react';
import rightarrowblack from '../../images/Icons/rightarrowblack.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Postlisting(props){
    return(
        <>
            <div className='h-fit flex flex-col items-center mt-[50px]'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5}} viewport={{ once: true }} 
                className='relative h-fit w-full'> 
                    <img className='h-[200px] smartPhone:h-[300px] phone:h-[450px] tablet:h-[600px] laptop:h-[450px] w-full object-cover' src={props.imageUrl} alt={props.imagedescription} aria-hidden='true'/> 
                    <div className='absolute top-[10px] right-[10px] w-[40%] h-fit min-h-[30px] smartPhone:w-[120px] smartPhone:h-[40px] bg-green flex justify-center items-center px-[10px]'>
                        <p className='font-rufina text-white text-xl'>{props.mainTag}</p>
                    </div>
                </motion.div>
                <div className='mt-[40px] h-fit w-[90%] laptop:w-[400px]'>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1 }} viewport={{ once: true }} 
                    className='flex flex-col phone:flex-row justify-between items-start phone:items-center h-fit w-full max-w-fit mb-[15px]'>
                        <img className='h-[50px] w-[50px] rounded-full object-cover ml-[10px]' src={props.authorImage} alt='image of the author' aria-hidden='true'/> 
                        <p className='font-lato text-green text-xxxsm ml-[10px] mt-[10px] phone:mt-0'>{props.postAuthor}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                        <p className='font-lato text-green text-xxxsm mt-[5px] phone:mt-0 ml-[10px]'>{props.postDate}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                        <p className='font-lato text-green text-xxxsm mt-[5px] phone:mt-0 ml-[10px]'>{props.postTime}</p>
                        <div className='bg-green w-[2px] h-[2px] rounded-full hidden phone:flex ml-[10px]'></div>
                        <p className='font-lato text-green text-xxxsm mt-[5px] phone:mt-0 ml-[10px]'>{`${props.numberOfComments} comments`}</p>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1.5 }} viewport={{ once: true }} 
                    className='font-rufina font-bold text-xxxl'>
                        {props.postTitle}
                    </motion.h2>
                    <motion.hr initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1.5 }} viewport={{ once: true }}  
                    className='text-black border-1 border-dashed w-full'/>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 1.5 }} viewport={{ once: true }}  
                    className='font-lato font-bold text-xsm mt-[10px] mb-[20px]'>{props.postDescription}
                    </motion.p>
                    <Link to={`/blog/${props.postTitle}`}>
                        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: 2 }} viewport={{ once: true }} 
                        className='w-fit h-fit flex flex-row items-center'>
                            <p className='font-lato text-base font-normal'>Read More</p>
                            <img className='h-[15px] w-[30px] ml-[5px]' src={rightarrowblack} alt='vector ilustraion of a black right arrow' aria-hidden='true'/> 
                        </motion.button>
                    </Link>
                </div>
            </div>
        </>
    )
}
