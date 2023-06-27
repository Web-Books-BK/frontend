import React, {useState} from "react";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";


export default function HomePage() {
    const [rooms, setRooms] = useState([]);
    return(
        <>
            <Navbar />
            <Categories rooms={rooms} setRooms={setRooms}/>
            <Rooms rooms={rooms} setRooms={setRooms}/>
            <Footer />
        </>
    )
}

