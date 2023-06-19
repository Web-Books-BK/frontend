import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HostPage from "./pages/HostPage";
import {useSelector} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import DetailPage from "./pages/DetailPage";
import RentedPage from "./pages/RentedPage";
import {login} from "./app/reducers/authSlice";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignUpPage />,
        },
        {
            path: "/hosts",
            element: <HostPage />,
        },
        {
            path: "/rented",
            element: <RentedPage />,
        },
        {
            path: "/details/*",
            element: <DetailPage />,
        },
        {
            path: "/*",
            element: <div>Blank Page</div>
        },
    ]);

    const authState = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const token = sessionStorage.getItem("token");
        if(token){
            dispatch(login());
        }
    },[authState])
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

                    <Route path='/details/*' element={<DetailPage />} />
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
