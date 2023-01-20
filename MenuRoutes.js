import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Demo from "./demo";
import * as React from 'react';
import About from "./About"
const MenuRoutes=()=>{
 return (
  <Router>
  <Routes>
  <Route  element={<Demo />} >
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Home />} />
    </ Route >
  </Routes>
</Router>
 )
   
  
}
export default MenuRoutes