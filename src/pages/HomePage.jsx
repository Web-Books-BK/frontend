import React from "react";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    return(
        <>
            <Navbar />
            <Categories />
            <Rooms />
            <Link to={'/login'}>Đăng nhập</Link>
        </>
    )
}

