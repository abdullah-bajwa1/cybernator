import {FaHouseUser, FaShapes, FaNetworkWired} from 'react-icons/fa'
import {FaMagnifyingGlassChart} from 'react-icons/fa6'
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { GiSettingsKnobs } from "react-icons/gi";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="sidebar">
     <ul>
        <li><Link className="link" to="/dashboard"><div className="sidebar-icon"><FaHouseUser /></div><div className="no-wrap" href="/dashboard">Dashboard</div></Link></li>
        <li><Link className="link" to="/connectors"><div className="sidebar-icon"><FaShapes /></div><div className="no-wrap" href="/dashboard/avatars">AI Connectors</div></Link></li>
        <li><Link className="link" to="/store"><div className="sidebar-icon"><AiOutlineAppstoreAdd /></div><div className="no-wrap" href="/dashboard/avatars">Store</div></Link></li>
        <li><Link className="link" to="/assets"><div className="sidebar-icon"><FaNetworkWired /></div><div className="no-wrap" href="/dashboard/avatars">Assets</div></Link></li>
        <li><Link className="link" to="/settings"><div className="sidebar-icon"><GiSettingsKnobs /></div><div className="no-wrap" href="/dashboard/avatars">Settings</div></Link></li>
        <li><Link className="link" to="/investigate"><div className="sidebar-icon"><FaMagnifyingGlassChart /></div><div href="/dashboard/investigate">Investigate</div></Link></li>
      </ul> 
    </div>
  )
}

export default SideBar
