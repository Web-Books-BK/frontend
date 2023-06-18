import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HostRent from "../components/Host/HostRent";
import HotelUpload from "../components/Host/HotelUpload";

export default function HostPage() {
    return (
        <>
            <Navbar />
            <HostRent />
            <HotelUpload />
        </>
    )
}