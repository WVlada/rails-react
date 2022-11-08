import React, {useEffect} from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home_component'
import Login from './components/login_component'
import Signup from './components/signup_component'
import { useAuth } from "./common/auth";


function App(){
    const { user, getUser } = useAuth();
    useEffect(() => {
      getUser();
    }, []);
    console.log(user)
    return (
        <BrowserRouter>
      {user ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      )}
    </BrowserRouter>
      )
    
    
}
export default App;