import React from 'react';
import Menucuisineslisting from './menucuisinelisting';

export default function Menucuisines(props){
    let id = props.id;

    const MenuCuisinesListingData = [
        {
            id: 'dish1',
            price: props.price,
            dish: props.dish,
            dish_description: props.dish_description
        },
        {
            id: 'dish2',
            price: props.price2,
            dish: props.dish2,
            dish_description: props.dish_description2
        },
        {
            id: 'dish3',
            price: props.price3,
            dish: props.dish3,
            dish_description: props.dish_description3
        }
    ]

    return(
        <>
            <section className='flex flex-col items-center w-full h-fit px-[60px] pb-[80px]'>
                <div>
                    <h2 className='font-rufina font-bold text-xxxxxxxl text-center'>{props.id}</h2>
                    <p className='font-lato font-normal text-base text-center'>{props.titleDescription}</p>
                </div>
                <div className='flex h-[600px] w-full mt-[50px] mb-[50px] justify-between' style={{flexDirection: (id === 'Mains') ? 'row-reverse' : 'row'}}>
                    <img className='h-full w-[45%]' src={props.imageUrl} alt='image of cuisines' aria-hidden='true'/>
                    <div className='h-full w-[45%] flex flex-col'>
                        {
                            MenuCuisinesListingData.map((MenuCuisinesListingData) => {
                                return <Menucuisineslisting key={MenuCuisinesListingData.id} {...MenuCuisinesListingData}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}