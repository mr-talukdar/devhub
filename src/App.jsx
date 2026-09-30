import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import MainArea from "./components/MainArea";
import Dashboard from "../pages/Dashboard/Dashboard";
import Developers from "../pages/Developers/Developers";
function App() {
  return (
    <>
      <MainLayout>
        <MainArea>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/developers" elements={<Developers />} />
          </Routes>
        </MainArea>
      </MainLayout>
    </>
  );
}

export default App;
