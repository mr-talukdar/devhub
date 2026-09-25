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
          <img src="https://img.icons8.com/?size=100&id=kZNsJ6pzYD2J&format=png&color=000000" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
