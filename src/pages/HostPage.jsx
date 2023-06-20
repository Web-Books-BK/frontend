import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import HostRent from "../components/Host/HostRent";
import HotelUpload from "../components/Host/HotelUpload";

export default function HostPage() {
    const [reload ,setReload] = useState(false);
    return (
        <>
            <Navbar />
            <HostRent reload={reload}/>
            <HotelUpload reload={reload} setReload={setReload}/>
        </>
    )
}
