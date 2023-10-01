import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="row-container">
            <SideBar />
            <div className="top-left">
              <Outlet />
            </div>

        </div>
    </>
  )
}

export default Home
