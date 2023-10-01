import {FaArrowRightFromBracket} from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav>
      <a href="/"><img className="nav-logo" src="/CN-5 compressed.png" alt=""></img></a>
      
        <ul>
          
          <li><a href="/">Home</a></li>
          <li><a href="/">Settings</a></li>
          <li><a href="/">Notifications</a></li>
          <li><a className="logout-button" href="/logout"><FaArrowRightFromBracket /></a></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
