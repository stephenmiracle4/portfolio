import './App.css';
import Nav from './components/Navbar/Nav';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
// import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
    {/* <ul>
      <li> <FaGithub/> Check my Github</li>
    </ul> */}
     <Nav/>
     <Home/>
     <About/>
     <Contact/>
     {/* <Sidebar/> */}
    
    </>
  );
}

export default App;
