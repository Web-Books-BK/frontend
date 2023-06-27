import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HostPage from "./pages/HostPage";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";

import DetailPage from "./pages/DetailPage";
import RentedPage from "./pages/RentedPage";
import {login} from "./app/reducers/authSlice";
import authApi from "./api/authApi";

function App() {

    const authState = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const token = sessionStorage.getItem("token");
        if(token){
            const result = authApi.getUserInfo()
                .then((res)=>{
                    if(res.status==200) {
                        const userInfo = res.data.data.user;
                        dispatch(login(userInfo));
                    }
                })
        }
    },[authState])
    useEffect(()=>{
        console.log("authState",authState)
    })
  return (
        <div className="App">
            <Routes>
                <Route>
                    {authState.loggedIn ?
                        <>
                        </>
                        :
                        <>
                            <Route path='/login' element={<LoginPage />}/>
                            <Route path='/signup' element={<SignUpPage />}/>
                        </>
                    }

                    <Route path='/rooms/*' element={<DetailPage />} />
                    <Route path='/rented' element={<RentedPage />} />
                    <Route path='/hosts' element={<HostPage />} />
                    <Route  path='/' element={<HomePage />}/>
                    <Route path='/*' element={<div>Blank Page</div>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
