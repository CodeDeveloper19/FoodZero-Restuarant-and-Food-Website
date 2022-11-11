import React from "react";
import Dish from "./dish";

export default function Dishes(props){
    const data = [
        {
            id: 1,
            dishName1: props.dish1Name,
            dishType1: props.dish1Type,
            dishSubType1: props.dish1Subtype,
            dishImage1: props.dish1Image,
            dishName2: props.dish2Name,
            dishType2: props.dish2Type,
            dishSubType2: props.dish2Subtype, 
            dishImage2: props.dish2Image
        },
        {
            id: 2,
            dishName1: props.dish4Name,
            dishType1: props.dish4Type,
            dishSubType1: props.dish4Subtype,
            dishImage1: props.dish4Image,
            dishName2: props.dish3Name,
            dishType2: props.dish3Type,
            dishSubType2: props.dish3Subtype,
            dishImage2: props.dish3Image,
        },
        {
            id: 3,
            dishName1: props.dish5Name,
            dishType1: props.dish5Type,
            dishSubType1: props.dish5Subtype,
            dishImage1: props.dish5Image,
            dishName2: props.dish6Name,
            dishType2: props.dish6Type,
            dishSubType2: props.dish6Subtype,
            dishImage2: props.dish6Image,
        }
    ]

    return (
        <>
            <div className="h-fit w-screen normal:w-[1349px] px-[60px]">
                {
                    data.map((data) => {
                        return <Dish key={data.id} {...data}/>
                    })
                }
            </div>
        </>
    )
}