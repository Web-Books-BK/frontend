import React, {useState, useEffect} from "react";
import {Button, Grid, Typography} from "@mui/material";
import DatePicker from "./DatePicker";
import hotelApi from "../../api/hotelApi";
import reservationApi from "../../api/reservationApi";
import {useNavigate} from "react-router-dom";


export default function DetailRoom({id}) {
    const navigate = useNavigate();
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


    useEffect(() => {
        async function fetchData() {
            return await hotelApi.getDetailHotel(id)
                .then((res) => {
                    setDetailRoom(res.data.data);
                })
        }

        fetchData()
    }, []);


    const handleBooking = async () => {
        try {

            const result = await reservationApi.bookingHotel(bookingInfo)
                .then((res) => {
                    console.log(res)
                    navigate('/rented')
                })
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <div style={{margin: '96px 120px 0px', fontSize: '18px'}}>
                <div style={{
                    fontSize: '32px'
                }}>
                    {detailRoom.name}
                </div>
                <div
                    style={{
                        marginTop: '8px', fontStyle: 'italic', fontSize: '20px'
                    }}
                >
                    {detailRoom.address}
                </div>
                <div style={{margin: '16px', borderRadius: '24px'}}>
                    <img src={detailRoom.images[0]} alt="" width='100%' height='400' style={{borderRadius: '24px'}}/>
                </div>

                <div style={{float: 'right', display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <div style={{padding: '0 120px'}}>
                            Check in
                        </div>
                        <DatePicker
                            onChange={(e) => {
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
                    <div style={{marginLeft: '40px'}}>
                        <div style={{padding: '0 120px'}}>
                            Check out
                        </div>
                        <DatePicker
                            onChange={(e) => {
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

                <div style={{marginTop: '32px', marginBottom: '32px', height: 400}}>
                    <Typography variant="h5" component={"div"}>
                        Description
                    </Typography>
                    <Typography variant="h7" component={"div"}>
                        {detailRoom.description}
                    </Typography>
                    <Grid container spacing={2}
                          style={{
                              width: '50%',
                              marginTop: '5%',
                          }}
                    >
                        <Grid xs={6} rowSpacing={10}>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',
                                        }}
                            >
                                LivingRoom: {detailRoom.livingRoom}
                            </Typography>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',
                                        }}
                            >
                                BedRoom: {detailRoom.bedroom}
                            </Typography>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',

                                        }}
                            >
                                Toilet: {detailRoom.toilet}
                            </Typography>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',
                                        }}
                            >
                                Wifi: {detailRoom.wifi ? "Yes" : "No"}
                            </Typography>
                        </Grid>
                        <Grid xs={6}>


                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',
                                        }}
                            >
                                Swimming Pool: {detailRoom.swimmingPool ? "Yes" : "No"}
                            </Typography>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',
                                        }} s
                            >
                                Price: {detailRoom.price}$/night
                            </Typography>
                            <Typography variant="h7" component={"div"}
                                        style={{
                                            fontWeight: 'bold',
                                            color: '#6c6c6c',
                                            marginBottom: '3%',

                                        }}
                            >
                                Phone: {detailRoom.phone}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '5%'
                    }}
                >
                    <div style={
                        detailRoom.available ? {
                            marginTop: '32px', marginBottom: '32px', fontSize: '32px', color: '#0ae52d', height: '100px'
                        } : {
                            marginTop: '32px', marginBottom: '32px', fontSize: '32px', color: '#d92c2c'
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
                        style={{backgroundColor: '#ef405f', width: 400}}
                        onClick={handleBooking}
                        disabled={detailRoom.available ? false : true}
                    >
                        Book now
                    </Button>
                </div>

            </div>
        </>
    )
}

