import React, { useState } from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox} from '@mui/material';
import { Paper, Grid, Box, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/airbnb.png";
import authApi from "../api/authApi";

export default function SignUpPage() {
    const navigate = useNavigate();
    const defaultTheme = createTheme();

    const [input, setInput] = useState({
        "userName": "",
        "fullName": "",
        "email": "",
        "password": "",
        "phone": "",
        "address": "",
        "role": 1
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value, 
        })
    }
    
    // Store value in sessionStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('user', JSON.stringify(input));
        sessionStorage.setItem('loggedIn', true);
        navigate('/');
    }

    const handleSignUp = async () => {
        try {
            const res = await authApi.signup(input);
            if (res.status === 200) {
                sessionStorage.setItem("id", res.data.user.id)
                
                navigate("/");
            }
        }catch (e){
            if (e.response.status === 401){
                
            }
        }
    }

    return(
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item
                    xs={false} sm={4} md={7}
                    className='picture'
                sx={{
                    animationName:'picture',
                    animationDuration: '4s',
                    backgroundImage: 'url(https://source.unsplash.com/random?rooms)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <div>
                        <img src={logo} alt='LogoAirbnb' width='75px' height='75px' sx={{ m: 1, bgcolor: 'secondary.main', 'maxWidth': '100%', 'maxHeight': '100%'}} />
                    </div>
                    <Typography component="h1" variant="h5">
                    Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="email"
                        label="Email"
                        type="text"
                        name="email"
                        autoComplete="email"
                        helperText="Enter your email"
                        autoFocus
                        value={input.email}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="fullName"
                        label="fullName"
                        type="text"
                        name="fullName"
                        autoComplete="fullName"
                        helperText="Enter your full name"
                        autoFocus
                        value={input.fullName}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        helperText="Enter your username"
                        autoFocus
                        value={input.userName}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="address"
                        label="Address"
                        type="text"
                        name="address"
                        autoComplete="address"
                        helperText="Enter your address"
                        autoFocus
                        value={input.address}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth      
                        id="phone"
                        label="Phone Number"
                        type="text"
                        name="phone"
                        autoComplete="phone"
                        helperText="Enter your phone number"
                        autoFocus
                        value={input.phone}
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText="Enter your password"
                        value={input.password}
                        onChange={handleInput}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary"/>}
                        label="I agree to Airbnb's Privacy Policy" 
                       
                    />
                    <Button 
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1, backgroundColor: 'black' }}
                    >
                        <FcGoogle style={{marginRight:24}}/>
                        Continue with Google
                    </Button>
                    <Button 
                        fullWidth
                        variant="contained" 
                        sx={{ mt: 1, mb: 1, backgroundColor: 'black' }}
                    >
                        <AiFillGithub style={{marginRight:24}}/>
                        Continue with Github
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#ef405f' }}
                        onClickCapture={handleSignUp}
                        
                    >
                        Sign Up
                    </Button>
                    <Grid container >
                        <Grid item>
                        <Link to={'/login'} variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
