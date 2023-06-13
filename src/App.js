
import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HostPage from "./pages/HostPage";

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
          path: "/*",
          element: <div>Blank Page</div>
        },
    ]);

    const authState = useSelector((state) => state.auth)
    const navigate = useNavigate();
    useEffect(()=>{
        if(authState.loggedIn == true) {
            navigate("/");
        }
    },[authState.loggedIn])
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
              <Route  path='/' element={<HomePage />}/>
              <Route path='/*' element={<div>Blank Page</div>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
