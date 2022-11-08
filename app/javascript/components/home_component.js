import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../common/auth";
const Home = () => {
  const { user, getUser } = useAuth();
  return (
    <div>
      {user ? (
        <div>Hello</div>
      ) : (
        <div>
          <Link to="/login">Log In</Link>
          <br></br>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
};
export default Home;
