import { Outlet, useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import { useEffect } from "react";

const Home = ({ isLoggedIn, logout }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Navigate");
      navigate('/login');
    } else {
      console.log("Don't navigate");
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) {
    // Return null or a different component when not logged in
    return null;
  }
  
  
  
  return (

    
    <>
      <Navbar logout={logout} />
      <div className="row-container">
        <SideBar />
        <div className="top-left">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home
