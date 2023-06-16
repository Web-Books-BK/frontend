import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Paper, Typography, Autocomplete } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { categories } from "../Category/Categories";

export default function HotelUpload() {
    const [room, setRoom] = useState({
        id: "",
        title: "",
        image: "",
        place: "",
        price: "",
        category: "",
    });

    const theme = createTheme({
        spacing: 4,
    });

    const defaultProps = {
        options: categories,
        getOptionLabel: (option) => option.label,
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
            category: room.category
        };

        axios.post("http://localhost:3001/rooms", roomData)
        .then((res) => {
            console.log(res.status, res.data.token);
        });

        // Reset form fields
        e.target.reset();
    };

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

                <form onSubmit={handleUpload} autoComplete='off'>
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
                    <TextField
                        label="Description"
                        id="standard-basic"
                        variant="standard"
                        name="title"
                        defaultValue={room.title}
                        sx={{margin: theme.spacing(2), width: 500}}
                        autoComplete='off'
                        helperText="Enter description for your hotel"
                        onChange={handleChange}
                    />
                <Button
                    id="standard-basic"
                    variant="contained"
                    component="label"
                    name="image"
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        multiple
                    />
                </Button>
                <TextField
                    label="Place"
                    id="standard-basic"
                    variant="standard"
                    name="place"
                    defaultValue={room.place}
                    sx={{margin: theme.spacing(2), width: 500}}
                    autoComplete='off'
                    helperText="Enter your country"
                    onChange={handleChange}
                />
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
                <Autocomplete
                    {...defaultProps}
                    id="disable-portal"
                    disablePortal
                    sx={{margin: theme.spacing(2), width: 500}}
                    renderInput={(params) => (
                      <TextField {...params} label="Category" variant="standard" />
                    )}
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
