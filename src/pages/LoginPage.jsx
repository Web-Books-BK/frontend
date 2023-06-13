import React, {useEffect, useState} from "react";
import {Link } from "react-router-dom";
import {Box, Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/airbnb.png";
import authApi from "../api/authApi";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../app/reducers/authSlice";

export default function LoginPage(){
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        username: "",
        password: "",
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = async (e) => {
        const res = await authApi.login(input);
        if (res.token != null) {
            const result = sessionStorage.setItem("token", res.token);
            dispatch(login(input.username));
        }
        e.preventDefault();
    }
    useEffect(()=>{
        console.log(authState)
    })

    return(
        <div>
            <form onSubmit={handleLogin}>
                <Box display='flex' flexDirection='column' margin='50px auto' boxShadow='5px 5px 10px #ccc' padding='30px'
                    width='500px' border='1px solid #ccc' borderRadius='20px' justifyContent='center' alignItems='center'
                    sx={{':hover': {boxShadow: '10px 10px 20px #ccc'}, 'width': {sm: 300, md: 400, lg: 500}}}>
                    <div>
                        <img src={logo} alt='LogoAirbnb' width='75px' height='75px' sx={{'maxWidth': '100%', 'maxHeight': '100%'}} />
                    </div>

                    <TextField margin='normal' type='text' variant='outlined' label='Username' sx={{width: {sm: 300, md: 400}}}
                    name='username' value={input.username} onChange={handleInput} />
                    <TextField margin='normal' type='password' variant='outlined' label='Password' sx={{width: {sm: 300, md: 400}}}
                    name='password' value={input.password} onChange={handleInput} />

                    <Button type='submit' sx={{margin:3, borderRadius:2, width: {xs: 200, sm: 300, lg: 150} }} variant='contained' color='info'>Đăng nhập</Button>
                    <Link to={'/signup'}>Đăng ký?</Link>
                </Box>
            </form>
            <button onClick={()=>{
                dispatch(login("hien"));
            }}>login test</button>
        </div>

    );
}
