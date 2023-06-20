import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, TextField, Paper, Typography, Autocomplete, FormControlLabel, Checkbox} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ImageUploading from "react-images-uploading";
import { categories } from "../Category/Categories"
import hotelApi from "../../api/hotelApi";
export default function HotelUpload({reload, setReload}) {
    const [roomInfo, setRoomInfo] = useState({
        room: {
            name: "",
            description: "",
            available: true,
            livingRoom: 0,
            bedRoom: 0,
            toilet: 0,
            wifi: false,
            swimmingPool: false,
            price: "",
            address: "",
            phone: "",
            images: []
        }
    });


    const [images, setImages] = useState([]);
    const theme = createTheme({
        spacing: 4,
    });

    const defaultProps = {
        options: categories,
        getOptionLabel: (option) => option.label,
    };



    const handleUpload = async () => {
        // setRoomInfo({
        //     room: {
        //         ...roomInfo.room,
        //         images: images
        //     }
        // });
        try {
            const result = await hotelApi.uploadMyHotel(roomInfo)
                .then((res)=>{
                    console.log(res)
                    setReload(!reload);
                })
        }catch (e){
            console.log(e)
        }

    };
    useEffect(()=>{
        setRoomInfo({
            room: {
                ...roomInfo.room,
                images: images
            }
        });
    },[images])
    useEffect(()=>{
        console.log(roomInfo);
    })

    return (
        <div
            style={{
                position:'relative', float:'right', right:40, width:'40%',
                boxShadow:'5px 5px 5px 5px #ccc', margin:'160px auto', padding:'20px'
            }}
        >
            <Paper sx={{margin: theme.spacing(2), padding: theme.spacing(3)}} >
                <Typography variant="h5" component="h3">
                Hotel Upload
                </Typography>
                <Typography component="p">You can upload your home and rent it</Typography>

                <form  autoComplete='off'>
                <TextField
                    label="Hotel Name"
                    id="standard-basic"
                    variant="standard"
                    name="name"
                    defaultValue={roomInfo.title}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home name"
                    onChange={(e)=> {
                        setRoomInfo({
                            room: {
                                ...roomInfo.room,
                                name: e.target.value
                            }
                        });
                    }}
                />

                <Typography sx={{margin: theme.spacing(2)}}>
                    Maximum upload 10 photos
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={async (e)=>{
                            // console.log(typeof (e.target.files.item(0)))
                            // console.log(e.target.files.item(0).type)
                            var bodyFormData = new FormData();
                            bodyFormData.append('file',e.target.files.item(0));
                            try {
                                const result = await axios.post('https://api.upload.io/v2/accounts/W142hze/uploads/form_data',
                                    bodyFormData,
                                    {
                                        headers: {
                                            'Content-Type': "multipart/form-data",
                                            'Authorization': "Bearer public_W142hze9v1BzSKxmiavBDcbzxenQ"
                                        }
                                }).then( (res)=>{
                                    const newImage = res.data.files[0].fileUrl;
                                    setImages(prevImage =>
                                        [...prevImage,newImage]
                                    )
                                    setRoomInfo({
                                        room: {
                                            ...roomInfo.room,
                                            images: images
                                        }
                                    });
                                })
                            }catch (e){
                                console.log(e)
                            }

                        }}
                    />

                </Button>
                {images.map((image, index) => (
                    <div key={index} style={{display:'flex', flexDirection:'row', margin:'10px', float:'left', left:0}}>
                        <img src={image} alt="" width="100" height="100"/>
                    </div>
                ))}


                <TextField
                    label="Address"
                    id="standard-basic"
                    variant="standard"
                    name="address"
                    defaultValue={roomInfo.place}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your country"
                    onChange={(e)=> {
                        setRoomInfo({
                            room: {
                                ...roomInfo.room,
                                address: e.target.value
                            }
                        });
                    }}
                />
                    <TextField
                        id="outlined-number"
                        variant="standard"
                        name="living room"
                        label="Living room"
                        type="number"
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter your living room number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e)=> {
                            setRoomInfo({
                                room: {
                                    ...roomInfo.room,
                                    livingRoom: Number(e.target.value)
                                }
                            });
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        variant="standard"
                        name="Bed room"
                        type="number"
                        label="Bed room"
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter your bed room number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e)=> {
                            setRoomInfo({
                                room: {
                                    ...roomInfo.room,
                                    bedRoom: Number(e.target.value)
                                }
                            });
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        variant="standard"
                        name="Toilet"
                        label="Toilet"
                        type="number"
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter your toilet number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e)=> {
                            setRoomInfo({
                                room: {
                                    ...roomInfo.room,
                                    toilet: Number(e.target.value)
                                }
                            });
                        }}
                    />
                    <FormControlLabel required control={<Checkbox />} label="Wifi"
                                      defaultValue={roomInfo.room.wifi}
                                      onChange={(e)=> {
                                          setRoomInfo({
                                              room: {
                                                  ...roomInfo.room,
                                                  wifi: e.target.checked
                                              }
                                          });
                                      }}
                    />
                    <FormControlLabel required control={<Checkbox />} label="Swimming pool"
                                      onChange={(e)=> {
                                          setRoomInfo({
                                              room: {
                                                  ...roomInfo.room,
                                                  wifi: e.target.checked
                                              }
                                          });
                                      }}
                    />
                    <TextField
                    label="Price($)"
                    id="standard-basic"
                    variant="standard"
                    name="price"
                    defaultValue={roomInfo.room.price}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home's price"
                    onChange={(e)=> {
                        setRoomInfo({
                            room: {
                                ...roomInfo.room,
                                price: e.target.value
                            }
                        });
                    }}
                    />
                    <TextField
                        label="Phone"
                        id="standard-basic"
                        variant="standard"
                        name="phone"
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter your phone number"
                        onChange={(e)=> {
                            setRoomInfo({
                                room: {
                                    ...roomInfo.room,
                                    phone: e.target.value
                                }
                            });
                        }}
                    />
                <Autocomplete
                    {...defaultProps}
                    id="disable-portal"
                    disablePortal
                    sx={{margin: theme.spacing(2), width: 500}}
                    renderInput={(params) => (
                      <TextField {...params} label="Category" variant="standard" />
                    )}
                />
                <TextField
                    label="Description"
                    id="standard-basic"
                    variant="standard"
                    name="description"
                    defaultValue={roomInfo.room.description}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home's description"
                    onChange={(e)=> {
                        setRoomInfo({
                            room: {
                                ...roomInfo.room,
                                description: e.target.value
                            }
                        });
                    }}
                />
                <Button
                    variant="contained"
                    sx={{margin: theme.spacing(6,2), backgroundColor: '#ef405f', display:'flex'}}
                    onClick={handleUpload}
                >
                    Upload
                    <SendIcon sx={{marginLeft: theme.spacing(3)}} />
                </Button>
                </form>
            </Paper>
        </div>
    );
};
