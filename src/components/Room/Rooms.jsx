import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Rooms.css"
import hotelApi from "../../api/hotelApi";
import {Button} from "@mui/material";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    let navigate = useNavigate();


    const handleClick = (id) => {
        let path = `/details/id=${id}`;
        navigate(path);
    }

    useEffect( () => {
        async function fetchData(){
            return await hotelApi.getListHotel()
                .then((res)=>{
                    try {
                        console.log("rooms", res)
                        if(res.status == 200){
                            setRooms(res.data.data);
                            console.log(res.data.data);
                        }
                    }catch (e){

                    }

                })
        }
        fetchData()

    }, [])

    return (
        <div style={{
            margin: '232px 50px 80px',
        }}

        >
            <div style={{
                display:'flex', flexDirection:'row', gap:'40px', flexWrap: 'wrap'
            }}
            >
                {rooms && rooms.map((room, index) => (
                    <div key={index} onClick={() => handleClick(room.id)}>
                        <div
                            style={{borderRadius:'20px'}}
                        >
                            <img
                                src={room.images[0]? room.images[0] : null} alt={room.title} width={250} height={250}
                                style={{
                                    borderRadius:'20px', cursor:'pointer',  boxShadow:'5px 5px 10px #ccc'
                                }}
                                className="img_room"
                                // onClick={() => handleClick(room.id)}
                            />
                        </div>
                        <div style={{marginTop:'10px', marginLeft:'10px'}}>
                            <div style={{
                                fontSize: '20px', lineHeight: '32px', fontWeight: '600',
                                marginBottom:'5px', cursor:'pointer'
                            }}

                            >
                                {room.name}
                            </div>
                            <div style={{
                                fontSize: '18px', fontWeight: '400', lineHeight: '24px',
                                marginBottom:'5px', cursor:'pointer'
                            }}
                            >
                                {room.address}
                                <span style={{marginLeft:'5px', fontStyle:'italic'}}>
                                    {room.price}$ night
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}
