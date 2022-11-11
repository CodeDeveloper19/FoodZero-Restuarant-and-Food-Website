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
                    <h2 className='font-bold text-center font-rufina text-xxxxxxxl'>{props.id}</h2>
                    <p className='text-base font-normal text-center font-lato'>{props.titleDescription}</p>
                </div>
                <div className='flex MaxTablet:!flex-col MaxTablet:h-fit h-[500px] laptop:h-[600px] w-full mt-[50px] mb-[50px] justify-between' style={{flexDirection: (id === 'Mains') ? 'row-reverse' : 'row'}}>
                    <img className='h-[250px] smartPhone:h-[300px] phone:h-[350px] minTablet:h-[500px] tablet:h-full MaxTablet:w-full w-[45%] object-cover' src={props.imageUrl} alt='image of cuisines' aria-hidden='true'/>
                    <div className='h-fit tablet:h-full MaxTablet:w-full w-[45%] flex flex-col MaxTablet:mt-[50px] mt-0'>
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