import "./MainLayout.css";
import Navbar from "./Navbar";
import SideBar from "./Sidebar/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div id="main-container" className="main-container">
      <SideBar />
      <div className="content-wrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
