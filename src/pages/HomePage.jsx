import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";
import Footer from "../components/Footer/Footer"

export default function HomePage() {
    return(
        <>
            <Navbar />
            <Categories />
            <Rooms />
            <Footer />
        </>  
    )
}

