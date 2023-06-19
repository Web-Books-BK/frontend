
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HostPage from "./pages/HostPage";
import {useSelector} from "react-redux";

import DetailPage from "./pages/DetailPage";
import RentedPage from "./pages/RentedPage";

function App() {
  const authState = useSelector((state) => state.auth)
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
              <Route path='/hosts' element={<HostPage />} />
              <Route  path='/' element={<HomePage />}/>
              <Route path='/rooms/*' element={<DetailPage />} />
              <Route path='/rented' element={<RentedPage />} />
              <Route path='/*' element={<div>Blank Page</div>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
