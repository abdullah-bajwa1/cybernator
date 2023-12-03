import { TbPlugConnected } from "react-icons/tb";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaStore } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdPolicy } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link className="link" to="/">
            <div className="sidebar-icon">
              <HiOutlineSquares2X2 />
            </div>
            <div className="no-wrap" href="/dashboard">
              Overview
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/connectors">
            <div className="sidebar-icon">
              <TbPlugConnected />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              AI Connectors
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/store">
            <div className="sidebar-icon">
              <FaStore />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              Store
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/assets">
            <div className="sidebar-icon">
              <LiaCoinsSolid />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              Assets
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/settings">
            <div className="sidebar-icon">
              <FiSettings />
            </div>
            <div className="no-wrap" href="/dashboard/avatars">
              Settings
            </div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/investigate">
            <div className="sidebar-icon">
              <AiOutlineFileSearch />
            </div>
            <div href="/dashboard/investigate">Investigate</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/policies">
            <div className="sidebar-icon">
              <MdPolicy />
            </div>
            <div href="/dashboard/policies">Policies</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/users">
            <div className="sidebar-icon">
              <FaUserFriends />
            </div>
            <div href="/dashboard/users">Users</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
