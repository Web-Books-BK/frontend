import React from "react";
import Search from './Search';
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { MdLanguage } from "react-icons/md"
import "./Navbar.css"
import {useSelector} from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth)

    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <div
            style={{
                height:'80px', width:'100%', display:'flex',top: '0px',
                background: '#fff', position:'fixed', zIndex:2,
                borderBottom:'1px solid #ccc'
            }}

        >
            <div style={{margin:'auto 20px'}}>
                <img
                    src={logo} alt="logo" height='40px' width='150px'
                    style={{cursor:'pointer'}}
                    onClick={() => handleClick('/')}
                />
            </div>

            <Search />

            <div style={{
                    alignItems:'center', justifyContent:'center', margin:'auto',
                    display:'flex', flexDirection:'row', rowGap:'5px'
                }}
            >
                <div
                    className="airbnb_home"
                    style={{fontSize:'1rem', cursor:'pointer', padding: '10px'}}c
                    onClick={() => handleClick('/hosts')}
                >
                    Your home
                </div>
                <div
                    className="language"
                    style={{padding:5,marginLeft:"20px", marginRight:"20px", cursor:'pointer'}}
                >
                    <MdLanguage size={24}/>
                </div>
                {authState.loggedIn?
                    <>Hello,{authState.fullName}</>
                :
                    <></>
                }
                <div></div>
                <div>
                    <UserMenu />
                </div>
            </div>
        </div>
    )
}

