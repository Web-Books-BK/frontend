import React from "react";
import NavbarDetail from "../components/DetailRoom/NavbarDetail/NavbarDetail";
import DetailRoom from "../components/DetailRoom/DetailRoom";
import {useLocation} from "react-router-dom";

export default function DetailPage() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    return(
        <>
            <NavbarDetail />
            <DetailRoom id={id}/>
        </>
    )
}

