import "./App.css";
import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div id="main-container" className="main-container">
        <SideBar />
        <MainArea>
          <Navbar />
        </MainArea>
      </div>
    </>
  );
}

export default App;
