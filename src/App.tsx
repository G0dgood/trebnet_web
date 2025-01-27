import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Screens/NotFound/NotFound";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Project from "./Screens/Project/Project";
import Directory from "./Screens/Directory/Directory";



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;