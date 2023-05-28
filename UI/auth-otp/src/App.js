import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Verify from "./Components/Verify";
import Welcome from "./Components/Welcome";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/verify" element={<Verify/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
