import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaCaretDown, FaBell, FaSearch, FaQuestionCircle, FaUserAlt} from 'react-icons/fa'
import {CiLogout} from'react-icons/ci'
import NavProfilePicture from './NavProfilePic';

const Navbar = ({logout}) => {
  const [notificationCount, setNotificationCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNotificationCount(5);
    }, 500);
  }, []);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setUserName("John Smith");
    }, 100);
  }, []);

  return (
    <nav>
      <a href="/">
        <img className="nav-logo" src={process.env.PUBLIC_URL + '/CN-5 compressed.png'} alt="" />
      </a>

      <ul>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Products <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Connected Models <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Link className="link" to="/settings">
              My Clouds <FaCaretDown />
            </Link>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
        </li>
        <li><a href="/">My Users</a></li>
        <li><a href="/">My Assets Graph</a></li>
      </ul>

      {/* Search bar added here */}
      <form id="search-form">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
      </form>

      <ul>
        <li>
          <div className="notification-icon">
            <FaBell />
            {notificationCount > 0 && (
              <div className="badge">{notificationCount}</div>
            )}
          </div>
        </li>
        
        <li><a href="/help" title="Help"><FaQuestionCircle /></a></li>
        <li>
          
          <div className="dropdown">
            <Link to="/profile" title="Profile" style={{display:"flex", alignItems:"center"}}>
              <NavProfilePicture imageUrl={`${process.env.PUBLIC_URL}/johnsmith.jpg`} /> {userName}  <FaCaretDown />
            </Link>
            <div className="dropdown-user">
              <Link style={{display:"flex", alignItems:"center"}} to="/profile"><FaUserAlt style={{ marginRight: "10px"}} /> Profile</Link>
              <button style={{display:"flex", alignItems:"center"}} onClick={logout}><CiLogout style={{ color: 'red', marginRight: "10px"}} /> Logout</button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
