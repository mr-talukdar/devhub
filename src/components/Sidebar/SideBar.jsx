import "./SideBar.css";
import Logo from "./Logo";
import { SideBarMenus } from "../../lib/constants";

const SideBar = () => {
  return (
    <div id="side-bar" className="side-bar">
      <Logo />
      <button className="new-project-button">+ New Project</button>
      {SideBarMenus.map((menuItem) => (
        <div key={menuItem.path} className="menu-item">
          <img
            src={menuItem.logoLink}
            style={{ width: 24, height: 24 }}
            className="black-to-white"
            alt={menuItem.title}
          />
          <div style={{ flex: 1 }}>{menuItem.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
