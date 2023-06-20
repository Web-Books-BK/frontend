import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, TextField, Paper, Typography, Autocomplete, FormControlLabel, Checkbox} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ImageUploading from "react-images-uploading";
import { categories } from "../Category/Categories"
export default function HotelUpload() {
    const [room, setRoom] = useState({
        room: {
            name: "",
            description: "",
            available: true,
            livingRoom: 0,
            bedRoom: 0,
            toilet: 0,
            wifi: true,
            swimmingPool: true,
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

    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
        // submit data
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setRoom({
            ...room,
            [e.target.name]: value
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const roomData = {
            id: room.id,
            title: room.title,
            image: room.image,
            place: room.place,
            price: room.price,
            category: room.category,
            description: room.description
        };

        axios.post("http://localhost:3001/rooms", roomData)
        .then((res) => {
            console.log(res.status, res.data.token);
        });

        // Reset form fields
        e.target.reset();
    };
    useEffect(()=>{
        console.log(images)
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
                    name="title"
                    defaultValue={room.title}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home name"
                    onChange={handleChange}
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
                                }).then((res)=>{
                                    const newImage = res.data.files[0].fileUrl;
                                    setImages(prevImage =>
                                        [...prevImage,newImage]
                                    )
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
                    defaultValue={room.place}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your country"
                    onChange={handleChange}
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
                    />
                    <FormControlLabel required control={<Checkbox />} label="Wifi" />
                    <FormControlLabel required control={<Checkbox />} label="Swimming pool" />
                    <TextField
                    label="Price"
                    id="standard-basic"
                    variant="standard"
                    name="price"
                    defaultValue={room.price}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home's price"
                    onChange={handleChange}
                    />
                    <TextField
                        label="Phone"
                        id="standard-basic"
                        variant="standard"
                        name="phone"
                        // defaultValue={room.price}
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter your phone number"
                        onChange={handleChange}
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
                    defaultValue={room.description}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your home's description"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{margin: theme.spacing(6,2), backgroundColor: '#ef405f', display:'flex'}}
                >
                    Upload
                    <SendIcon sx={{marginLeft: theme.spacing(3)}} />
                </Button>
                </form>
            </Paper>
        </div>
    );
};
