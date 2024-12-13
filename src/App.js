import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Hone";
import About from "./about";
import Contact from "./Contact";
import Destination from "./Destination"
import Footer from "./Footer";
function App(){
  return(<>
  <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Destination" element={<Destination/>}/>
     </Routes>
     <Footer/>
  </Router>
  </>)
}
export default App