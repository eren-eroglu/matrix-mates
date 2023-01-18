import "./App.css";
import { useState } from "react";
import LeftBar from "./LeftBar";
import Home from "./Home";
import RightBar from "./RightBar";

function App(props) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App d-flex w-100 h-100 justify-content-between align-items-center align-content-center">
      
      <LeftBar showModal={showModal} setShowModal={setShowModal} />
      
  
        <Home showModal={showModal} />

      <RightBar />
    </div>
  );
}

export default App;
