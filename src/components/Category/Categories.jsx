import React, {useEffect, useState} from "react";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiMountainRoad, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla, MdLocationCity } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5" ;
import CategoryBox from "./CategoryBox";
import hotelApi from "../../api/hotelApi";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern',
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool',
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island',
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn',
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property has arctic activities',
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a cave',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in a desert',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious',
    },
    {
        label: 'Mountains',
        icon: GiMountainRoad,
        description: 'This property has mountains',
    },
    {
        label: 'Urban',
        icon: MdLocationCity,
        description: 'This property is in urban',
    }
]

export default function Categories({rooms,setRooms}) {
    const [selectedCategory, setSelectedCategory] = useState('');
    useEffect(()=>{
        getListRoomsWithCategory();
    });
    async function getListRoomsWithCategory(){
        const result = await hotelApi.getListHotelWithCategory(selectedCategory)
            .then((res)=>{
                const listRooms = res.data.data;
                setRooms(listRooms);
            })
    }
    return (
        <>
            <div
                style={{
                    display:'flex', flexDirection:'row', alignItems:'center', width:'100%',
                    overflowX:'auto', padding:'5px', position:'fixed', top:'80px',
                    background: '#fff', zIndex:1, borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc'
                }}

            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label} label={item.label} icon={item.icon}
                        selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}
                    />
                ))}
            </div>
        </>
    )
}
