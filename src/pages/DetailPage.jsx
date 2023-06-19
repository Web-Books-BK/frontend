import React from "react";
import NavbarDetail from "../components/DetailRoom/NavbarDetail/NavbarDetail";
import DetailRoom from "../components/DetailRoom/DetailRoom";

export default function DetailPage({id}) {
    return(
        <>
            <NavbarDetail />
            <DetailRoom id={id}/>
        </>  
    )
}

