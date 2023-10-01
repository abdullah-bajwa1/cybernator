import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import AiConnectors from "./components/AiConnectors";
import Store from "./components/Store";
import Assets from "./components/Assets";
import Settings from "./components/Settings";
import Investigate from "./components/Investigate";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/connectors" element={<AiConnectors/>} />
              <Route path="/store" element={<Store/>} />
              <Route path="/assets" element={<Assets/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/investigate" element={<Investigate/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
