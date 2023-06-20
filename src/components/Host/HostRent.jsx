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

export default function HotelRent() {
    const navigate = useNavigate();
    const [myRooms, setMyRooms] = useState([
        {
            "id": "",
            "name": "",
            "description": "",
            "available": true,
            "livingRoom": 0,
            "bedroom": 0,
            "toilet": 0,
            "wifi": "",
            "swimmingPool": true,
            "images": null,
            "price": "",
            "address": "",
            "phone": "",
            "owner": "",
            "createAt": "",
            "updateAt": ""
        }
    ]);

    useEffect(() =>  {
        async function getMyRooms()  {
            const result = await hotelApi.getListMyHotel()
                .then((res)=>{
                    setMyRooms(res.data.data);
                })
        }
        getMyRooms()
    }, [])

    const handleClick = (id) => {
        let path = `/id=${id}`;
        navigate(path);
    }

    const handleRemove = async (id) => {
        const result = await hotelApi.deleteMyHotel(id)
            .then(async (res)=>{
                console.log(res);
                const result = await hotelApi.getListMyHotel()
                    .then((res)=>{
                        setMyRooms(res.data.data);
                    })
            })

    };

    const handleUpdate = (id) => {

    };

    return (
        <>
            <h2
                style={{
                    width:'600px', float:'left', position:'absolute',
                    left:'40px', marginTop:'120px', fontWeight:'normal',
                    borderBottomStyle:'solid'
                }}
            >
                Room Rent
            </h2>

            <div
                style={{
                    display:'flex', flexDirection:'column', float:'left',
                    position:'relative', marginTop:'160px', marginLeft:'40px',
                }}
            >
                {myRooms.length > 0 && myRooms.map((room, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 2,
                            marginBottom: '40px',
                            width: 600,
                            flexGrow: 1,
                            float: 'left',
                            boxShadow: '5px 5px 10px #ccc',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 200, height: 200 }}>
                                    <Img alt={room.name} src={room.images ? room.images[0]: null } onClick={() => handleClick(room.roomId)}/>
                                </ButtonBase>
                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {room.name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Upload date: {room.uploadDate}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {room.address}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Grid item sx={{display:'flex', flexDirection:'row', marginBottom:2}}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{backgroundColor: '#ef405f'}}
                                                onClick={() => handleUpdate(room.id)}
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
                                                onClick={() => handleRemove(room.id)}
                                            >
                                                <DeleteIcon sx={{marginRight:'8px'}} />
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        {room.price}
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
