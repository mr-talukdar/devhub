import SearchInput from "./SearchInput/SearchInput";

const Navbar = () => {
  return (
    <div className="navbar">
      <SearchInput />
      <div id="nav-items" className="nav-items">
        <div>Overview</div>
        <div>Teams</div>
        <div className="vertical-line"></div>
        <div>Notifications</div>
        <div>Help</div>
        <div id="profile-image">
          <img src="https://img.icons8.com/color/48/user-male-circle--v5.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
