import React from "react";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('loggedIn')
        navigate("/login");
    }

    return(
        <div
            style={{
                height:'100vh',
            }}
        >
            <Header />
            HomePage
            <Button onClick={handleLogout} sx={{margin:3, borderRadius:2, width: {lg: 100} }} variant='contained' color='info'>Log out</Button>
        </div>
    )
}

