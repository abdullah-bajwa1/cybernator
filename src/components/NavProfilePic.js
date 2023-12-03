const NavProfilePicture = ({ imageUrl }) => {
    return (
      <div className="nav-profile-picture">
        <img src={imageUrl} alt="Profile" />
      </div>
    );
  };
  
  export default NavProfilePicture;