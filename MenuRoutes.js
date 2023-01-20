import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Demo from "./demo";
import * as React from 'react';
import About from "./About";
import Colors from "./Colors";
import Typography from "./Typography";
import Contact from "./Contact"
const MenuRoutes=()=>{
 return (
  <Router>
  <Routes>
  <Route  element={<Demo />} >
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/colors" element={<Colors />} />
    <Route path="/typography" element={<Typography />} />
    <Route path="/contact" element={<Contact />} />
    </ Route >
  </Routes>
</Router>
 )
   
  
}
export default MenuRoutes