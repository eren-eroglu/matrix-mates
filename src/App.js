import "./App.css";
import logo from "./img/logo.png";
import LeftBar from "./LeftBar";
import Home from "./Home";
import RightBar from "./RightBar";

function App() {
  return (
    <div className="App d-flex w-100 h-100 justify-content-between align-items-center align-content-center">
      <LeftBar />
      
        <Home />
 
    
      <RightBar />
    </div>
  );
}

export default App;
