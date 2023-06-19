import React from "react";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";


export default function HomePage() {
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    return(
        <>
            <Navbar />
            <Categories />
            <Rooms />
            <Footer />
        </>
    )
}

