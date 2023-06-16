import React, {useEffect} from "react";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


export default function HomePage() {
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     console.log(authState)
    // })
    return(
        <>
            <Navbar />
            <Categories />
            <Rooms />
            {/*<Button*/}
            {/*    onClick={()=>{*/}
            {/*        const userInfo = sessionStorage.getItem("user");*/}
            {/*        console.log(userInfo);*/}
            {/*    }}*/}
            {/*>hien</Button>*/}
        </>
    )
}

