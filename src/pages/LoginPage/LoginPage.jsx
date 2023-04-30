import React from "react";
import {Link } from "react-router-dom";
import './LoginPage.css'

const Login = {
    margin: 'auto',
    height:'400px',
    width:'400px',
    border: '2px solid',
    borderRadius: '20px',
    backgroundColor: '#B0E0E6',
    display:'flex',
    flexDirection: 'column',
}

const Label = {
    margin: '10px 20px',
}

const Input = {
    margin: '10px 20px',
    height: '30px',
}

const Logo = {
    width: '75px',
    height: '75px',
    maxWidth: '100%',
    maxHeight: '100%',
}

const Submit = {
    margin: '20px auto',
    padding: '5px',
    width: '100px',
    cursor: 'pointer',
}

export default function LoginPage(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    return(
        <div style={{height: '100vh',padding: '100px', backgroundColor:'pink'}}>
            <form className="Login" onSubmit={handleSubmit} style={Login}>
                <div className="logo" style={{margin:'0px auto'}}>
                    <img src="airbnb.png" alt="LogoAirbnb" style={Logo}/>
                </div>
                
                <label htmlFor="username" style={Label}>Username</label>
                <input type="text" name="username" className="username" placeholder="enter your username" style={Input}/>
                <label htmlFor="password" style={Label}>Password</label>
                <input type="password" name="password" className="password" placeholder="enter your password" style={Input}/>
                
                <button type="submit" style={Submit}>Log in</button>
                <Link to={'/signup'} style={{margin: '0px auto'}}>Đăng ký?</Link>
            </form>
        </div>
    );
}
