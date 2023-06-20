import React, { useState, useEffect } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { Button } from "@mui/material";
import DatePicker from "./DatePicker";
import hotelApi from "../../api/hotelApi";
import axios from "axios";
import reservationApi from "../../api/reservationApi";

export default function DetailRoom({id}) {
    const [guests, setGuests] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [nights, setNights] = useState(1);
    const [detailRoom, setDetailRoom] = useState({
        "id": "",
        "name": "",
        "description": "",
        "available": true,
        "livingRoom": 0,
        "bedroom": 0,
        "toilet": 0,
        "wifi": true,
        "swimmingPool": true,
        "images": "",
        "price": "50",
        "address": "",
        "phone": "",
        "owner": "",
        "createAt": "",
        "updateAt": ""
    });
    const [bookingInfo, setBookingInfo] = useState({
        reservation: {
            room: id,
            startDate: "",
            endDate: ""
        }
    })


    useEffect( () => {
        async function fetchData(){
            return await hotelApi.getDetailHotel(id)
                .then((res)=>{
                    console.log(res.data.data)
                    setDetailRoom(res.data.data);
                })
        }
        fetchData()
    }, []);


    const handleBooking = async () => {
        try {

            const result = await reservationApi.bookingHotel(bookingInfo)
                .then((res)=>{
                    console.log(res)
                })
        }catch (e){
            console.log(e)
        }

    }
    useEffect(()=>{
        console.log(bookingInfo)
    })

    return(
        <>
            {/* {detailRoom && ( */}
                <div style={{margin: '96px 120px 0px', fontSize:'18px'}}>
                    <div style={{
                        fontSize:'32px'
                    }} >
                         {detailRoom.name}
                    </div>
                    <div
                        style={{
                            marginTop:'8px', fontStyle:'italic', fontSize:'20px'
                        }}
                    >
                         {detailRoom.address}
                    </div>
                    <div style={{margin:'16px', borderRadius:'24px'}}>
                        <img src={detailRoom.images[0]} alt="" width='100%' height='400' style={{borderRadius:'24px'}}/>
                    </div>

                    <div style={{float: 'right', display:'flex', flexDirection:'row'}}>
                        <div>
                            <div style={{padding:'0 120px'}}>
                                Check in
                            </div>
                            <DatePicker
                                onChange={(e)=>{
                                    const tsTime = Math.floor(e.$d.getTime() / 1000);
                                    setBookingInfo({
                                        reservation: {
                                            room: bookingInfo.reservation.room,
                                            startDate: tsTime,
                                            endDate: bookingInfo.reservation.endDate
                                        }
                                    })

                                }}
                            />
                        </div>
                        <div style={{marginLeft:'40px'}}>
                            <div style={{padding:'0 120px'}}>
                                Check out
                            </div>
                            <DatePicker
                                onChange={(e)=>{
                                    const tsTime = Math.floor(e.$d.getTime() / 1000);
                                    setBookingInfo({
                                        reservation: {
                                            room: bookingInfo.reservation.room,
                                            endDate: tsTime,
                                            startDate: bookingInfo.reservation.startDate
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>

                    <div style={{marginTop:'32px', marginBottom:'32px', height:400}}>
                        <div>Description</div>
                        <div>{detailRoom.description}</div>
                    </div>
                    <div
                        style={{
                            justifyContent:'center',
                            alignContent:'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={
                            detailRoom.available ? {
                                marginTop:'32px', marginBottom:'32px', fontSize:'32px',color: '#0ae52d',height:'100px'
                            }:{
                                marginTop:'32px', marginBottom:'32px', fontSize:'32px',color: '#d92c2c'
                            }
                        }>
                            {detailRoom.available ?
                                "Avaiable"
                                :
                                "Rented"
                            }
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{backgroundColor:'#ef405f', width:400}}
                            onClick={handleBooking}
                            disabled={detailRoom.available? false: true}
                        >
                            Book now
                        </Button>
                    </div>

                </div>
            {/* )}       */}
        </>
    )
}

