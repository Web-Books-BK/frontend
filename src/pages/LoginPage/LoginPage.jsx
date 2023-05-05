import React from "react";
import {Link } from "react-router-dom";
import {Box, Button, TextField} from "@mui/material"

export default function LoginPage(){
    return(
        <div>
            <form>
                <Box display='flex' flexDirection='column' margin='50px auto' boxShadow='5px 5px 10px #ccc' padding='30px'
                    width='500px' border='1px solid #ccc' borderRadius='20px' justifyContent='center' alignItems='center'
                    sx={{':hover': {boxShadow: '10px 10px 20px #ccc'}, 'width': {sm: 300, md: 400, lg: 500}}}>
                    <div>
                        <img src='airbnb.png' alt='LogoAirbnb' width='75px' height='75px' maxWidth='100%' maxHeight='100%'/>
                    </div>
                    <TextField margin='normal' type='text' variant='outlined' label="Username" sx={{width: {sm: 300, md: 400}}}/>
                    <TextField margin='normal' type='password' variant='outlined' label="Password" sx={{width: {sm: 300, md: 400}}}/>
                    <Button sx={{margin:3, borderRadius:2, width: {xs: 200, sm: 300, lg: 150} }} variant='contained' color='info'>Đăng nhập</Button>
                    <Link to={'/signup'}>Đăng ký?</Link>
                </Box>
            </form>
        </div>
    );
}
