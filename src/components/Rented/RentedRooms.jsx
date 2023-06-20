import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Typography, ButtonBase, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Construction from '@mui/icons-material/Construction';
import { styled } from '@mui/material/styles';
import axios from "axios";
import hotelApi from "../../api/hotelApi";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function RentedRoom() {
    const navigate = useNavigate();
    const [bookedRooms, setBookedRooms] = useState([]);

    useEffect(() => {
        async function listRentedRooms() {
            const response = await hotelApi.getListRentedHotel()
                .then((res)=>{
                    setBookedRooms(res.data.data.reservated);
                    console.log(res.data.data.reservated);
                })
        }
        listRentedRooms()
    }, [])

    const handleClick = (id) => {
        let path = `/id=${id}`;
        navigate(path);
    }

    const handleRemove = async (id) => {
        const result = await hotelApi.deleteRentedHotel(id)
            .then((res)=>{
                console.log(res)
            })
        const response = await hotelApi.getListRentedHotel()
            .then((res)=>{
                setBookedRooms(res.data.data.reservated);
                console.log(res.data.data.reservated);
            })
    };

    const handleUpdate = (id) => {

    };

    return (
        <>
            <h2
                style={{
                    width:'100%', float:'left', position:'absolute',
                    left:'40px', marginTop:'120px', fontWeight:'normal',
                    borderBottomStyle:'solid'
                }}
            >
                All rooms you have rented
            </h2>

            <div
                style={{
                    display:'flex', flexDirection:'row', float:'left', flexWrap:'wrap',
                    position:'relative', marginTop:'160px', marginLeft:'40px'
                }}
            >
                {bookedRooms.length > 0 && bookedRooms.map((bookedRoom, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 2,
                            marginBottom: '40px',
                            marginRight:'40px',
                            width: 500,
                            flexGrow: 1,
                            boxShadow: '5px 5px 10px #ccc',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 200, height: 200 }}>
                                    <Img alt={bookedRoom} src={bookedRoom.Room.images ? bookedRoom.Room.images[0] : null } onClick={() => handleClick(bookedRoom.roomId)}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {bookedRoom.Room.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            From: {new Date(bookedRoom.startDate *1000 ).toDateString()}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom sx={{fontStyle: "italic"}}>
                                           To: {new Date(bookedRoom.endDate *1000 ).toDateString()}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {bookedRoom.Room.address}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid item sx={{display:'flex', flexDirection:'row', marginBottom:2}}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{backgroundColor: '#ef405f'}}
                                                onClick={() => handleUpdate(bookedRoom.id)}
                                            >
                                                <Construction sx={{marginRight:'8px'}} />
                                                Update
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{backgroundColor: '#ef405f'}}
                                                onClick={() => handleRemove(bookedRoom.id)}
                                            >
                                                <DeleteIcon sx={{marginRight:'8px'}} />
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {bookedRoom.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </>
    )

}
