import React, { useState, useEffect } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { Button } from "@mui/material";
import DatePicker from "./DatePicker";
import hotelApi from "../../api/hotelApi";
import axios from "axios";

export default function DetailRoom() {
    const [guests, setGuests] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [nights, setNights] = useState(1);
    const [detailRoom, setDetailRoom] = useState(null);

    const handlePlusGuests = () => {
        setGuests(guests => Math.min(guests + 1, 5));
    }

    const handlePlusBedrooms = () => {
        setBedrooms(bedrooms => Math.min(bedrooms + 1, 5));
    }

    const handlePlusBathrooms = () => {
        setBathrooms(bathrooms => Math.min(bathrooms + 1, 5));
    }

    const handlePlusNights = () => {
        setNights(nights => Math.min(nights + 1, 5));
    }

    const handleMinusGuests = () => {
        setGuests(guests => Math.max(guests - 1, 0));
    }

    const handleMinusBedrooms = () => {
        setBedrooms(bedrooms => Math.max(bedrooms - 1, 0));
    }

    const handleMinusBathrooms = () => {
        setBathrooms(bathrooms => Math.max(bathrooms - 1, 0));
    }

    const handleMinusNights = () => {
        setNights(nights => Math.max(nights - 1, 0));
    }

    // useEffect( () => {
    //     async function fetchData(){
    //         return await hotelApi.getDetailHotel();
    //     }
    //     fetchData()
    //         .then((res)=>{
    //             setDetailRoom(res.data);
    //             console.log(res.data)
    //         })
    // }, []);

    // useEffect( () => {
    //     axios.get('localhost:8080/rooms/3fe0745d-00bd-4cf9-82cc-c64d12752161')
    //     .then((res) => {
    //         setDetailRoom(res.data)
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err))
    // })

    const handleBooking = () => {

    }

    return(
        <>
            {/* {detailRoom && ( */}
                <div style={{margin: '96px 120px 0px', fontSize:'18px'}}>
                    <div style={{
                        fontSize:'32px'
                    }} >
                        {/* {detailRoom.name} */} Hotel Name
                    </div>
                    <div 
                        style={{
                            marginTop:'8px', fontStyle:'italic', fontSize:'20px'
                        }}
                    >
                        {/* {detailRoom.address} */} Hotel Address
                    </div>
                    <div style={{margin:'16px', borderRadius:'24px'}}>
                        <img src="" alt="" width='100%' height='400' style={{borderRadius:'24px'}}/>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', marginBottom:'40px'}}>
                        <div style={{marginRight:'40px', display:'flex', flexDirection:'row'}}>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillPlusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handlePlusGuests}
                                />
                            </Button>                        
                            <div style={{margin:'0px 16px', alignItems:'center', justifyContent:'center'}}>
                                Guests
                                <div 
                                    style={{
                                        backgroundColor:'#ccc', padding:'0px 24px', borderRadius:'24px', 
                                        display: 'inline-block', alignItems:'center', justifyContent:'center'
                                    }}
                                >
                                    {guests}
                                </div>
                            </div>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillMinusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handleMinusGuests}
                                />
                            </Button>
                        </div>

                        <div style={{marginRight:'40px', display:'flex', flexDirection:'row'}}>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillPlusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handlePlusBedrooms}
                                />
                            </Button>                        
                            <div style={{margin:'0px 16px', alignItems:'center', justifyContent:'center'}}>
                                Bedrooms
                                <div 
                                    style={{
                                        backgroundColor:'#ccc', padding:'0px 24px', borderRadius:'24px', 
                                        display: 'inline-block', alignItems:'center', justifyContent:'center'
                                    }}
                                >
                                    {bedrooms}
                                </div>
                            </div>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillMinusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handleMinusBedrooms}
                                />
                            </Button>
                        </div>

                        <div style={{marginRight:'40px', display:'flex', flexDirection:'row'}}>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillPlusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handlePlusBathrooms}
                                />
                            </Button>                        
                            <div style={{margin:'0px 16px'}}>
                                Bathrooms
                                <div 
                                    style={{
                                        backgroundColor:'#ccc', padding:'0px 24px', borderRadius:'24px', 
                                        display: 'inline-block', alignItems:'center', justifyContent:'center'
                                    }}
                                >
                                    {bathrooms}
                                </div>
                            </div>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillMinusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handleMinusBathrooms}
                                />
                            </Button>
                        </div>

                        <div style={{marginRight:'40px', display:'flex', flexDirection:'row'}}>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillPlusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handlePlusNights}
                                />
                            </Button>                        
                            <div style={{margin:'0px 16px'}}>
                                Nights
                                <div 
                                    style={{
                                        backgroundColor:'#ccc', padding:'0px 24px', borderRadius:'24px', 
                                        display: 'inline-block', alignItems:'center', justifyContent:'center'
                                    }}
                                >
                                    {nights}
                                </div>
                            </div>
                            <Button style={{maxWidth:'24px', maxHeight:'24px'}}>
                                <AiFillMinusSquare 
                                    size={24} 
                                    style={{cursor:'pointer'}}
                                    onClick={handleMinusNights}
                                />
                            </Button>
                        </div>
                    </div>

                    <div style={{float: 'right', display:'flex', flexDirection:'row'}}>
                        <div>
                            <div style={{padding:'0 120px'}}>
                                Check in
                            </div>
                            <DatePicker />
                        </div>
                        <div style={{marginLeft:'40px'}}>
                            <div style={{padding:'0 120px'}}>
                                Check out
                            </div>
                            <DatePicker />
                        </div>
                    </div>
                    
                    <div style={{marginTop:'32px', marginBottom:'32px', height:400}}>
                        Description
                        {}
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        style={{backgroundColor:'#ef405f', width:400}}
                        onClick={handleBooking}
                    >
                        Book now
                    </Button>
                    
                </div>
            {/* )}       */}
        </>  
    )
}

